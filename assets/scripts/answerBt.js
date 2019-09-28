let global = require('global');

cc.Class({
    extends: cc.Component,

    properties: {
        button:{
            default: [],
            type: cc.Node
        }
    },

    onLoad(){
        for(var i = 0; i < 15; i++){
            if(global.testResultArr[i]){
                this.button[i].active = true
            }else{
                this.button[i + 15].active = true
            }
        }
    },
})