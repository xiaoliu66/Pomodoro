
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
    mainWindow.on('close', e => {
    e.preventDefault();
    electron.dialog.showMessageBox({
        type: "warning",
        title: "警告",
        message: "如果有番茄钟运行将不会产生记录，确定要退出吗？",
        buttons: ["确定", "取消"],
    }).then((result) => {
        if (result.response == 0) {
            app.exit();
        }else {
            alert('取消')
        }
    })

    // e.preventDefault(); //先阻止一下默认行为，不然直接关了，提示框只会闪一下
    // electron.dialog.showMessageBox({
    //     type: 'info',
    //     title: '提示',
    //     message: '确认退出？',
    //     buttons: ['确认', '取消'],   //选择按钮，点击确认则下面的idx为0，取消为1
    //  //这个的值是如果直接把提示框×掉返回的值，这里设置成和“取消”按钮一样的值，下面的idx也会是1
    // }).then((result) => {
    //     if(result.response == 0) {
    //         app.exit()
    //     }else {

    //     }
    // })

    })
})