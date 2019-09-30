
cc.Class({
    extends: cc.Component,

    properties: {
        videoPlayer: cc.VideoPlayer,

    },

    onLoad () {
    },

    onVideoPlayerEvent(sender, event){
        if (event === cc.VideoPlayer.EventType.CLICKED) {
            if (this.videoPlayer.isPlaying()) {
                this.videoPlayer.pause();
            } else {
                this.videoPlayer.play();
            }
        }
    }
});
