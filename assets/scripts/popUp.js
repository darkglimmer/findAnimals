var Story = require('story');

cc.Class({
    extends: cc.Component,

    properties: {
        richTextInfo: cc.RichText,
        pop:{
            default: null,
            type: cc.Node
        },
        Story:{
            default: null,
            type: Story
        },
        popImage:{
            default: null,
            type: cc.Sprite
        },
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        var self = this
        this.pop.active = false
        this.node.on('onclick', function (event) {
            // event.stopPropagation();
            const ifPop= self.Story.ifPop
            if(ifPop){
                self.pop.active = true
                self.richTextInfo.string = ifPop
                // cc.loader.loadRes(`images/${url}`, cc.SpriteFrame, function (err, spriteFrame) {
                //     self.FGLeft.spriteFrame = spriteFrame;
                // });
            }else{
                self.pop.active = false
            }
        })
    }
});
