/* For Coded By Cyber Draco

GPL-3.0 - listened under

For Button Code



const Rico = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('sltechnicaltips-web-api');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'public') {

var SYSDTXT = ''
if (Config.LANG == 'SI') SYSDTXT = '๐ฃ เถดเถฏเทเถฐเถญเท เถญเถญเทเถญเทเทเถบ'
if (Config.LANG == 'EN') SYSDTXT = '๐ฃ System stats'

var VER = ''
if (Config.LANG == 'SI') VER = '๐ฒ Version'
if (Config.LANG == 'EN') VER = '๐ฒ Version'

var ALIVEMG = ''
if (Config.ALIVEMSG == 'default') ALIVEMSG = ''
else ALIVEMSG = Config.ALIVEMSG





    Rico.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "๐๐๐ ๐๐๐๐๐ ๐ ๐๐ ๐๐๐๐๐๐ ๐๐๐ ๐/n/n ๐๐๐ฐ๐ง๐๐ซ :- ๐๐๐๐๐๐ /n/n ๐๐๐๐ฏ๐๐ฅ๐จ๐ฉ๐ฆ๐๐ง :- ๐๐๐๐๐๐ /n/n ๐ ๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐ /n/n ๐๐จ๐ง๐ญ๐๐๐ญ ๐๐ ๐๐ง ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ :- wa.me/+94รรรรร"})

var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
        BUTTHANDLE = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }
         

 const buttons = [
  {buttonId: BUTTHANDLE + 'brversion', buttonText: {displayText: SYSDTXT }, type: 1},
  {buttonId: BUTTHANDLE + 'brsystats', buttonText: {displayText: VER }, type: 1},
 ]

const buttonMessage = {
    
    contentText: "ALIVEMSG" ,
    footerText: 'สสแดแดแดสษชแดแด สแดแดแดแดษด แด?แดสsษชแดษด๏ธ',
    buttons: buttons,
    headerType: 4
    
}

  await message.client.sendMessage (message.jid, buttonMessage, MessageType.buttonsMessage)

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Copyright ยฉ 2022 | Black Rico*' })
     }
    }));

    Rico.addCommand({pattern: 'brsystats', fromMe: true, desc: Lang.SYSD_DESC, dontCommandList: true,  deleteCommand: false}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Rico.addCommand({pattern: 'brversion', fromMe: true, desc: Lang.BOT_V, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*โ Black Rico Version ๐ถ*\n\n` + 
                '```Installed version :```\n' +
                Lang.VERS_ION + 
                `\n\nCheck official website : https://github.com/CyberDraco/BlackRico`
           , MessageType.text);
            
        }));
}*/
