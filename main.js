const { app, BrowserWindow } = require('electron')
const serverReady = require('./server')

function createWindow(){
  let win = new BrowserWindow({
    width: 300,
    height: 220,
    frame: false,
    titleBarStyle: 'hidden',
    transparent: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if(process.env.NODE_ENV==='development'){
    win.loadURL('http://localhost:3000')
  }else {
    win.loadURL('http://localhost:5000')
  }
}

serverReady(()=>{
  app.whenReady().then(createWindow)
})