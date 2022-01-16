exports.birthdayExecute = function() {
    require('json5/lib/register');
    const birthdayData = require('./data/birthdayData.json5');
    let embed;
    const today = new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
    const jamv = new Date(process.env.JAM_BIRTHDAY.slice(0,4),process.env.JAM_BIRTHDAY.slice(4,6),process.env.JAM_BIRTHDAY.slice(6,8));
    const motov = new Date(process.env.MOTO_BIRTHDAY.slice(0,4),process.env.MOTO_BIRTHDAY.slice(4,6),process.env.MOTO_BIRTHDAY.slice(6,8));
    const reiyuuv = new Date(process.env.REIYUU_BIRTHDAY.slice(0,4),process.env.REIYUU_BIRTHDAY.slice(4,6),process.env.REIYUU_BIRTHDAY.slice(6,8));
    const shamojiv = new Date(process.env.SHAMOJI_BIRTHDAY.slice(0,4),process.env.SHAMOJI_BIRTHDAY.slice(4,6),process.env.SHAMOJI_BIRTHDAY.slice(6,8));
    const tasunv = new Date(process.env.TASUN_BIRTHDAY.slice(0,4),process.env.TASUN_BIRTHDAY.slice(4,6),process.env.TASUN_BIRTHDAY.slice(6,8));
    const machamiv = new Date(process.env.MACHAMI_BIRTHDAY.slice(0,4),process.env.MACHAMI_BIRTHDAY.slice(4,6),process.env.MACHAMI_BIRTHDAY.slice(6,8));

    console.log(today)
    console.log(machamiv)
    console.log(today==machamiv)

    if(jamv.getMonth() == today.getMonth()+1  && jamv.getDate() == today.getDate()-1){
        //!jam=4
        embed=birthdayData.birthday[4];
    }else if(motov.getMonth() == today.getMonth()+1  && motov.getDate() == today.getDate()-1){
        //!moto=1
        embed=birthdayData.birthday[1];
    }else if(reiyuuv.getMonth() == today.getMonth()+1  && reiyuuv.getDate() == today.getDate()-1){
        //!reiyuu=0
        embed=birthdayData.birthday[0];
    }else if(shamojiv.getMonth() == today.getMonth()+1  && shamojiv.getDate() == today.getDate()-1){
        //!shamoji=2
        embed=birthdayData.birthday[2];
    }else if(tasunv.getMonth() == today.getMonth()+1  && tasunv.getDate() == today.getDate()-1){
        //!tasun=3
        embed=birthdayData.birthday[3];
    }else if(machamiv.getMonth() == today.getMonth()+1 && machamiv.getDate() == today.getDate()-1){
        //!machami=5
        embed=birthdayData.birthday[5];
    }
    return embed;
};