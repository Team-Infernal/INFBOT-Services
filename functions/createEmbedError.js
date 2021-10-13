const { MessageEmbed } = require("discord.js");
const config = require("../config.json");

module.exports = (title = "Error", desc = "We've encountered an error.") => {

    let embed = new MessageEmbed()
        .setTitle(title)
        .setDescription(desc)
        .setColor(config.COLOR.ERROR)
    return embed;

};