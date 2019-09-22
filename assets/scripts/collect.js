var global = require('global')
cc.Class({
    extends: cc.Component,

    properties: {
        wordLabel: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let word = this.wordLabel.string;
        let self = this;
        let img;
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            if(global.collection[word] == true){
                global.collection[word] = false;
                img = 'starBlank'
            }else{
                global.collection[word] = true
                img = 'star'
            }
            cc.loader.loadRes(`images/${img}`, cc.SpriteFrame, function (err, spriteFrame) {
                self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        }, this)
        
    },

    start () {

    },

    // update (dt) {},
});
