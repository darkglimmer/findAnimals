
cc.Class({
    extends: cc.Component,

    properties: {
        redCircle:{
            default: null,
            type: cc.Node
        }
    },
    
    onLoad(){
        this.redCircle.active = false
    },

    click(){
        this.redCircle.active = true;
    },
    close(){
        this.redCircle.active = false;
    }
});