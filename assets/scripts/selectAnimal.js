
cc.Class({
    extends: cc.Component,

    properties: {
        selectQuiz: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('click', this.intoSelectQuiz, this);
    },

    start () {

    },

    intoSelectQuiz: function(){
        this.selectQuiz.active = true;
    }

    // update (dt) {},
});
