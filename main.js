const {app, BrowserWindow} = require('electron');
function createSS4() {
     const ss4 = new BrowserWindow({width: 1300, height: 725, icon: 'ss4Icon.png', webPreferences: {nodeIntegration: true, devTools: false}});
     ss4.loadFile("startup.html");
     ss4.setMenuBarVisibility(false);
     ss4.setResizable(false);
}
app.whenReady().then(createSS4);