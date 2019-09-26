var Story = require('story');

cc.Class({
    extends: cc.Component,

    properties: {
        pop:{
            default: null,
            type: cc.Node
        },
        Story:{
            default: null,
            type: Story
        },
        closeBt:{
            default: null,
            type: cc.Node
        },
        mask:{
            default:null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        var self = this
        this.node.on('onclick', function (event) {
            const ifPop= self.Story.ifPop
            if(ifPop == 1){
                self.pop.active = true
            }else if(ifPop == 2){
                // self.closeBt.active = true;
                // self.mask.active = true
            }else if(ifPop == 3){
                // cc.loader.loadRes('images/note', cc.SpriteFrame, function (err, spriteFrame) {
                //     sprite.spriteFrame = spriteFrame;
                // });
            }
            else{
                self.pop.active = false
            }
        })
    },

    closePop(){
        this.pop.active = false;
        this.closeBt.active = false
    }
});
