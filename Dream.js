const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("571295735027466252")
setInterval(function() {
channel.send(`i love maya`);
}, 25)
})
 
 
client.login("NTExMjI3ODQ5NjUxNTE5NDg5.XMLoGA.0PPb9NWk-DnQCiYXFRwd6o0QWW8");