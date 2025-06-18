"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
electron_1.contextBridge.exposeInMainWorld('electronAPI', {
    // App info
    getAppVersion: () => electron_1.ipcRenderer.invoke('get-app-version'),
    getPlatform: () => electron_1.ipcRenderer.invoke('get-platform'),
    // Menu events
    onMenuAction: (callback) => {
        const menuActions = [
            'menu-new',
            'menu-open',
            'menu-save',
            'menu-about',
            'menu-settings'
        ];
        menuActions.forEach(action => {
            electron_1.ipcRenderer.on(action, () => callback(action));
        });
    },
    // Remove all listeners
    removeAllListeners: (channel) => {
        electron_1.ipcRenderer.removeAllListeners(channel);
    }
});
