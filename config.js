import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '2348100151048', process.env.OWNER_NAME || 'Abrotech 🤖', true],
  ['2348100151048', 'Abro Tech ❤️✨', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || 'AbroTech'
global.botname = process.env.BOT_NAME || 'ABRO-BOT'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.abrokeys = 'abro'

//Sticker Watermarks
global.stkpack = process.env.BOT_NAME || 'ABRO-BOT 🥵'
global.stkowner = process.env.OWNER_NAME || '© AbroTech'

//Watermark
global.maker = process.env.MAKER || 'Made with ❤️ by ABRO-BOT'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Africa/Lagos').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Afirca/Lagos').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
