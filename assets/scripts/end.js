var global = require('global')

cc.Class({
    extends: cc.Component,
    properties: {
        mask:{
            default: null,
            type: cc.Node
        },
        letter:{
            default: null,
            type: cc.Node
        },
        hand:{
            default: null,
            type: cc.Node
        }
    },
    onLoad(){
        console.log(global.score)
    },

    explain(){

    },

    continue(){
        this.mask.active = true
        this.letter.active = true
        this.Anim()
    },

    Anim() {
        var self = this;
        var x = this.hand.x;
        var y = this.hand.y;
        let offset = 5;
        self.handAnim = cc.repeatForever(
            cc.sequence(
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y + (offset + 1))),
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y + (offset + 0))),
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y - (1 + offset))),
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y + (offset + 0))),
                // cc.moveTo(0.18, cc.v2(x - (1 + offset), y + (offset + 1))),
                // cc.moveTo(0.18, cc.v2(x - (1 + offset), y - (1 + offset))),
            )
        )
        this.hand.runAction(self.handAnim);
    },
    
    showLetter(){
        this.letter.active = false
        this.hand.stopAction(self.handAnim);
    }
});
