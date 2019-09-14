var Story = require('story');
var Pop = require('popUp')
cc.Class({
    extends: cc.Component,

    properties: {
        FGLeft:{
            default: null,
            type: cc.Sprite
        },
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
        },
        Pop:{
            default: null,
            type: Pop
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var self = this;
        cc.loader.loadRes("images/zt1", cc.SpriteFrame, function (err, spriteFrame) {
            self.FGLeft.spriteFrame = spriteFrame;
        });
        this.node.on('onclick', function (event) {
            event.stopPropagation();
            const change = self.Story.change;
            console.log(change);
            if(change){
                let url = 'zt'
                switch (change[0]){
                    case 'normal': {
                        url += '1';
                        break;
                    }
                    case 'smile': {
                        url += '2';
                        break;
                    }
                }
                cc.loader.loadRes(`images/${url}`, cc.SpriteFrame, function (err, spriteFrame) {
                    self.FGLeft.spriteFrame = spriteFrame;
                });
            }else{
                console.log('change is undefined');
            }
        });
        // this.button.node.on('click', this.callback, this);
    },

    start () {

    },
    // update (dt) {},
});
