const RichEmbed = require("discord.js").RichEmbed;
const Discord = require("discord.js");
const boxen = require('boxen');
module.exports.run = (client, message, args, data) => {
      var pingstart = new Discord.RichEmbed()
        .setColor(data.embedcolor)
        .setDescription('Pinging...')
        .setAuthor(message.author.username, message.author.displayAvatarURL)
      message.channel.send({embed: pingstart}).then(sent => {
        var pinged = new Discord.RichEmbed()
          .setColor(data.embedcolor)
          .setTitle('**Pong!**')
          .setDescription(`${sent.createdTimestamp - message.createdTimestamp}ms`)
//`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`
        sent.edit({embed: pinged})
      })
}

module.exports.help = {
  name: "ping",
  info: "Check the ping between the Discord API and yourself",
  usage: "ping"
}
