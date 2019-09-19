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
        let change2prop = ['FGLeft', 'FGRight', 'BGImage', 'otherImg'];
        cc.loader.loadRes("images/character/ztNormal", cc.SpriteFrame, function (err, spriteFrame) {
            self.FGLeft.spriteFrame = spriteFrame;
        });
        this.node.on('onclick', function (event) {
            event.stopPropagation();
            const change = self.Story.changeImg;
            
            if(change){
                for(let i in change){
                    this.changeFGImg('zt', change[0], change2prop[i]);
                }
            }else{
                console.log('change is undefined');
            }
        }, this);
    },

    changeFGImg: function(imgName, change, prop){
        switch (change){
            case 'normal': {
                imgName += 'Normal';
                break;
            }
            case 'smile': {
                imgName += 'Smile';
                break;
            }
        }
        let self = this;
        cc.loader.loadRes(`images/character/${imgName}`, cc.SpriteFrame, function (err, spriteFrame) {
            self[`${prop}`].spriteFrame = spriteFrame;
        });
    }
});
