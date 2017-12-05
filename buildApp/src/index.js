const electron = require('electron')
const path = require('path')
const url = require('url')
const server = require('./server')
const net = require('net')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, port = 8000;
// 检测端口是否被占用
function portIsOccupied(callback) {
  // 创建服务并监听该端口
  var server = net.createServer().listen(port)
  server.on('listening', function () { // 执行这块代码说明端口未被占用
    server.close() // 关闭服务
    callback();
  })

  server.on('error', function (err) {
    port++;
    portIsOccupied(callback);
  })
}
// // 执行
// portIsOccupied(80)
function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1150,
    height: 670,
    minWidth: 1150,
    minHeight: 670,
    frame: false,
  })
  app.win = mainWindow;
  // portIsOccupied(function () {
  //   server(port);
  port = 3002
  mainWindow.loadURL("http://127.0.0.1:" + port);
  mainWindow.on('closed', function () {
    console.log("closed");
    mainWindow = null
  })
  // })
  // and load the index.html of the app.
  // mainWindow.loadURL(url.format({
  //   pathname: path.join(path.dirname(__dirname),"webMusic","build",'index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }))
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.