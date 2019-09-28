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
        tip:cc.Node,
        explain:cc.Node,
        result: cc.Node,
        animalStar: cc.Node,
        captureStar: cc.Node,
        endStar: cc.Node,
        star1: cc.Prefab,
        star2:cc.Prefab,
        star3:cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var detective = ["新手侦探","入门侦探","初级侦探","中级侦探","高级侦探"]
        var endScore = Math.floor(((global.score * 3 + global.animalScore) / 2) / 3)
        if(global.score){
            this.text.getComponent(cc.RichText).string = "恭喜你成功找出了小偷!"
            this.letterText.getComponent(cc.RichText).string = "     干的漂亮，不愧是我的徒儿，师父决定给你授予" + detective[endScore] + "的称号。通过这次探案，你知道知识有多么重要了吧！为了鼓励你继续学习，师父再送你一个礼物"
        }else{
            this.text.getComponent(cc.RichText).string = "很遗憾，你没能成功抓到小偷，看来你的侦探之路还很漫长呢！"
            this.letterText.getComponent(cc.RichText).string = "    看来徒儿的道行还不够深啊！通过这次探案，你知道知识有多么重要了吧！为了帮助你成为更优秀的侦探，师父送你一个礼物吧！"
        }
    },
    continue(){
        this.contiBt.active = false
        this.expBt.active = false
        this.text.active = false
        this.result.active = false
        if(global.score > 0){
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
        this.spawnNewStar()
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
    },
    showExplain(){
        this.contiBt.active = false
        this.expBt.active = false
        this.text.active = false
        this.explain.active = true
    },
    showResult(){
        this.explain.active = false
        this.result.active = true
    },

    spawnNewStar () {
        for(var i = global.animalScore; i > 0; i = i-3){
            if( i >= 3){
                var newStar = cc.instantiate(this.star1);
            }else if(i == 2){
                var newStar = cc.instantiate(this.star2);
                this.animalStar.addChild(newStar);
                // 为星星设置一个随机位置
                newStar.setPosition(this.getNewStarPosition(i));
                break;
            }else{
                var newStar = cc.instantiate(this.star3);
                this.animalStar.addChild(newStar);
                // 为星星设置一个随机位置
                newStar.setPosition(this.getNewStarPosition(i));
                break;
            }
            // 将新增的节点添加到 Canvas 节点下面
            this.animalStar.addChild(newStar);
            // 为星星设置一个随机位置
            newStar.setPosition(this.getNewStarPosition(i));
        }
        for(var i = global.score; i > 0; i--){
            var newStar = cc.instantiate(this.star1);
            // 将新增的节点添加到 Canvas 节点下面
            this.captureStar.addChild(newStar);
            // 为星星设置一个随机位置
            newStar.setPosition(this.getCaptureStarPosition(i));
        }
        var endScore = Math.floor((global.score * 3 + global.animalScore) / 2)
        for(var i = endScore; i > 0; i = i-3){
            if( i >= 3){
                var newStar = cc.instantiate(this.star1);
            }else if(i == 2){
                var newStar = cc.instantiate(this.star2);
                this.animalStar.addChild(newStar);
                // 为星星设置一个随机位置
                newStar.setPosition(this.getEndStarPosition(i));
                break;
            }else{
                var newStar = cc.instantiate(this.star3);
                this.animalStar.addChild(newStar);
                // 为星星设置一个随机位置
                newStar.setPosition(this.getEndStarPosition(i));
                break;
            }
            // 将新增的节点添加到 Canvas 节点下面
            this.animalStar.addChild(newStar);
            // 为星星设置一个随机位置
            newStar.setPosition(this.getEndStarPosition(i));
        }
    },

    getNewStarPosition: function(i) {
        var positionX = 220-i*15;
        var positionY = 15;
        return cc.v2(positionX, positionY);
    },
    getCaptureStarPosition: function(i) {
        var positionX = 280-i*50;
        var positionY = 20;
        return cc.v2(positionX,positionY);
    },
    getEndStarPosition: function(i) {
        var positionX = 160-i*16;
        var positionY = -90;
        return cc.v2(positionX,positionY);
    }
});
