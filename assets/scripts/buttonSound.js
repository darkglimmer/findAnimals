cc.Class({
    extends: cc.Component,
    properties: {
    },

    onLoad: function () {
    },
    
    playEffect(event, data){
        cc.loader.loadRes('sounds/button', cc.AudioClip, function (err, clip) {
		    var audioID = cc.audioEngine.playEffect(clip, false);
		});
    },

    playRight(){
        cc.loader.loadRes('sounds/right', cc.AudioClip, function (err, clip) {
		    var audioID = cc.audioEngine.playEffect(clip, false);
		}); 
    },

    playWrong(){
        cc.loader.loadRes('sounds/wrong', cc.AudioClip, function (err, clip) {
		    var audioID = cc.audioEngine.playEffect(clip, false);
		});  
    }

    
});