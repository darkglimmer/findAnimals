
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
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.detectModeBtn.node.on('click', this.detectMode, this);
        this.normalModeBtn.node.on('click', this.normalMode, this);
    },

    start () {

    },

    detectMode: function(){
        cc.director.loadScene("main");
    },

    normalMode: function(){
        // cc.director.loadScene("main");
    }
    // update (dt) {},
});
