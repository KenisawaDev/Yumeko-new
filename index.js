//Caso for respostar deixar os créditos para mim by: 558596822126 MEU CANAL https://www.youtube.com/@pxzmods
require("http").createServer((_, res) => res.end("Uptime!")).listen(8080)
const {default: AnyWASocket,
delay,templateMessage,makeInMemoryStore,downloadContentFromMessage,DisconnectReason,useSingleFileAuthState } = require ('@adiwajshing/baileys')
const fs = require("fs")
const chalk = require("chalk")
const P = require("pino")
const axios = require('axios')
const clui = require("clui")
const util = require("util")
const fetch = require("node-fetch")
const yts = require("yt-search")
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")
const googleImage = require("g-i-s")
const cheerio = require("cheerio")
const BodyForm = require("form-data")
const mimetype = require("mime-types")
const speed = require("performance-now")
const { color } = require("./arquivos/lib/color")
const { fetchJson } = require("./arquivos/lib/fetcher")
const { fromBuffer } = require("file-type")
const { banner, banner2 } = require("./arquivos/lib/functions")
const { tmpdir } = require("os")
// DATA E HORA //
const moment = require("moment-timezone")
const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss")
const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY")


/// ⚜️ARQUIVOS JSON ⚜️ ////
const config = JSON.parse(fs.readFileSync("./DONO/config/data.json"))
const upload = require("./arquivos/lib/functions")
const TelegraPh = require("./arquivos/lib/functions")
const sotoy = JSON.parse(fs.readFileSync('./sotoy.json'))
const { addFlod , isFlod } = require('./spam.js')
const { isFiltered, addFilter } = require('./spam.js')
const img = JSON.parse(fs.readFileSync("./arquivos/fotos/logo.json"))
const antilink = JSON.parse(fs.readFileSync('./arquivos/seguranca/antilink.json'))
const { menu } = require("./menus/menu.js")

const { menufotos } = require("./menus/menu.js")
const { menuadm } = require("./menus/menuadm.js")
const { menubrincadeira } = require("./menus/menubrincadeira.js")
const { menualeatorio } = require("./menus/menu.js")
const min = JSON.parse(fs.readFileSync('./arquivos/logos/fotos.json'))
gay = min.gays
const { infodono } = require("./menus/infodono.js")


///  prefixo e dono aqui ///
const logo = img.logo
const nomeBot = config.nomeBot
const numeroBot = config.numeroBot
const nomeDono = config.nomeDono
const numeroDono = config.numeroDono
const dono = config.numeroDono
const prefix = config.prefix
const prefixo = config.prefix
//

let girastamp = speed()
let latensi = speed() - girastamp


async function startbot () {
const store = makeInMemoryStore({ logger: P().child({ level: "debug", stream: "store" }) })

function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }

// 𝚀𝚁𝙲𝙾𝙳𝙴
const { state, saveState } = useSingleFileAuthState("./cache/session.json")
// limpar console
console.log(banner.string)
console.log(color(''),color('CONECTANDO SEU BOT AGUARDE...'))
const client = AnyWASocket({
logger: P({ level: "silent" }),
printQRInTerminal: true,
browser: ['Base','Firefox','4.0.0'],
auth: state
})

client.ev.on ("creds.update", saveState)

store.bind(client.ev)
client.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})

client.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})

client.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);

if(shouldReconnect) {
startbot()
}

} else if(connection === "open") {
console.log(`${color(`BOT CONECTADO COM SUCESSO`,'green')}`)
}

})


client.ev.on('messages.upsert', async (msg) => {
m = msg
  try {
//*******************************************//
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
 }
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
//***************[ FUNÇÕES ]***************//
const info = msg.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
bidy =  budy.toLowerCase()
let full_args = body.replace(comando, '').slice(1).trim()
	




///////////////
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, {text: teks.trim(), mentions: memberr}) : client.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == "admin") admins.push(i.id)
if(i.admin == "superadmin") admins.push(i.id)
}
return admins
}
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const arg = body.substring(body.indexOf(" ") + 1)
const numeroBot = client.user.id.split(":")[0]+"@s.whatsapp.net"
const argss = body.split(/ +/g)
const testat = body
const ants = body
const isGroup = info.key.remoteJid.endsWith("@g.us")
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(" ")
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const sender = isGroup ? info.key.participant : info.key.remoteJid
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await client.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ""
const groupDesc = isGroup ? groupMetadata.desc : ""
const groupMembers = isGroup ? groupMetadata.participants : ""
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ""
const canal = config.canal
const grupo = config.grupo
const text = args.join(" ")
const c = args.join(' ')
const enviar = reply = (texto) => {
client.sendMessage(from, { text: texto }, {quoted: contato})
} 

