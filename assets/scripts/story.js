
var plot = require("plot");

cc.Class({
    extends: cc.Component,

    properties: {
        plotNum: 0,
        richTextInfo: cc.RichText,
        change: []
    },

    //构造函数
    ctor() {
        
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.nextText();
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onClick, this);
    },

    // update (dt) {},

    onClick: function() {
        this.change = plot.imgControl[this.plotNum];
        // console.log(this.change);
        this.node.dispatchEvent( new cc.Event.EventCustom('onclick', true) );
        
        this.nextText();
    },
    
    nextText: function() {
        this.richTextInfo.string = plot.story[this.plotNum++];
    }

});