//加载组件作为type
var Story = require('story');
var global = require('global');
var plot = require('plot');
cc.Class({
    extends: cc.Component,

    properties: {
        FGLeft:{
            default: null,
            type: cc.Sprite
        },
        FGRight:{
            default: null,
            type: cc.Sprite
        },
        BGImage:{
            default: null,
            type: cc.Sprite
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
        material: cc.Material,
        time: 0,
        list: cc.Node,
        camera: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.button.active = false;
        if(global.process == 20){
            cc.director.loadScene("test");
        }else if(global.process == 21){
            let self = this;
            cc.loader.loadRes(`images/background/farm`, cc.SpriteFrame, function (err, spriteFrame) {
                self.BGImage.spriteFrame = spriteFrame;
            });
            this.updateImg();
            global.changeMusic = true;
            global.music = 'judge'
        }else{
            global.changeMusic = true;
            global.music = 'mainBgMusic'
        }
        
        this.node.on('onclick', function (event) {
            event.stopPropagation();
            this.updateImg();
        }, this);
        this.speak();
    },

    updateImg(){
        let self = this;
        let change2prop = ['FGLeft', 'FGRight', 'BGImage', 'otherImg'];
        let prefix = ['zt', 'ncz', 'bg', 'img']
        // const change = self.Story.change;
        const change = plot.control[global.process];
        const ifPop = self.Story.ifPop
        if(global.process == 19){
            self.button.active = true;
            self.tipAnim()
        }
        this.speak();
        if(change){
            console.log(global.process, change);
            for(let i in change){
                if(i == 4){
                    cc.director.loadScene(change[4]);
                }else if(i == 2){
                    this.material = this.BGImage.getMaterial(0);
                    this.schedule(this.upd, 0,  cc.macro.REPEAT_FOREVER, 0);
                }else if(i == 3){
                    cc.tween(this.camera)
                    .to(0.04, { position: cc.v2(20, 5) })
                    .to(0.1, { position: cc.v2(-20, -4) })
                    .to(0.15, { position: cc.v2(20, 3) })
                    .to(0.2, { position: cc.v2(-20, -2) })
                    .to(0.24, { position: cc.v2(20, 1) })
                    .to(0.3, { position: cc.v2(0, 0) })
                    .start()
                    // 调用 start 开始执行 cc.tween
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
        }else if(ifPop == 4){
            this.mask.active = true;
            this.list.active = true;
            this.list.on(cc.Node.EventType.MOUSE_DOWN, function(){
                this.closeList();
            }, this);
        }
    },

    speak(){
        let name = global.process;
        if(global.process == 21 || global.process == 22){
            if(global.saveResult){
                name+='-1';
            }else{
                name+='-2'
            }
        }
        cc.loader.loadRes(`sounds/plot/${name}`, cc.AudioClip, function (err, clip) {
            cc.audioEngine.playEffect(clip, false);
        });
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
        this.Story.onClick()
    },

    closeTask(){
        this.mask.active = false
        this.task.active = false
        this.Story.onClick()
    },

    closeNote(){
        this.note.active = false
        this.mask.active = false
        this.Story.onClick()
    },

    closeList(){
        this.list.active = false
        this.mask.active = false
        // cc.director.loadScene('capture');
        this.Story.onClick()
    },

    upd(){
        this.time += 0.01;
        this.material.effect.setProperty('time', this.time);
        if(this.time > 1.2){
            this.unschedule(this.upd);
            
        }
    }
});