// VERIFICADOS ⭐️
const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName:`${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}



//configruracao de dono, adm etc...
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isOwner = sender.includes(numeroDono)
//const isOwner = numeroDono.includes(numeroDono)
const groupId = isGroup ? groupMetadata.jid : ''
banChats = true
const argis = bidy.trim().split(/ +/)

///



// Consts isQuoted
const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage")
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

outrasVariavel = "bot"

let {name, urlMinhaApikey, aurlSexo, compreSuaApikey, cdd, crtt, baterai, charging, autoHourActivate, emoji_bot, blocked, multi, nopref, variosPrefixo, leitor} = outrasVariavel





// FUNCAO DE ANTILINK \\
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* eres admin, no te eliminare`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* seras eliminado de *${groupMetadata.subject}*`)
setTimeout( () => {
client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* eres admin, no te eliminare`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* seras eliminado de *${groupMetadata.subject}*`)
	     	enviar(`.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.`)
	     	setTimeout( () => {  
client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("Wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* eres admin, no te eliminare`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* seras eliminado de *${groupMetadata.subject}*`)
	     	enviar(`.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.`)
	     	setTimeout( () => {  
client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* eres admin, no te eliminare`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑒𝑙 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* seras eliminado de *${groupMetadata.subject}*`)
	     	enviar(`.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.`)
setTimeout( () => {  
client.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }

var apikey = 'APOLOZEA'


// RESPOSTAS DOS COMANDOS \\
resposta = {
espere: " *Aguarde...enviando* ",
aguarde: " *Aguarde...enviando* ",
dono: " *Comando solo para mi creador* ",
grupo: "Comando solo para grupos!!",
privado: "Comando solo para pv!!",
adm: " No eres admin macaco",
botadm: " *No soy admin del grupo* ",
registro: `[⚙️️] no estas registrado, usa ${prefixo}rg para registrar `,
norg: "[⚙️️] Ya estas registrado ",
erro: " *Humm.. error* "
}


////////////////////////////////////
if (!isGroup && isCmd)console.log('「\x1b[1;32m COMANDO NO PV \x1b[1;37m」', color(comando, "red"), color(pushname))
if (!isGroup && !isCmd) console.log('「\033[1;31m MENSAGEM NO PV \033[1;36m」', color(pushname, "green"))
if (isCmd && isGroup) console.log('「\x1b[1;32m COMANDO EM GRUPO \x1b[1;37m」', color(comando, "red"), color(pushname, "blue"), color(groupName))
if (!isCmd && isGroup) console.log('「\033[1;35m MENSAGEM EM GRUPO \033[1;36m」', color(pushname, "green"), color(groupName))

switch (comando) {
// Começo dos comandos com prefix //
//     /\/\                              
//    (° v °)                             
//    /|    |\                            
//     V---V                             
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//



case "menu":
templateMassage = {
image: {url:"./arquivos/fotos/menucompleto.jpg",
quoted: contato},
caption: menu(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.reagir1,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menuadm":
templateMassage = {
image: {url:"./arquivos/fotos/menuadm.jpg",
quoted: contato},
caption: menuadm(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menubromas":
templateMassage = {
image: {url:"./arquivos/fotos/juegos.jpg",
quoted: contato},
caption: menubrincadeira(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "menufotos":
templateMassage = {
image: {url:"./arquivos/fotos/menurandom.jpg",
quoted: contato},
caption: menufotos(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case "info":
templateMassage = {
image: {url:"./arquivos/fotos/menups.jpg",
quoted: contato},
caption: infodono(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
client.sendMessage(from, templateMassage)
break

case 'ping':
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = `
╭────•ೋೋ•────╮ 
*│Horário:* ${hora1} 
*│Velocidad:* ${String(r.toFixed(3))}
*│Tiempo Activo:* ${kyun(uptime)}
  ────•ೋೋ•────`
await client.sendMessage(from, {text: bla}, {quoted: contato})
break



case 'cassino':
case 'slot':
//CASSINO
 const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const mining = Math.ceil(Math.random() * 200) +1
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : ?? : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : ?? : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : ?? : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Tu ganas 🔮"
} else {
var Vitória = "Perdiste..."
}
	const cassino = `
	
