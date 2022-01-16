'use strict';
const fs = require('fs');
const cron = require('node-cron');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require('json5/lib/register');
//環境変数読み込み
require('dotenv').config();
const serverId = process.env.SERVER_ID;
const defaultChannelId = process.env.DEFAULT_CHANNEL_ID;

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
    
    await client.application.commands.set(data,serverId);

    //準備完了とステータス
    console.log("Ready!");
    client.user.setActivity('原神');
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

//*定期実行--------------------------------------------------------------------------------
//原神定期通知
cron.schedule('0 8,20 * * *', () => {
    const embed = require('./embed/regularExecute.json5');
    client.channels.cache.get(defaultChannelId).send({ embeds: [embed] });
});

//誕生日
cron.schedule('5 0 * * *', () =>{
    const birthday = require('./birthday.js');
    let embed = birthday.birthdayExecute();
    
        client.channels.cache.get(defaultChannelId).send({ embeds: [embed] });
    
});
//*定期実行終了--------------------------------------------------------------------------------

//*螺旋終了定期--------------------------------------------------------------------------------
cron.schedule('0 0 1,15,28,12 * *', () => {
    const embed = require('./embed/rasenResetEmbed.json5');
    client.channels.cache.get(defaultChannelId).send({ embeds: [embed] });
});

cron.schedule('0 21 1,15 * *', () => {
    const embed = require('./embed/rasenStartEmbed.json5');
    client.channels.cache.get(defaultChannelId).send({ embeds: [embed] });
});
//*螺旋終了定期終了--------------------------------------------------------------------------------

//*botログイン
client.login();