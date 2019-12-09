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
        resultPop: cc.Node,
        animalStar: cc.Node,
        captureStar: cc.Node,
        endStar: cc.Node,
        star1: cc.Prefab,
        star2:cc.Prefab,
        star3:cc.Prefab,
        postmark:{
            default: [],
            type: cc.Node
        }
    },

    onLoad () {
        // global.animalScore = 15;
        // global.score = 5;
        var detective = ["新手侦探","入门侦探","初级侦探","中级侦探","高级侦探",]
        var endScore = Math.floor(((global.score * 3 + global.animalScore) / 2) / 3)
        if(global.score > 0){
            global.changeMusic = true;
            global.music = 'goodEnding'
            this.text.getComponent(cc.RichText).string = "恭喜你成功找出了小偷!"
            this.letterText.getComponent(cc.RichText).string = "     干的漂亮，不愧是我的徒儿，师父决定给你授予<size=40><color=#FE4C40>" +detective[endScore == 5? 4:endScore] + "</color></size>的称号。通过这次探案，你知道知识有多么重要了吧！为了鼓励你继续学习，师父再送你一个礼物"
        }else{
            global.changeMusic = true;
            global.music = 'badEnding'
            this.text.getComponent(cc.RichText).string = "很遗憾，你没能成功抓到小偷，看来你的侦探之路还很漫长呢！"
            this.letterText.getComponent(cc.RichText).string = "    看来徒儿的道行还不够深啊！通过这次探案，你知道知识有多么重要了吧！为了帮助你成为更优秀的侦探，师父送你一个礼物吧！"
        }
    },
    continue(){
        this.contiBt.active = false
        this.expBt.active = false
        this.text.active = false
        this.result.active = false
        this.resultPop.active = false
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
        var endScore = Math.floor(((global.score * 3 + global.animalScore) / 2) / 3)
        this.letter.active = true
        this.envelop.active = false
        this.postmark[endScore == 5? 4:endScore].active = true
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
        this.resultPop.active = true
    },

    spawnNewStar () {
        let completeStarNum = Math.floor(global.animalScore / 3);
        let restStarNum = global.animalScore % 3;
        let i;
        for(i = 0; i < completeStarNum; i++){
            let newStar = cc.instantiate(this.star1);
            this.animalStar.addChild(newStar);
            newStar.setPosition(this.getNewStarPosition(i));
        }
        let newStar;
        if(restStarNum){
            if(restStarNum == 1){
                newStar = cc.instantiate(this.star3);
            }else{
                newStar = cc.instantiate(this.star2);
            }
            this.animalStar.addChild(newStar);
            newStar.setPosition(this.getNewStarPosition(i));
        }
        for(i = 0; i < global.score; i++){
            let newStar = cc.instantiate(this.star1);
            this.captureStar.addChild(newStar);
            newStar.setPosition(this.getCaptureStarPosition(i));
        }
        let endScore = Math.floor((global.score * 3 + global.animalScore) / 2)
        completeStarNum = Math.floor(endScore / 3);
        restStarNum = endScore % 3;
        
        for(i = 0; i < completeStarNum; i++){
            let newStar = cc.instantiate(this.star1);
            this.animalStar.addChild(newStar);
            newStar.setPosition(this.getEndStarPosition(i));
        }
        if(restStarNum){
            if(restStarNum == 1){
                newStar = cc.instantiate(this.star3);
            }else{
                newStar = cc.instantiate(this.star2);
            }
            this.animalStar.addChild(newStar);
            newStar.setPosition(this.getEndStarPosition(i));
        }
    },

    getNewStarPosition: function(i) {
        var positionX = i*50;
        var positionY = 15;
        return cc.v2(positionX, positionY);
    },
    getCaptureStarPosition: function(i) {
        var positionX = i*50;
        var positionY = 20;
        return cc.v2(positionX, positionY);
    },
    getEndStarPosition: function(i) {
        var positionX = -80+i*50;
        var positionY = -90;
        return cc.v2(positionX, positionY);
    },
    again(){
        global.process = 0
        global.id = 0
        global.quiz = 0
        global.collection = {}
        global.firstOpen = true
        global.firstClose = true
        global.bookPage = 0
        global.score = 5
        global.animalScore = 0
        global.saveAnimal = {
            'cat': 0,
            'dog': 0,
            'horse': 0,
            'bird': 0,
            'pig': 0
        }
        global.testResult = {
            'cat': [true, true, true],
            'dog': [true, true, true],
            'horse': [true, true, true],
            'bird': [true, true, true],
            'pig': [true, true, true]
        }
        global.testResultArr = []
        global.saveResult = true;
        cc.director.loadScene("cover")
    },
    closeWindow(){
        window.close();
    }
});
