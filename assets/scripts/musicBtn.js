
cc.Class({
    extends: cc.Component,

    properties: {
        audio: {
            type: cc.AudioClip,
            default: null
        },
        buttonAudio: {
            default: null,
            type: cc.AudioClip,
        }
    },

    onLoad () {
        // if(this.node._name == 'musicBtn'){
            let changeImg = 0;
            let button = this.node.getComponent(cc.Button);
            let audioID = cc.audioEngine.playMusic(this.audio, false);
            this.node.on(cc.Node.EventType.MOUSE_DOWN, function(){
                let buttonAudioID = cc.audioEngine.playMusic(this.buttonAudio, false);
                //切换音乐状态
                let state = cc.audioEngine.getState(audioID);

                console.log(state);
                if(state == 1){
                    cc.audioEngine.stopMusic(audioID);
                }else if(state == -1){
                    audioID = cc.audioEngine.playMusic(this.audio, false);
                }
                //切换图标
                let musicImg;
                if(changeImg == 0){
                    musicImg = 'noMusicBtn';
                    changeImg = 1;
                }else{
                    musicImg = 'musicBtn';
                    changeImg = 0;
                }
                cc.loader.loadRes("images/UI/" + musicImg, cc.SpriteFrame, function (err, spriteFrame) {
                    button.normalSprite = spriteFrame;
                });
                cc.loader.loadRes("images/UI/" + musicImg, cc.SpriteFrame, function (err, spriteFrame) {
                    button.pressedSprite = spriteFrame;
                });
                cc.loader.loadRes("images/UI/" + musicImg + "Hover", cc.SpriteFrame, function (err, spriteFrame) {
                    button.hoverSprite = spriteFrame;
                });
                
            }, this)
            cc.game.addPersistRootNode(this.node);
        // } else {
        //     console.log('this is another');
        // }
    },

    start () {

    },
});
