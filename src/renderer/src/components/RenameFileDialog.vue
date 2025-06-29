<template>
  <n-flex vertical>
    <n-flex class="my-8" vertical>
      <n-alert v-if="newName.match(/\s/)" type="warning">
        {{ t("github-files.msg-space-replacement-warning") }}
      </n-alert>
      <n-input
        v-model:value="newName"
        :placeholder="t('github-files.msg-rename-placeholder')"
        :disabled="loading"
        @keydown.enter="confirmRename"
      >
        <template #suffix>
          {{ "." + fileExt }}
        </template>
      </n-input>
    </n-flex>
    <!-- footer (action) -->
    <n-flex justify="end">
      <n-button :disabled="loading" @click="$emit('close')">
        {{ t("general.btn-cancel") }}
      </n-button>
      <n-button
        :loading="loading"
        type="primary"
        :disabled="!newName"
        @click="confirmRename"
      >
        {{ t("general.btn-confirm") }}
      </n-button>
    </n-flex>
  </n-flex>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { storeToRefs } from "pinia";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import db from "@renderer/utils/queryDB";
import { ghUpdateAsset } from "@renderer/utils/octokit";
import { useSettingsStore } from "@renderer/stores/settings";
import { dayjsLocales } from "@renderer/stores/locales";
import {
  getBase62Name,
  isValidFilenameLength,
  getFileExtname,
  getFileBasename,
} from "@renderer/utils/filename";

dayjs.extend(localizedFormat).locale(dayjsLocales.value);
const { t } = useI18n();
const { settings } = storeToRefs(useSettingsStore());

const { fileRecord } = defineProps<{
  fileRecord: FileRecord;
}>();

const fileExt = getFileExtname(fileRecord.file_name);
const fileNameWithoutExt = getFileBasename(fileRecord.file_name);

const loading = ref(false);
const newName = ref(fileNameWithoutExt);

const emit = defineEmits(["close", "done", "loading-start", "loading-end"]);
watch(loading, (v) => {
  if (v) emit("loading-start");
  else emit("loading-end");
});

async function confirmRename(): Promise<void> {
  // if no new name, do nothing
  if (!newName.value) return;
  // if new name is the same as the current name, do nothing
  if (newName.value === fileNameWithoutExt) return;
  // if file name is too long
  const orgName = `${newName.value}.${fileExt}`;
  if (!isValidFilenameLength(orgName)) {
    window.$message.error(t("github-files.msg-file-name-too-long"));
    return;
  }
  // replace spaces with underlines in file name
  const fileNameToBeUsed = orgName.trim().replaceAll(" ", "_");

  loading.value = true;

  try {
    // Update filename in GitHub
    const base62Name = getBase62Name(fileNameToBeUsed);
    const ghRes = await ghUpdateAsset(fileRecord.id, base62Name);
    console.log("Renaming result:", ghRes);

    // Update database record
    const query = db("files")
      .where("id", fileRecord.id)
      .update({
        file_name: newName.value.trim().replaceAll(" ", "_") + "." + fileExt,
        file_name_base62: ghRes.name,
        updated_at: ghRes.updated_at,
      })
      .toString();

    const url = new URL(__CF_DATABASE_URL__);
    url.searchParams.set("query", query);
    url.searchParams.set("gh_token", settings.value.ghToken);

    const dbRes = await fetch(url.href);
    console.log("Database update result:", dbRes);

    window.$message.success(t("github-files.msg-rename-success"));
    emit("done");
  } catch (error) {
    console.dir(error);
    window.$notification.error({
      title: t("github-files.msg-rename-failed"),
      content: `${error}`,
      meta: dayjs().format("lll"),
    });
  } finally {
    loading.value = false;
    emit("close");
  }
}
</script>

<style scoped></style>
