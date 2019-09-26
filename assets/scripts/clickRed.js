var global = require("global")
cc.Class({
    extends: cc.Component,

    properties: {
        cid: 0,
        popUp:cc.Node,
        mask:cc.Node,
        redCircle:{
            default: null,
            type: cc.Node
        },
    },
    
    onLoad(){

    },

    click(){
        global.id = this.cid
        this.redCircle.active = true
        this.popUp.active = true
        this.mask.active = true
    },
});