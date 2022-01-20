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
    const guild = client.guilds.cache.get(serverId);
    const data = [];
    for (const commandName in commands) {
        data.push(commands[commandName].data)
    }
    //!コマンド初期化
    // guild.commands.set([]);
    // client.application.commands.set([]);
    client.application.commands.set(data,serverId);

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
            content: 'コマンド中にエラー発生',
            ephemeral: true,
        })
    }
});
//*コマンドの登録~処理まで終了--------------------------------------------------------------------------------

//*定期実行--------------------------------------------------------------------------------
//原神定期通知
cron.schedule('0 8,20 * * *', () => {
    const embed = require('./embed/regularExecute.json5');
    let embed = require('./embed/regularExecute.json5');
    let tableResult = null;
    //*db接続
    const db = require('./db.js');
    db.pool.connect()
    .then(sql => {
        sql.query("SELECT url FROM regularexecuteurltable")
        .then(result => {
            sql.release()
            tableResult = result.rows
            //!regularexecuteurltableのurlを代入
            embed.image.url=tableResult[0].url
            //!鯖に送信
            client.channels.cache.get(defaultChannelId).send({ embeds: [embed] });
        })
    })
});

//誕生日
cron.schedule('1 0 * * *', () =>{
    const birthday = require('./function/birthday.js');
    let embed = birthday.birthdayExecute();
    if(typeof embed != 'undefined'){
        client.channels.cache.get(defaultChannelId).send({ embeds: [embed] });
    }else{
        console.log("誕生日いないよ");
    }
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