cc.Class({
    extends: cc.Component,

    properties: {
        startBtn:{
            default: null,
            type: cc.Button
        },
        guide: cc.Node,
        guideText1: cc.Node,
        guideText2: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.startBtn.node.on(cc.Node.EventType.MOUSE_DOWN, this.callback, this);
    },

    start () {

    },

    callback: function(){
        cc.director.loadScene("selectMode");
    },

    showGuide(event, customEventData){
        this.guide.active = true;
        this.guideText1.active = true;
    },

    showNextGuide(event, customEventData){
        if(this.guideText1.active == true){
            this.guideText1.active = false;
            this.guideText2.active = true;
        }else{
            this.guideText2.active = false;
            this.guide.active = false;
        }
    },

    // update (dt) {},
});
