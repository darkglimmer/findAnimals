var global = require('global');
cc.Class({
    extends: cc.Component,

    properties: {
        selectQuiz: cc.Node,
        animal: '',
        selectAnimals: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.intoSelectQuiz, this);
    },

    start () {

    },

    intoSelectQuiz: function(){
        global.animal = this.animal;
        this.selectQuiz.active = true;
        this.selectAnimals.active = false;
    }

    // update (dt) {},
});
