const { Menu, BrowserWindow } = require('electron')
var {shell} = require('electron')
var template = [{
    label: '设置',
    submenu: [{
        label: 'uuu',
        accelerator: 'ctrl+n',
        click: () => {
            var win = new BrowserWindow({
                width: 500,
                height: 500,
                webPreferences: { nodeIntegration: true },
                icon: './build/icon.ico'
            })
            // 取消菜单栏 不然会出现子窗口递归
            win.setMenu(null)
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