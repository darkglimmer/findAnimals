cc.Class({
    extends: cc.Component,

    properties: {
        FGLeft:{
            default: null,
            type: cc.Sprite
        },
        FGRight:{
            default: null,
            type: cc.Sprite
        },
        BGImage:{
            default: null,
            type: cc.Sprite
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.loader.loadRes("images/zt1", function(err, img){
            console.log('?');
            this.FGLeft.spriteFrame = cc.instantiate(img);
        })
    },

    start () {

    },

    // update (dt) {},
});
