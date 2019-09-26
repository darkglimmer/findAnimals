//加载组件作为type
var Story = require('story');
var global = require('global');
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
        FGRight:{
            default: null,
            type: cc.Sprite
        },
        BGImage:{
            default: null,
            type: cc.Node
        },
        Story:{
            default: null,
            type: Story
        },
        button:{
            default: null,
            type: cc.Node
        },
        mask:cc.Node,
        envelop:cc.Node,
        hand:cc.Node,
        message:cc.Node,
        task:cc.Node,
        note:cc.Node,
        handTip:cc.Node,
        maskTip: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.button.active = false;
        if(global.process == 15){
            // cc.director.loadScene("test");
        }
        let self = this;
        let change2prop = ['FGLeft', 'FGRight', 'BGImage', 'otherImg'];
        let prefix = ['zt', 'ncz', 'bg', 'img']
        this.node.on('onclick', function (event) {
            event.stopPropagation();
            const change = self.Story.change;
            const ifPop = self.Story.ifPop
            if(global.process == 14){
                self.button.active = true;
                self.tipAnim()
            }
            if(change){
                for(let i in change){
                    if(i == 4){
                        // cc.director.loadScene(change[4]);
                    }else{
                        this.changeFGImg(prefix[i], change[i], change2prop[i]);
                    }
                }
            }else{
                console.log('change is undefined');
            }

            if(ifPop == 1){
                this.mask.active = true
                this.envelop.active = true
                this.envelop.on(cc.Node.EventType.MOUSE_DOWN, function(){
                    this.showMessage();
                }, this);

                this.handAnim()
            }else if(ifPop == 2){
                this.mask.active = true
                this.task.active = true
                this.task.on(cc.Node.EventType.MOUSE_DOWN, function(){
                    this.closeTask();
                }, this)
            }else if(ifPop == 3){
                this.note.active = true
                this.mask.active = true
                this.note.on(cc.Node.EventType.MOUSE_DOWN, function(){
                    this.closeNote();
                }, this)
            }
        }, this);
        
    },

    handAnim() {
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

    tipAnim() {
        this.handTip.active = true;
        this.maskTip.active = true;
        var self = this;
        var x = this.handTip.x;
        var y = this.handTip.y;
        let offset = 5;
        self.tipAnim = cc.repeatForever(
            cc.sequence(
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y + (offset + 1))),
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y + (offset + 0))),
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y - (1 + offset))),
                cc.moveTo(0.18, cc.v2(x + (0 + offset), y + (offset + 0)))
            )
        )
        this.handTip.runAction(self.tipAnim);
    },

    changeFGImg: function(imgName, change, prop){
        imgName += change;
        let self = this;
        cc.loader.loadRes(`images/character/${imgName}`, cc.SpriteFrame, function (err, spriteFrame) {
            self[`${prop}`].spriteFrame = spriteFrame;
        });
    },

    changeScene: function(scene){
    },

    showMessage(){
        this.envelop.active = false
        this.message.active = true
        this.message.on(cc.Node.EventType.MOUSE_DOWN, function(){
            this.cancelLetter();    
        },this)
    },

    cancelLetter(){
        this.mask.active = false
        this.message.active = false
        this.Story.nextText()
    },

    closeTask(){
        this.mask.active = false
        this.task.active = false
        this.Story.nextText()
    },

    closeNote(){
        this.note.active = false
        this.mask.active = false
        this.Story.nextText()
    }
});
