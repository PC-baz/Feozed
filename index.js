const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('bot is online'));

app.listen(port, () => console.log(`http://localhost:${port}`));
//bot
const Discord  = require('discord.js');
const token = '';
const bot = new Discord.Client();
//prefix
const prefix = '$';
//bot online event
bot.on('ready', () => {
    console.log("bot is online(press ^C to restart or close)");
    bot.user.setActivity("Feozed | $help")
})
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ")
    
    if (message.content.startsWith(prefix)) {
        if (args[0] === "help") {
            let help = new Discord.MessageEmbed()
            .setTitle("help commands:")
            .addField("info:", "$info")
            message.channel.send(help)
        }
        if (args[0] === "info") {
            let info = new Discord.MessageEmbed()
            .setTitle("server info:")
            .addField("Invite", "https://discord.gg/9PrrwqdG")
            .addField("server stats:", "20")
            .addField("server Owner", "Darky, sis dogh, PC_baz")
            .addField("bot stats:", "supported by: nodejs v16.13.1 LTS \n programmed with: discord JS v13.5.0 \n created by: PC_baz")
			message.channel.send(info)

        }
		if (args[0] === "id") {
			let id = new Discord.MessageEmbed()
			.setTitle("channels id:")
			.addField("╠▶💎𝐀𝐝𝐦𝐢𝐧", "931568526152585313")
			.addField("╠▶✅𝐆𝐨𝐨𝐝-𝐧𝐞𝐰𝐬", "931570507868962866")
			.addField("╠▶❎𝐁𝐚𝐝-𝐧𝐞𝐰𝐬", "931570553746239489")
			message.channel.send(id)
		}
      }
})
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split("  ")
    
    if (message.content.startsWith(prefix)) {
      if (args[0] === "server") {
      bot.channels.cache.get(args[2]).send(args[1])
      }
    }
})
//bot login verify
bot.login(token)