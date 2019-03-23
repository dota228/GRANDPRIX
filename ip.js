const Discord = require('discord.js');
const fs = require('fs');
module.exports.run = async (bot,message,args) => {
    message.channel.send('IP пока нету,сервер в разработке :(');
};
module.exports.help = {
    name: "ip"
};