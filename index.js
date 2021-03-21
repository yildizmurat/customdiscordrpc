var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Sende Katıl!", // Resmin yanında yazacak mesaj
assets : {
large_image : "ymy_logo", // Dev portaldaki resmin ismi
large_text : "Sende Katıl!" // Resime fare imleci götürüldüğünde gözükecek yazı
},
buttons : [{label : "Discord'a Katıl" , url : "https://discord.gg/KazHgb2"},{label : "Sitemize Gel!",url : "https://yazilimcilarinmolayeri.com"}]
}
})
})
client.login({ clientId : "823237644326404137" }).catch(console.error);