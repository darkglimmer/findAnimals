var global = require('global');
cc.Class({
    extends: cc.Component,

    properties: {
        selectQuiz: cc.Node,
        animal: '',
        selectAnimals: cc.Node,
    },

    onLoad () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.intoSelectQuiz, this);
    },

    onEnable(){
        const {animal} = this;
        let self = this;

        let allSave = true;
        for(let i in global.saveAnimal){
            if(global.saveAnimal[i] == 0){
                allSave = false;
                break;
            }
        }
        if(allSave){
            if(global.mode){
                cc.director.loadScene('normal');
            }else{
                cc.director.loadScene('quiz');
            }
        }


        if(global.saveAnimal[animal] == 1){
            //成功
            cc.loader.loadRes(`images/animals/${animal}`, cc.SpriteFrame, function (err, spriteFrame) {
                self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                // console.log(err);
            });
            this.node.off(cc.Node.EventType.MOUSE_DOWN, this.intoSelectQuiz, this);
        }else if (global.saveAnimal[animal] == -1){
            //失败
            cc.loader.loadRes(`images/animals/${animal}Failed`, cc.SpriteFrame, function (err, spriteFrame) {
                self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                // console.log(err);
            });
            this.node.off(cc.Node.EventType.MOUSE_DOWN, this.intoSelectQuiz, this);
        }

    },

    intoSelectQuiz: function(){
        global.animal = this.animal;
        this.selectQuiz.active = true;
        this.selectAnimals.active = false;
    }

    // update (dt) {},
});
