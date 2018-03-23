const RichEmbed = require("discord.js").RichEmbed;
const Discord = require("discord.js");
module.exports.run = (client, message, args, data, game, announcement) => {
  var helpembed = new Discord.RichEmbed()
  .setColor(data.embedcolor)
    .setTitle('Sunset Framework Commands')
    .addField('Generic Category', '`help` `ping` `info` `settings`')

message.channel.send({embed: helpembed})
}
module.exports.help = {
  name: "help",
  info: "Get documentation on all of Sunset's commands",
  usage: "help"
}
