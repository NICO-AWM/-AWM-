/* Codded by NICO

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

CyberQueen bot - NICO


const Asena = require('../events');
const {MessageType} = require('sltechnicaltips-web-api');
const Config = require('../config');
const cyber = ('Cyber Queen Version ๐ ๏ธ');
const AAA = ('Check Cyber Queen Version ๐ ๏ธ')
const AAB = "๐๐จ๐๐๐ก ๐ ๐ค๐๐๐ ๐๐๐ฃ๐๐ค๐ ๐๐๐๐ เถเถ เถเทเถญ เถเถญ,"
const AAC = "*แณโ๐ฑ๐ฐแดสอฅสแดอฃสอซโฏวซแดแดษดแฌ Version ๐งฌ*\n\n```Installed version ๐:```\n3.0v - Beta Edition\n\nCheck official github : https://github.com/SLTechnicalTips/CyberQueen"
Asena.addCommand({pattern: 'version', fromMe: true, delowndinukacmd: false, desc: AAA,}, (async (message, match) => {

  var msg = await message.reply('CYBER QUEEN Version ๐');

  await message.client.sendMessage(
      message.jid,AAC, MessageType.text);
                                            
  }));
*/

const Asena = require('../events');
const {MessageType} = require('sltechnicaltips-web-api');
const M = "It sends version"
const N = "It sends version"
const Config = require('../config');



if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'version', fromMe: true, deleteCommand: true, desc: M,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "แณโ๐ฑ๐ฐแดสอฅสแดอฃสอซโฏวซแดแดษดแฌ Version ๐งฌ\n\nInstalled version ๐:\n3.8.4v - Public Edition\n\nCheck official github : https://github.com/SLTechnicalTips/CyberQueen";

    var i = Math.floor(2*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i]), MessageType.text);

    }));


Asena.addCommand({pattern: 'cqversion', fromMe: true, deleteCommand: true, desc: N,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "แณโ๐ฑ๐ฐแดสอฅสแดอฃสอซโฏวซแดแดษดแฌ Version ๐งฌ\n\nInstalled version ๐:\n3.8.4v - Public Edition\n\nCheck official github : https://github.com/SLTechnicalTips/CyberQueen";
      
    
        var i = Math.floor(2*Math.random())
    
        await message.client.sendMessage(
            message.jid,(r_text[i]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        Asena.addCommand({pattern: 'version', fromMe: false, deleteCommand: true, desc: M,}, (async (message, match) => {
        
            var r_text = new Array ();
        
            r_text[1] = "แณโ๐ฑ๐ฐแดสอฅสแดอฃสอซโฏวซแดแดษดแฌ Version ๐งฌ\n\nInstalled version ๐:\n3.8.4v - Public Edition\n\nCheck official github : https://github.com/SLTechnicalTips/CyberQueen";
        
            var i = Math.floor(2*Math.random())
        
            await message.client.sendMessage(
                message.jid,(r_text[i]), MessageType.text);
        
            }));
        
        
        Asena.addCommand({pattern: 'cqversion', fromMe: false, deleteCommand: true, desc: N,}, (async (message, match) => {
        
                var r_text = new Array ();
            
                r_text[1] = "แณโ๐ฑ๐ฐแดสอฅสแดอฃสอซโฏวซแดแดษดแฌ Version ๐งฌ\n\nInstalled version ๐:\n3.8.4v - Public Edition\n\nCheck official github : https://github.com/SLTechnicalTips/CyberQueen";
            
                var i = Math.floor(2*Math.random())
            
                await message.client.sendMessage(
                    message.jid,(r_text[i]), MessageType.text);
            
                }));    
                Asena.addCommand({pattern: 'version', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {
        
                    var r_text = new Array ();
                
                    r_text[1] = "แณโ๐ฑ๐ฐแดสอฅสแดอฃสอซโฏวซแดแดษดแฌ Version ๐งฌ\n\nInstalled version ๐:\n3.8.4v - Public Edition\n\nCheck official github : https://github.com/SLTechnicalTips/CyberQueen";
                    
                
                    var i = Math.floor(2*Math.random())
                
                    await message.client.sendMessage(
                        message.jid,(r_text[i]), MessageType.text);
                
                    }));
                
                
                Asena.addCommand({pattern: 'cqversion', fromMe: true, deleteCommand: true,dontAddCommandList: true }, (async (message, match) => {
                
                        var r_text = new Array ();
                    
                        r_text[1] = "แณโ๐ฑ๐ฐแดสอฅสแดอฃสอซโฏวซแดแดษดแฌ Version ๐งฌ\n\nInstalled version ๐:\n3.8.4v - Public Edition\n\nCheck official github : https://github.com/SLTechnicalTips/CyberQueen";
                    
                        var i = Math.floor(2*Math.random())
                    
                        await message.client.sendMessage(
                            message.jid,(r_text[i]), MessageType.text);
                    
                        }));
}   