╔═════🎰═════╗
┆      ${somtoy2}◄┛
╚═════🎰═════╝

*${Vitória}*`
enviar(cassino)
if (Vitória == "Tu ganaste!!!") {
enviar('Felicidades')
}
await client(sender)
break




case "transmição": 
case "transmitir": {
if (!isOwner) return enviar(resposta.dono)
if (!args.join(" ")) return enviar(`cual es el texto amigo?`)
const tm = args.join(' ')
let getGroups = await client.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
enviar(`Transmicion de grupos completa`)
waifuzdd = await axios.get('https://waifu.pics/api/sfw/neko')
for (let i of anu) {
await delay(1500)
templateButtons = [
{index: 1, urlButton: {displayText: 'Creador', url: canal}},
{index: 2, urlButton: {displayText: 'Dueño', url: grupo}},
]
templateMessago = {
image: {url:waifuzdd.data.url,
quoted: contato},
caption: tm,
footer: 'transmissão',
//templateButtons: templateButtons
}
client.sendMessage(i, templateMessago)
}
enviar("✔️listo ...")
}
break


case "ppt": 
if (!isGroup) return enviar(resposta.grupo)
if (args.length < 1) return enviar('Ejemplo: /ppt piedra')
ppt = ["piedra","papel","tijera"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 50)
pptb = ppy
pph = `Tu ganate ${ppg} en money`
if ((pptb == "piedra" && args == "papel") || 
(pptb == "papel" && args == "tijera") || 
(pptb == "tijera" && args == "piedra")) {
var vit = "Vitória"
} else if ((pptb == "piedra" && args == "tijera") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tijera" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "piedra" && args == "piedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tijera" && args == "tijera")) {
var vit = "empate"
} else if (vit = "undefined") {
return enviar(linguagem.tterro())
}
if (vit == "vitoria") {
var tes = "Victoria del jugador"
}
if (vit == "derrota" ) {
var tes = "Victoria del bot"
}
if (vit == "empate" ) {
var tes = "El juego termina en empate"
}
enviar(`Bot jugo: ${pptb}\nTu jugaste: ${args}\n\n${tes}`)
if (tes == "Vitória del jogador") {
enviar(pph)
}
break

case 'play':
if (!q) return enviar(`Ej: ${prefix+comando} Joji - Ew `)
enviar('♬Música encontrada enviando...')
bla = await fetchJson(`https://api.brizaloka-api.tk/sociais/v2/ytplaymp3?apikey=brizaloka&query=${q}`) 
thumbi = bla.thumb
titulo = bla.titulo
dura = bla.duration
templateButtons = [
{index: 1, quickReplyButton: {displayText: 'Mp3', id: `${prefix}audio ${titulo}`}}
]
audbla = bla.link_src
client.sendMessage(from, { audio: { url: audbla }, mimetype: 'audio/mp4'}, {quoted: info})
break

case 'limpar': case "reiniciar":
if (!isOwner) return enviar(resposta.dono)
enviar(' limpo \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nlimpo')
break

case "bot": 
{client.sendMessage(
from, {audio: fs.readFileSync('./audio/xandao.mp3'), mimetype: 'audio/mp4', ptt: true 
},
{quoted: contato}
)
}
break

