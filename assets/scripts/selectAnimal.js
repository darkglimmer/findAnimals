var global = require('global');
cc.Class({
    extends: cc.Component,

    properties: {
        selectQuiz: cc.Node,
        animal: '',
        selectAnimals: cc.Node,
    },

    onLoad () {
        const {animal} = this;
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.intoSelectQuiz, this);
        if(global.saveAnimal[animal]){
            // cc.loader.loadRes(`images/animal/${animal}`, cc.SpriteFrame, function (err, spriteFrame) {
            //     this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
            // });
        }
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
