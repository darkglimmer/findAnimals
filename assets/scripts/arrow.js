cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad () {
        console.log(this.node.name);
        let eventName = 'clickRight';
        if(this.node.name == 'leftArrow'){
            eventName = 'clickLeft';
        }
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function(){
            this.node.dispatchEvent(new cc.Event.EventCustom(eventName, true));
        }, this);
    },

    start () {

    },

    // update (dt) {},
});
