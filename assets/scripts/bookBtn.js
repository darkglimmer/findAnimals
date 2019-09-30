cc.Class({
    extends: cc.Component,
    properties: {
        book: cc.Node,
        handTip: cc.Node,
        maskTip: cc.Node,
    },

    onLoad: function () {
        if(this.node.name != 'normal'){
            cc.game.addPersistRootNode(this.node);
        }
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function(){
            this.book.active = true;
            if(this.node.name != 'normal'){
                this.handTip.active = false;
                this.maskTip.active = false;
            }else{
            }
            
        }, this);
    },
});