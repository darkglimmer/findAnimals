let global = require('global');
let quiz = require('quiz')
let quiz2 = require('quiz2');
let plot = require('plot');

cc.Class({
    extends: cc.Component,

    properties: {
        qid: 0,
        explain: cc.Node
    },

    showExplain(){
        if(global.quiz == 0){
            if(this.qid < 3){
                this.explain.getComponent(cc.Label).string = quiz.questiones.cat[this.qid].explain
            }else if(this.qid >=3 && this.qid < 6){
                this.explain.getComponent(cc.Label).string = quiz.questiones.dog[this.qid-3].explain
            }else if(this.qid >=6 && this.qid < 9){
                this.explain.getComponent(cc.Label).string = quiz.questiones.horse[this.qid-6].explain
            }else if(this.qid >=9 && this.qid < 12){
                this.explain.getComponent(cc.Label).string = quiz.questiones.bird[this.qid-9].explain
            }else if(this.qid >=12 && this.qid < 15){
                this.explain.getComponent(cc.Label).string = quiz.questiones.pig[this.qid-12].explain
            }
        }else{
            if(this.qid < 3){
                this.explain.getComponent(cc.Label).string = quiz2.questiones.cat[this.qid].explain
            }else if(this.qid >=3 && this.qid < 6){
                this.explain.getComponent(cc.Label).string = quiz2.questiones.dog[this.qid - 3].explain
            }else if(this.qid >=6 && this.qid < 9){
                this.explain.getComponent(cc.Label).string = quiz2.questiones.horse[this.qid - 6].explain
            }else if(this.qid >=9 && this.qid < 12){
                this.explain.getComponent(cc.Label).string = quiz2.questiones.bird[this.qid - 9].explain
            }else if(this.qid >=12 && this.qid < 15){
                this.explain.getComponent(cc.Label).string = quiz2.questiones.pig[this.qid - 12].explain
            }
        }
    },

    loadScene(){
        let saveNum = 0;
        for(let i in global.saveAnimal){
            saveNum += global.saveAnimal[i];
        }
        if(saveNum == 5){
            //全救回；
        }else{
            //没能救回
            plot.story[21] = '农场主@呜呜呜，我的动物们还是没能都找到'
            plot.story[22] = '甄探@别着急，我们可以从小偷入手，一旦找到了小偷动物们肯定也能找回的'
        }
        global.process = 21;
        cc.director.loadScene('main');
    }

    

});
