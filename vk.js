const Discord = require('discord.js');
const fs = require('fs');
module.exports.run = async (bot,message,args) => {
    message.channel.send('Вот наша группа вк: https://vk.com/grandprixgmod');
};
module.exports.help = {
    name: "vk"
};