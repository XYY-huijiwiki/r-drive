<template>
  <n-menu
    :value="
      $route.name === 'file-preview' ? 'file-explorer' : $route.name?.toString()
    "
    :options="options"
    :collapsed="props.collapsed"
    :collapsed-width="62"
    :collapsed-icon-size="20"
  ></n-menu>
</template>

<script setup lang="ts">
import { type Ref, h, computed } from "vue";
import type { MenuOption } from "naive-ui";
import { RouterLink, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { Icon } from "@iconify/vue";
import { storeToRefs } from "pinia";

import DownloadIcon from "@renderer/components/DownloadIcon.vue";
import { useDownloadStore } from "@renderer/stores/download";
import { canClientAccess } from "@renderer/router";
import { is } from "@renderer/utils";

const { t } = useI18n();
const router = useRouter();
const { activeDownloads } = storeToRefs(useDownloadStore());
const props = defineProps<{
  collapsed: boolean;
}>();

function renderIcon(icon: string) {
  return () => h(Icon, { icon: `fluent:${icon}-24-regular` });
}
function renderLabel(text: string, link: string, isDisabled: boolean) {
  return isDisabled
    ? text
    : () =>
        h(
          RouterLink,
          {
            to: { name: link },
            class: is.web && "text-nowrap" /* to solve web css conflict */,
          },
          { default: () => text },
        );
}
function getDisabledState(routeName: string): boolean {
  const routerLocation = router.resolve({ name: routeName });
  return !canClientAccess(routerLocation);
}

const options: Ref<MenuOption[]> = computed(() => [
  {
    label: renderLabel(
      t("file-explorer.title"),
      "file-explorer",
      getDisabledState("file-explorer"),
    ),
    key: "file-explorer",
    disabled: getDisabledState("file-explorer"),
    icon: renderIcon("folder"),
  },
  {
    label: renderLabel(
      t("recycle-bin.title"),
      "recycle-bin",
      getDisabledState("recycle-bin"),
    ),
    key: "recycle-bin",
    disabled: getDisabledState("recycle-bin"),
    icon: renderIcon("bin-recycle-full"),
  },
  {
    label: renderLabel(
      t("download-manager.title"),
      "download-manager",
      getDisabledState("download-manager"),
    ),
    key: "download-manager",
    disabled: getDisabledState("download-manager"),
    icon: () =>
      h(DownloadIcon, { downloading: activeDownloads.value.length > 0 }),
  },
  {
    label: renderLabel(
      t("episodes-data.title"),
      "episodes-data",
      getDisabledState("episodes-data"),
    ),
    key: "episodes-data",
    disabled: getDisabledState("episodes-data"),
    icon: renderIcon("database"),
  },
  {
    label: renderLabel(
      t("rename-pages.title"),
      "rename-pages",
      getDisabledState("rename-pages"),
    ),
    key: "rename-pages",
    disabled: getDisabledState("rename-pages"),
    icon: renderIcon("text-direction-horizontal-ltr"),
  },
  {
    label: renderLabel(
      t("find-and-replace.title"),
      "find-and-replace",
      getDisabledState("find-and-replace"),
    ),
    key: "find-and-replace",
    disabled: getDisabledState("find-and-replace"),
    icon: renderIcon("slide-search"),
  },
  {
    label: renderLabel(
      t("delete-and-undelete.title"),
      "delete-and-undelete",
      getDisabledState("delete-and-undelete"),
    ),
    key: "delete-and-undelete",
    disabled: getDisabledState("delete-and-undelete"),
    icon: renderIcon("broom"),
  },
  {
    label: renderLabel(
      t("miui-themes.title"),
      "miui-themes",
      getDisabledState("miui-themes"),
    ),
    key: "miui-themes",
    disabled: getDisabledState("miui-themes"),
    icon: () => h(Icon, { icon: `simple-icons:xiaomi` }),
  },
]);
</script>

<style scoped></style>
