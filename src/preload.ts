// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

// Expose volume control functions to renderer
contextBridge.exposeInMainWorld('volumeAPI', {
  increaseVolume: () => ipcRenderer.invoke('increase-volume'),
  decreaseVolume: () => ipcRenderer.invoke('decrease-volume'),
  toggleMute: () => ipcRenderer.invoke('toggle-mute'),
});
