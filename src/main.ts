import {app, BrowserWindow} from 'electron';
import * as path from 'path';

function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 500,
        resizable: false,
        frame: false,       // Borderless window
        transparent: false, // Set true if you want transparent background
        webPreferences: {
            preload: path.join(__dirname, 'renderer.js'),
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    win.loadFile(path.join(__dirname, '../public/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
