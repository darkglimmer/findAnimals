cc.Class({
    extends: cc.Component,
    properties: {
        book: cc.Node,
        handTip: cc.Node,
        maskTip: cc.Node,
    },

    onLoad: function () {
        cc.game.addPersistRootNode(this.node);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function(){
            this.book.active = true;
            this.handTip.active = false;
            this.maskTip.active = false;
            
        }, this);
    },
});