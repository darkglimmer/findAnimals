
var global = require('global');
cc.Class({
    extends: cc.Component,

    properties: {
        wordLabel: cc.Label,
        audio: {
            default: null,
            type: cc.AudioClip,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let animal = global.bookContent[global.bookPage].split('-')[0];
        let slang = this.wordLabel.string;
        // console.log(animal, slang);
        let self = this;
        cc.loader.loadRes(`sounds/${animal}/${slang}`, cc.AudioClip, function (err, audioClip) {
            // console.log(audioClip);
            self.audio = audioClip;
        });
        let audioID;
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function(){
            audioID = cc.audioEngine.playEffect(this.audio, false);
        }, this);
        
    },

    start () {

    },

    // update (dt) {},
});
