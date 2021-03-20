
var electron = require('electron')
const path = require('path')
var app = electron.app // 创建electron 引用
var globalShortcut = electron.globalShortcut // electron 全局快捷键
var browserWindow = electron.BrowserWindow // 创建electron窗口引用

var mainWindow = null // 主窗口

app.on('ready', () => {
    mainWindow = new browserWindow({
        width: 440,
        height: 400,
        webPreferences: {
            nodeIntegration: true, //设置开启nodejs环境
            contextIsolation: false,
            enableRemoteModule: true
        },
        // 解决软件通过electron-builder打包并安装启动后，左上角确实图片问题。
        icon: path.join(__dirname, './build/icon.ico'), 
    })

    // 全局快捷键
    globalShortcut.register('ctrl+e', () => {
        mainWindow.webContents.openDevTools()
    })
    mainWindow.loadFile("clock.html")
    
    require('./js/menu.js') // 引入菜单代码
    mainWindow.on('closed', () => {
        app.quit();
    })
})