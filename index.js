'use strict';
const fs = require('fs');
const cron = require('node-cron');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const config = require('./configs/config.json');

//*commandsフォルダで管理--------------------------------------------------------------------------------
//コマンドをcommandフォルダからcommandsに入れる
const commands = {}
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands[command.data.name] = command;
}

//commandsから指定したサーバーに登録
client.once("ready", async () => {
    const data = [];
    for (const commandName in commands) {
        data.push(commands[commandName].data)
    }
    await client.application.commands.set(data,config.serverId);
    console.log("Ready!");
});

//登録したコマンドの応答
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    const command = commands[interaction.commandName];
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true,
        })
    }
});
//*コマンドの登録~処理まで終了--------------------------------------------------------------------------------

//botログイン
client.login();