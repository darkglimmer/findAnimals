// test场景中的文字

cc.Class({
    extends: cc.Component,

    properties: {
        selectAnimal: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    },

    start () {

    },

    textInEnd: function(){
        this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            this.node.getComponent(cc.Animation).play('easeOut');
        }, this);
        
    },

    textOutEnd: function(){
        console.log('animation is end');
        this.selectAnimal.active = true;
        this.node.active = false;
    }

    // update (dt) {},
    
});
