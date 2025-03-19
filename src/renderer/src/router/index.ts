import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { useSettingsStore } from '@renderer/stores/settings'
import isElectron from 'is-electron'

const views = import.meta.glob('@renderer/views/**/*.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: { name: 'file-explorer' } },
  {
    path: '/recycle-bin',
    name: 'recycle-bin',
    component: views['/src/views/RecycleBin.vue']
  },
  {
    path: '/file-explorer',
    name: 'file-explorer',
    component: views['/src/views/FileExplorer.vue']
  },
  {
    path: '/download-manager',
    name: 'download-manager',
    component: views['/src/views/DownloadManager.vue']
  },
  {
    path: '/settings',
    name: 'settings',
    component: views['/src/views/SettingsView.vue']
  },
  { path: '/init', name: 'init', component: views['/src/views/InitView.vue'] },
  { path: '/error', name: 'error', component: views['/src/views/ErrorView.vue'] }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 100,
      behavior: 'smooth'
    }
  }
})

router.beforeEach((to) => {
  const store = useSettingsStore()
  if (!store.settings.ghToken && to.name !== 'init' && isElectron()) {
    return '/init'
  }
  return true
})

export default router