case "perfil":
if (!isGroup) return enviar(resposta.grupo)
const migi = `${Math.floor(Math.random() * 105)}`
const rps = `${Math.floor(Math.random() * 105)}`
const valor = `${Math.floor(Math.random() * 5000)}`
{client.sendMessage(
from, {audio: fs.readFileSync('./audio/perfil.mp3'), mimetype: 'audio/mp4', ptt: true 
},
{quoted: contato}
)
}
try {
ppimg = await client.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)
await delay(4000)
try {
client.sendMessage(from, {
image: perfil,
caption: `
*Nombre: ${pushname}*

*Numero: ${sender.split("@")[0]}*

*Grupo: ${groupName}*

*🐂 Nível de cornudo: ${migi}%*

*😈nível de puta: ${rps}%*

*💵valor de programa: ${valor}$*
`
}, {quoted: contato})
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

      case 'seradm': {
      if (!isOwner) return enviar(resposta.dono)
       reply(`Ahora eres admin.`)
kiceed = sender
client.groupParticipantsUpdate(from, [kiceed], 'promote')
}
break


case 'gay':
if (!isGroup) return enviar(resposta.grupo)
const aleta = `${Math.floor(Math.random() * 105)}`
enviar('Espere, procesando su porcentaje...')
await delay(5000)
enviar(`${pushname} su porcentaje de gay es : ${aleta}%`)
break
case 'feo': // Sem Fotos
if (!isGroup) return enviar(resposta.grupo)
const aletb = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confiscando sua porcentagem...')
await delay(5000)
enviar(`${pushname} ${q}  su porcentaje de feo(a) es de: ${aletb}%`)
break
break
case 'lindo':
const aletc = `${Math.floor(Math.random() * 105)}`
if (!isGroup) return enviar(resposta.grupo)
enviar('Aguarde, confiscando sua porcentagem...')
await delay(5000)
enviar(`${pushname} su porcentaje de Lindo(a) es de : ${aletc}%`)
break
case 'atractivo':
if (!isGroup) return enviar(resposta.grupo)
const aletd = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confiscando sua porcentagem...')
await delay(5000)
enviar(`${pushname}  su porcentaje de atractivo(a) es de : ${aletd}%`)
break

case 'cornudo':
if (!isGroup) return enviar(resposta.grupo)
const alete = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confiscando sua porcentagem...')
await delay(5000)
enviar(`${pushname}  su porcentaje de cornudo(a) es de : ${alete}%`)
break
case 'prostituto':
if (!isGroup) return enviar(resposta.grupo)
const aletl = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confiscando sua porcentagem...')
await delay(5000)
enviar(`${pushname} su porcentaje de prosituto(a) es de : ${aletl}%`)
break
case 'nazista':
if (!isGroup) return enviar(resposta.grupo)
const aletg = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confiscando sua porcentagem...')
await delay(5000)
enviar(`${pushname} su porcentaje de nazista es de : ${aletg}%`)
break

case "linkgp":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
const link = await client.groupInviteCode(from)
enviar(`https://chat.whatsapp.com/${link} `)
break

case "resetlinkgp":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
await client.groupRevokeInvite(from)
enviar("El link del grupo se restableció con éxito")
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case "salir":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
enviar("Mi creador quiere que salga de este grupo")
await delay(1000)
try {
await client.groupLeave(from)
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case "idgp":
enviar(`Id : ${from}`)
break

case 'rebaixar': case 'demote': case 'quitaradm':
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar('Mono sin admin 🤠')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsepm = await client.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") return enviar('como puedo degradar al creador del grupo????')
else if (responsepm[0].status === "200") return enviar('Tonto, perdiste tu admin')
else if (responsepm[0].status === "404") return enviar('El no esta en el grupo')
else return enviar('Intenta de nuevo')
break

case 'promover': case 'promote': case 'daradm':
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar('Mono sin admin🤠')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('Vai colocar o vento como adm???')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsedm = await client.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") return enviar('Tenemos nuevo admin')
else if (responsedm[0].status === "404") return enviar('Ese ni esta en el grupo 🤔')
else return enviar('Intenta de nuevo '-'')
break

case 'marcar':
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
members_id = []
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, {
text: '@12345678901', contextInfo: {
"mentionedJid": memberr
}}): client.sendMessage(from, {
text: teks.trim(), contextInfo: {
"mentionedJid": memberr
}}, {
quoted: contato
})
}
teks = `\n\n${args.length > 0 ? `\n ➣ [${q}]\n\n`: ''}𝐼𝑁𝑉𝑂𝐶𝐴𝐶𝐼𝑂𝑁 𝐷𝐸𝐿 𝐺𝑅𝑈𝑃𝑂:\n`
for (let mem of groupMembers) {
teks += `@${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
break

case 'totag': case 'tag': case 'hidetag':
if(!isGroup) return enviar('*comando solo para grupos*')
if (!isGroupAdmins) return enviar('*tienes que ser admin primero*')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
client.sendMessage(from, options)
} else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
client.sendMessage(from, {image: buff, mentions: yd}, {quoted: contato})
} else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
client.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: contato})
} else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
client.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: contato})
} else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
client.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: contato})
} else if(budy){
if(q.length < 1) return enviar('Citar oq?')
client.sendMessage(from, {text: body.slice(comando.length + 2), mentions: yd})
} else {
enviar(`Responder imagem/documento/gif/sticker/áudio/vídeo con el comando ${prefix + comando}`)
}
break


case 'ban': case 'kick':
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar('No tienes admin pa 🤠')
{
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return enviar('Vai tirar o adm do vento???')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responseb = await client.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") return enviar('*Bye bye*')
else if (responseb[0].status === "406") return enviar('Como quieres que elimine al admin supremo????')
else if (responseb[0].status === "404") return enviar('*Ese imbécil ni esta en este grupo '-'*')
else return enviar('Intenta de nuevo')
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return enviar(`Vai arquivar msm??`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await client.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
return enviar('Sus deseos son mis órdenes')
} else {
let responseb3 = await client.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") return enviar('Bye bye')
else if (responseb3[0].status === "406") return enviar('Como quieres que elimine al admin supremo????')
else if (responseb3[0].status === "404") enviar('*Ese imbécil ni esta en este grupo '-'*')
else return enviar('Intenta de nuevo')
}
}
}
break

case "grupo":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
if (q == "a") {
await client.groupSettingUpdate(from, "not_announcement")
enviar("Grupo aberto com sucesso")
}
if (q == "c") {
await client.groupSettingUpdate(from, "announcement")
enviar("Grupo fechado com sucesso ")
}
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case "infogp":
if (!isGroup) return enviar(resposta.grupo)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
enviar(`
 Nombre : ${groupName}
 Descripción : ${groupDesc}
 Id : ${from}
 Fecha : ${data}
 Hora : ${hora}
`)
break

case "descgp":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
await client.groupUpdateDescription(from, `${q}`)
enviar("Descrição do grupo alterada com sucesso ")
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case "nombregp":
if (!isGroup) return enviar(resposta.grupo)
if (!isGroupAdmins) return enviar(resposta.adm)
if (!isBotGroupAdmins) return enviar(resposta.botadm)
try {
await client.groupUpdateSubject(from, `${q}`)
enviar(`*Nombre alterado con éxito*`)
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'listadm':
				if (!isGroup) return enviar(resposta.grupo)
					teks = `Lista de admins del grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case 'antiwame':
if (!isGroupAdmins) return enviar("Tu no eres admin")
if (!isBotGroupAdmins) return enviar("y mi admin?")
					if (args.length < 1) return enviar('escribe 1 para activar 0 para desactivar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return enviar('Esta activado')
						antilink.push(from)
						fs.writeFileSync('./arquivos/seguranca/antilink.json', JSON.stringify(antilink))
						enviar('Esta activado')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./arquivos/seguranca/antilink.json', JSON.stringify(antilink))
						enviar('Desactivado con exito')
					} else {
						enviar('1 para activar, 0 para desactivar ')
					}
					break
					











case 'report':
case 'bug':
if (!q) return enviar('Ej: bug en el menu..')
enviar(`Gracias por su cooperación, el error ha sido informado a mi creador....
<♨️>los errores falsos no serán respondidos`)
let templateMesssage = {
image: {url: './arquivos/fotos/menu2.jpg',
quoted: contato},
caption: `♨️𝗨𝗻 𝗯𝘂𝗴♨️\nEn el numero Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
footer: 'Noelle_md'
}
client.sendMessage("558592529207@s.whatsapp.net",templateMesssage)
break

case 'nuevocmd':
if (!q) return enviar('Ej: nuevocmd agrega antilink')
enviar(`Gracias por tu colaboración, tu idea ha sido reportada a mi creador 😊`)
const qp = args.join(" ")
let templateMessage = {
image: {url: './arquivos/fotos/menu2.jpg',
quoted: contato},
caption: `♨️IDEA CMD♨️\ndel numero: @${sender.split('@')[0]},\nLa idea es:\n ${q}`,
footer: 'Noelle_md'
}
client.sendMessage("558592549207@s.whatsapp.net",templateMessage)
break


//******comandos de fotos**********\\
    
case 'loli' :{
enviar("espera un momento, si tarda mucho y porque no pude encontrar la foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'tu eres un lolicon?🤔!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await client.sendMessage(sender, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'neko':{
enviar("espera un momento, si tarda mucho y porque no pude encontrar la foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'neko!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await client.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'waifu':{
enviar("espera un momento, si tarda mucho y porque no pude encontrar la foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'waifu!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await client.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'megumin':{
enviar("espera un momento, si tarda mucho y porque no pude encontrar la foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/client')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'client!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await client.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break




// sticker/figurinhas \\


case 'sticker': case 's': case 'stickergif': case 'sgif': case 'f': case 'figu': {
function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src) 
			} catch (err) { return reject(new Error(String(err)))}})}

module.exports = { TelegraPh }
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
async function videoToWebp (media) {
const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)
fs.writeFileSync(tmpFileIn, media)
await new Promise((resolve, reject) => {
  ff(tmpFileIn)
  .on("error", reject)
  .on("end", () => resolve(true))
  .addOutputOptions([
   "-vcodec",
   "libwebp",
   "-vf",
   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
   "-loop",
   "0",
   "-ss",
   "00:00:00",
   "-t",
   "00:00:05",
   "-preset",
   "default",
   "-an",
   "-vsync",
   "0"
  ])
  .toFormat("webp")
  .save(tmpFileOut) })
const buff = fs.readFileSync(tmpFileOut)
 fs.unlinkSync(tmpFileOut)
 fs.unlinkSync(tmpFileIn)
 return buff }
const enviarfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}

await client.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 const enviarfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}
await client.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
async function imageToWebp (media) {
const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)

 fs.writeFileSync(tmpFileIn, media)

 await new Promise((resolve, reject) => {
  ff(tmpFileIn)
  .on("error", reject)
  .on("end", () => resolve(true))
  .addOutputOptions([
   "-vcodec",
   "libwebp",
   "-vf",
   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
  ])
  .toFormat("webp")
  .save(tmpFileOut)
 })
const buff = fs.readFileSync(tmpFileOut)
 fs.unlinkSync(tmpFileOut)
 fs.unlinkSync(tmpFileIn)
 return buff
}
async function writeExifImg (media, metadata) {
 let wMedia = await imageToWebp(media)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 fs.writeFileSync(tmpFileIn, wMedia)
if (metadata.packname || metadata.author) {
  const img = new webp.Image()
  const json = {
   "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`,
   "sticker-pack-name": metadata.packname,
   "sticker-pack-publisher": metadata.author,
   "emojis": metadata.categories ? metadata.categories: [""]
  }
  const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
  const exif = Buffer.concat([exifAttr, jsonBuff])
  exif.writeUIntLE(jsonBuff.length, 14, 4)
  await img.load(tmpFileIn)
  fs.unlinkSync(tmpFileIn)
  img.exif = exif
  await img.save(tmpFileOut)
  return tmpFileOut
 }
}
async function writeExifVid (media, metadata) {
 let wMedia = await videoToWebp(media)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 fs.writeFileSync(tmpFileIn, wMedia)
if (metadata.packname || metadata.author) {
  const img = new webp.Image()
  const json = {
   "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`,
   "sticker-pack-name": metadata.packname,
   "sticker-pack-publisher": metadata.author,
   "emojis": metadata.categories ? metadata.categories: [""]
  }
  const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
  const exif = Buffer.concat([exifAttr, jsonBuff])
  exif.writeUIntLE(jsonBuff.length, 14, 4)
  await img.load(tmpFileIn)
  fs.unlinkSync(tmpFileIn)
  img.exif = exif
  await img.save(tmpFileOut)
  return tmpFileOut
 }
}


