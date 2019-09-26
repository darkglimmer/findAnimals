var global = require("global")
cc.Class({
    extends: cc.Component,

    properties: {
        redCircle:{
            default: null,
            type: cc.Node
        },
        id: 0,
        popUp:cc.Node,
        mask:cc.Node
    },
    
    onLoad(){

    },

    click(){
        this.redCircle.active = true;
        this.popUp.active = true
        this.mask.active = true
    },
    close(){
        this.redCircle.active = false;
    },
    correct(){
        if(this.id == 0){
            cc.director.loadScene("ending")
        }else{
            global.score = 0
            cc.director.loadScene("ending")
        }
    },
    cancel(){
        this.redCircle.active = false;
        this.popUp.active = false
        this.mask.active = false
    }
});