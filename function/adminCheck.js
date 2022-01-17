exports.adminCheckExecute = function() {
    let flg=false;
    if(interaction.memberPermissions.has("ADMINISTRATOR")){
        flg=true;
    }
    return flg;
};