const pacote = pushname
//==================\\

const criador = nomeBot
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
enviar('Creando tu sticker')
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: info.message.imageMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguimg(from, util.format(upload), info, {
 packname: pacote, author: criador
})
 } else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
enviar('Creando tu sticker')
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: info.message.videoMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await enviarfiguvid(from, util.format(upload), info, {
 packname: pacote, author: criador
})
 } else return enviar(`Marca una imagen  con el comando ${prefix}sticker o colocalo en una imagen o video de 10 segungos como máximo`)
}
 break
 
 case 'attp':
if (!c) return enviar('*Cual es el texto??*');
const bkl = await getBuffer(`https://api.brizaloka-api.tk/ttp/attp1?apikey=brizaloka&text=${q}`);
client.sendMessage(from, {sticker: bkl}, {quoted: contato});
break;

case 'marcarwa':
try {
if (!isGroup) return enviar('Comando solamente para grupos.')
if (!isGroupAdmins) return enviar('No eres admin macaco')  
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╼⊳⊰ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
client.sendMessage(from, {text: teks}, {quoted: contato})
} catch {
enviar('ERROR!!')
}
break

/*case 'converteanime':
if (!quoted) return reply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`)
let anu = await client.downloadAndSaveMediaMessage(quoted)
let wm_keni = await TelegraPh(anu)
let get_result = await getBuffer(`https://api.lolhuman.xyz/api/imagetoanime?apikey=APOLOZEA&img=${wm_keni}`)
ninaa.sendMessage(m.chat, { image: get_result, caption: "Pronto!!"})
break*/

