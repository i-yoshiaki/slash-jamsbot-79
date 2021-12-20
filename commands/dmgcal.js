module.exports = {
    data: {
        name: "dmgcal",
        description: "【原神】ダメージの期待値を計算します。",
        options: [
            {
                type: "NUMBER",
                name: "atack-white",
                description: "白の攻撃力(素の攻撃力)",
                required: true,
            },
            {
                type: "NUMBER",
                name: "atack-green",
                description: "緑の攻撃力(盛れている攻撃力)",
                required: true,
            },
            {
                type: "NUMBER",
                name: "crit-rate",
                description: "会心率(単位%)",
                required: true,
            },
            {
                type: "NUMBER",
                name: "crit-damage",
                description: "会心ダメージ",
                required: true,
            },
            {
                type: "NUMBER",
                name: "damage-bonus",
                description: "ダメージバフ値",
                required: true,
            },
            {
                type: "NUMBER",
                name: "elemental",
                description: "元素熟知",
                required: false,
            }
        ],
    },
    async execute(interaction) {
        //*引数を変数に格納開始---------------
        const atackWhite=interaction.options.getNumber('atack-white');
        const atackGreen=interaction.options.getNumber('atack-green');
        const atackSum = atackWhite+atackGreen;
        const critRate=interaction.options.getNumber('crit-rate');
        const critDamage=interaction.options.getNumber('crit-damage');
        const damageBonus=interaction.options.getNumber('damage-bonus');
        const elemental=interaction.options.getNumber('elemental');
        //*引数を変数に格納終了---------------

        //*ダメージ期待値計算開始---------------
        const expected_value = Math.round(atackSum * (1 + (damageBonus/100)) * (1 - (critRate/100)) + atackSum * (1 + (damageBonus/100)) * (1 + (critDamage/100)) * (critRate/100));
        //?元素熟知ボーナス
        const element_bonus = (0.00000004 * elemental ^ 3 - 0.00011561 * elemental ^ 2 + 0.19487198 * elemental + 0.07024967) / 100;
        const element_expected_value_light = Math.round(atackSum * (1 + (damageBonus/100))* (1.5 + element_bonus) * (1 - (critRate/100)) + atackSum * (1 + (damageBonus/100)) * (1.5 + element_bonus) *(1 + (critDamage/100)) * (critRate/100));
        const element_expected_value_strong = Math.round(atackSum * (1 + (damageBonus/100))* (2 + element_bonus) * (1 - (critRate/100)) + atackSum * (1 + (damageBonus/100)) * (2 + element_bonus) *(1 + (critDamage/100)) * (critRate/100));
        //*ダメージ期待値計算終了---------------

        //*元素熟知がnullだったらダメージ期待値のみ
        if(elemental === null){
            await interaction.reply(`ダメージ期待値:__${expected_value}__`);
        //*元素熟知がnullじゃなかったら溶解/蒸発のダメージ期待値を追加
        }else if(elemental != null){
            await interaction.reply(`ダメージ期待値:__${expected_value}__\n溶解/蒸発時のダメージ期待値\n1.5倍の場合:__${element_expected_value_light}__\n2倍の場合:__${element_expected_value_strong}__`);
        }else{
            await interaction.reply('うまく処理できませんでした……');
        }
    }
}