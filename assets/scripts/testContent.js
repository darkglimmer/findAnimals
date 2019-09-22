var global = require('global');
var quiz = require('quiz');
cc.Class({
    extends: cc.Component,

    properties: {
        border: cc.Sprite,
        star: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // console.log(global.animal);
        // let animal = global.animal;
        let animal = 'cat';
        let self = this;
        cc.loader.loadRes(`images/test/${animal}`, cc.SpriteFrame, function (err, spriteFrame) {
            self.border.spriteFrame = spriteFrame;
        });
        
        
    },

    start () {

    },

    // update (dt) {},
});
