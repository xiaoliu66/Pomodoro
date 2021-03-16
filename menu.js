const { Menu, BrowserWindow } = require('electron')
var {shell} = require('electron')
var template = [{
    label: '',
    submenu: [{
        label: 'uuu',
        accelerator: 'ctrl+n',
        click: () => {
            var win = new BrowserWindow({
                width: 500,
                height: 500,
                webPreferences: { nodeIntegration: true }
            })
            win.loadFile('yellow.html')
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