
var text = require("text");

cc.Class({
    extends: cc.Component,

    properties: {
        count: 0,
        richTextInfo: cc.RichText,
    },

    //构造函数
    ctor() {
        
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.nextText();
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.nextText, this);
    },

    // update (dt) {},


    nextText: function() {
        this.richTextInfo.string = text.story[this.count++];
    }

});
