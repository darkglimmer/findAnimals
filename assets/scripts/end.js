var global = require('global')
cc.Class({
    extends: cc.Component,

    properties: {
        text: cc.Node,
        contiBt: cc.Node,
        expBt:cc.Node,
        envelop:cc.Node,
        hand:cc.Node,
        letterText:cc.Node,
        letter:cc.Node,
        gift:cc.Node,
        code:cc.Node,
        tip:cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(global.end){
            this.text.getComponent(cc.RichText).string = "恭喜你成功找出了小偷!"
            this.letterText.getComponent(cc.RichText).string = "     干的漂亮，不愧是我的徒儿，师父决定给你授予xx侦探的称号。通过这次探案，你知道知识有多么重要了吧！为了鼓励你继续学习，师父再送你一个礼物"
        }else{
            this.text.getComponent(cc.RichText).string = "很遗憾，你没能成功抓到小偷，看来你的侦探之路还很漫长呢！"
            this.letterText.getComponent(cc.RichText).string = "    看来徒儿的道行还不够深啊！通过这次探案，你知道知识有多么重要了吧！为了帮助你成为更优秀的侦探，师父送你一个礼物吧！"
        }
    },
    continue(){
        this.contiBt.active = false
        this.expBt.active = false
        this.text.active = false
        if(global.end){
            this.envelop.active = true
            // this.hand.active = true
            this.handAnim()
        }else{
            this.tip.active = true
            this.tip.on(cc.Node.EventType.MOUSE_DOWN,function(){
                this.tip.active = false
                this.envelop.active = true
                // this.hand.active = true
                this.handAnim()
            },this)
        }
    },
    handAnim() {
        var self = this;
        var x = this.hand.x;
        var y = this.hand.y;
        let offset = 5;
        self.handAnim = cc.repeatForever(
            cc.sequence(
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y + (offset + 1))),
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y + (offset + 0))),
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y - (1 + offset))),
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y + (offset + 0)))
            )
        )
        this.hand.runAction(self.handAnim);
    },
    showLetter(){
        this.letter.active = true
        this.envelop.active = false
    },
    showGift(){
        this.letter.active = false
        this.gift.active = true
        this.giftAnim()
    },
    giftAnim() {
        var self = this;
        var x = this.gift.x;
        var y = this.gift.y;
        let offset = 5;
        self.giftAnim = cc.repeatForever(
            cc.sequence(
                cc.moveTo(0.18, cc.v2(x + (1 + offset), y + (offset + 1))),
                cc.moveTo(0.18, cc.v2(x + (1 + offset), y - (1 + offset))),
                cc.moveTo(0.18, cc.v2(x - (1 + offset), y + (offset + 1))),
                cc.moveTo(0.18, cc.v2(x - (1 + offset), y - (1 + offset))),
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y + (offset + 0)))
            )
        )
        this.gift.runAction(self.giftAnim);
    },
    showCode(){
        this.gift.active = false
        this.code.active = true
    }
});
