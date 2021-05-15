const Discord = require('discord.js');
const client = new Discord.Client();

client.once("ready", () => {
    console.log("Ready!")

});

client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content === "<ping") return message.reply("Pong!);
    if (message.content === "<avatar") return message.reply(message.author.avatarURL());
    console.log(message.content);
});

client.login(process.env.TOKEN);