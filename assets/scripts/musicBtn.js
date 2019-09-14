
cc.Class({
    extends: cc.Component,

    properties: {
        audio: {
            type: cc.AudioClip,
            default: null
        },
    },

    onLoad () {
        let audioID = cc.audioEngine.playMusic(this.audio, false);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function(){
            var state = cc.audioEngine.getState(audioID);
            console.log(state);
            if(state == 1){
                cc.audioEngine.stopMusic(audioID);
            }else if(state == -1){
                audioID = cc.audioEngine.playMusic(this.audio, false);
            }
        }, this)
        cc.game.addPersistRootNode(this.node);
    },

    start () {

    },

    // play: function () {
    //     this.bgMusic.play();
    // },

    // pause: function () {
    //     this.bgMusic.pause();
    // },

    // update (dt) {},
});
