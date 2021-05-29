const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//dm command
client.on('message', msg => {
    var mentions = msg.mentions.users.first();
    if (msg.content.startsWith('!dm') && mentions) {
        if (msg.member.hasPermission('ADMINISTRATOR')) {
            var dmMessage = msg.content.slice(3).trim();
            mentions.send(dmMessage)
        }else
        msg.channel.send('You cant use this! you dont have enough perms.')

        }
    }
);
//need help? if you are having trouble understanding something in the code feel free to join our discord server that can be found in the read me file
//note : DO NOT POST YOUR TOKEN ON YOUR GITHUB IF THE REPO IS SET TO PUBLIC!!!
client.login('token here')
