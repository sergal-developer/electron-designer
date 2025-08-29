const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let win;
function createWindow() {

   win = new BrowserWindow({
      width: 1024,
      height: 740,
      minWidth: 360,
      minHeight: 740,
      autoHideMenuBar: true,
      titleBarOverlay: true,
      webPreferences: {
         nodeIntegration: true,
         contextIsolation: false,
      }
   });
   // load the dist folder from Angular
   // win.loadURL(
   //    url.format({
   //       pathname: path.join(__dirname, '/dist/designer/browser/index.html'),
   //       protocol: 'file:',
   //       slashes: false
   //    })
   // );

   win.loadFile(path.join(__dirname, '/dist/designer/browser/index.html'));
   // The following is optional and will open the DevTools:
   // win.webContents.openDevTools()
   win.on('closed', () => {
      win = null;
   });
}
app.on('ready', createWindow);
// on macOS, closing the window doesn't quit the app
app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
      app.quit();
   }
});