case 'repetir': 
{if(!q) return enviar(`Texto?`)
client.sendMessage(from,
{text: q},
{quoted: contato})
}
break

case 'xvideos':
if (!c) return enviar('Que quieres buscar??');
enviar('Esto puede demorar un poco')
dlk = await fetchJson(`https://api.brizaloka-api.tk/porn/xvideos?apikey=brizaloka&query=${q}`);
Op = dlk.dl_link
client.sendMessage(sender, { video: { url: Op }}, {quoted: contato});   
break

case 'hentai1':
if (!isGroup) return enviar(resposta.grupo)
enviar('*Estou enviando no seu privado*')
const bufferImg11 = await getBuffer("https://api.brizaloka-api.tk/random/hentai/boobs?apikey=brizaloka");
client.sendMessage(sender, {image: bufferImg11}, {quoted: contato});
break;

case 'hentai':
enviar('*ENVIANDO AGUARDE..*')
const bufferImg = await getBuffer("https://api.brizaloka-api.tk/random/hentai/ass?apikey=brizaloka");
client.sendMessage(sender, {image: bufferImg}, {quoted: info});
break;

/////
case 'figurinha': 
{client.sendMessage(
from, {sticker: fs.readFileSync('./arquivos/figu/figu1.webp')
},
{quoted: contato})
}
break

        case 'join': {
                if (!c) return enviar('Masukkan Link Group!')
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await client.groupAcceptInvite(result).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
        }
        break
case 'video' : 
{client.sendMessage(
from, 
{video: fs.readFileSync('./arquivos/video/bot.mp4')
},
{quoted : contato}
)
}
break






 

default:

if (isCmd) {
const buttons = [
  {buttonId: `${prefix}menu`}
]

const buttonMessage = {
    text: `‍〚♦️〛𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐧𝐨 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐝𝐨「${prefix +comando}」\n𝐔𝐬𝐮𝐚𝐫𝐢𝐨 「${pushname}」\n『❗』 𝐔𝐭𝐥𝐢𝐳𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${prefix}menu 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐦𝐢𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬`,
    footer: ' ',
    headerType: 1
}
client.sendMessage(from, buttonMessage)
}

}

} catch (e) {
console.log(e)
}

})

}
startbot()
