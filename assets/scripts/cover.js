cc.Class({
    extends: cc.Component,

    properties: {
        startBtn:{
            default: null,
            type: cc.Button
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.startBtn.node.on(cc.Node.EventType.MOUSE_DOWN, this.callback, this);
        
    },

    start () {

    },

    callback: function(){
        cc.director.loadScene("selectMode");
    }

    // update (dt) {},
});
