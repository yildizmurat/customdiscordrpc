var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "text1",
assets : {
large_image : "image",
large_text : "text2"
},
buttons : [{label : "Buton1" , url : "link1"},{label : "Buton2",url : "link2"}]
}
})
})
client.login({ clientId : "clientid" }).catch(console.error);
