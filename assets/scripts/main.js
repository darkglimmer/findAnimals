var Story = require('story');
cc.Class({
    extends: cc.Component,

    properties: {
        FGLeft:{
            default: null,
            type: cc.Sprite
        },
        star: {
            default: null,
            type: cc.Prefab
        },
        score: 2,
        FGRight:{
            default: null,
            type: cc.Node
        },
        BGImage:{
            default: null,
            type: cc.Node
        },
        Story:{
            default: null,
            type: Story
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let self = this;
        cc.loader.loadRes("images/character/ztNormal", cc.SpriteFrame, function (err, spriteFrame) {
            self.FGLeft.spriteFrame = spriteFrame;
        });
        this.node.on('onclick', function (event) {
            event.stopPropagation();
            const change = self.Story.changeImg;
            if(change){
                let url = 'zt'
                switch (change[0]){
                    case 'normal': {
                        url += 'Normal';
                        break;
                    }
                    case 'smile': {
                        url += 'Smile';
                        break;
                    }
                }
                cc.loader.loadRes(`images/character/${url}`, cc.SpriteFrame, function (err, spriteFrame) {
                    self.FGLeft.spriteFrame = spriteFrame;
                });
            }else{
                console.log('change is undefined');
            }
        });
    }
});
