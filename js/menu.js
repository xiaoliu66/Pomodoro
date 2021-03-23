const { Menu, BrowserWindow } = require('electron')
var {shell} = require('electron')
var template = [{
    label: '设置',
    submenu: [{
        label: '提示音',
        accelerator: 'ctrl+n',
        click: () => {
            var win = new BrowserWindow({
                width: 400,
                height: 260,
                webPreferences: { nodeIntegration: true,contextIsolation: false},
                icon: './build/icon.ico'
            })
            // 取消菜单栏 不然会出现子窗口递归
            win.setMenu(null)
            win.loadFile("./html/sound.html")
            win.on('closed', () => {
                win = null
            })
        }
    },
    { label: '' }]
},

{
    label: '关于',
    submenu: [
        {
            label: 'Github',
            click: ()=>{
                shell.openExternal("https://github.com/xiaoliu66")
            }
        }
    ]
}
]

var m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m)