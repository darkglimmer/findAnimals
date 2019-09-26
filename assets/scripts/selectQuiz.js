var global = require('global');
cc.Class({
    extends: cc.Component,

    properties: {
        startFoot: cc.Node,
        background: cc.Sprite,
        testContent: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // console.log(global.animal);
        let animal = global.animal;
        let self = this;
        cc.loader.loadRes(`images/test/${animal}/${animal}start`, cc.SpriteFrame, function (err, spriteFrame) {
            self.startFoot.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        cc.loader.loadRes(`images/test/${animal}/${animal}cover`, cc.SpriteFrame, function (err, spriteFrame) {
            self.background.spriteFrame = spriteFrame;
        });
        this.startFoot.on(cc.Node.EventType.MOUSE_DOWN, function(){
            this.testContent.active = true;
            this.node.active = false;
        }, this)
        
    },

    start () {

    },

    // update (dt) {},
});
