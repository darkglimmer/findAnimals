var global = require("global");
cc.Class({
    extends: cc.Component,

    properties: {
        detectModeBtn:{
            default: null,
            type: cc.Button
        },
        normalModeBtn:{
            default: null,
            type: cc.Button
        },
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.detectModeBtn.node.on(cc.Node.EventType.MOUSE_DOWN, this.detectMode, this);
        this.normalModeBtn.node.on(cc.Node.EventType.MOUSE_DOWN, this.normalMode, this);

    },

    start () {

    },

    detectMode: function(){
        global.process = 0;
        cc.director.loadScene("main");
        global.mode = 0;
    },

    normalMode: function(){
        // global.process = 15;
        
        cc.director.loadScene("normal");
        global.mode = 1;
    }
    // update (dt) {},
});
