import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api: typeof window.api = {
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  uploadToGitHub: (params) => ipcRenderer.invoke('upload-to-github', params),
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  ghLogin: () => ipcRenderer.invoke('gh-login')
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
