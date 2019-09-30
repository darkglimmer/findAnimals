
var global = require('global');
cc.Class({
    extends: cc.Component,

    properties: {
        info: cc.Node,
        selectAnimal: cc.Node,
        title: cc.Node
    },

    onLoad () {
        global.changeMusic = true;
        global.music = 'testBgMusic'
        if(global.mode == 0){
            //探案
        }else{
            this.info.active = false;
            this.selectAnimal.active = true;
            this.title.active = false;
        }
    },
});
