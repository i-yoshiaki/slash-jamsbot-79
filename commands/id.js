module.exports = {
    data: {
        name: "id",
        description: "idを返す",
    },
    async execute(interaction) {
        //環境変数読み込み
        // require('dotenv').config();
        // const serverId = process.env.SERVER_ID;
        // const defaultChannelId = process.env.DEFAULT_CHANNEL_ID;
        await interaction.reply("id");
    }
}