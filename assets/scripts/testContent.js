var global = require('global');
var quiz1 = require('quiz');
var quiz2 = require('quiz2');

let animal = global.animal;
cc.Class({
    extends: cc.Component,

    properties: {
        border: cc.Sprite,
        star: cc.Node,
        quiz: 1,
        quiz1: cc.Node,
        quiz2: cc.Node,
        quiz3: cc.Node,
        setNum: 0,
        selectQuestion: cc.Node,
        popUp: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // animal = global.animal;
        animal = 'cat';
        console.log(animal);
        this.selectQuestion.active = false;
        let self = this;
        cc.loader.loadRes(`images/test/${animal}`, cc.SpriteFrame, function (err, spriteFrame) {
            self.border.spriteFrame = spriteFrame;
        });
        //第几套
        this.setNum = Math.floor(Math.random()+1);
        console.log('题目',this.setNum);

        let quizNum = 1;
        let quizContent = this.setNum == 0 ? quiz1.questiones[`${animal}`] : quiz2.questiones[`${animal}`];
        // console.log(quizContent)
        this[`updateQuiz${quizNum}`](quizContent);
    },

    controlActive: function(quizNum){
        this.quiz1.active = (quizNum == 1);
        this.quiz2.active = (quizNum == 2);
        this.quiz3.active = (quizNum == 3);
    },

    updateQuiz1: function(quizContent){
        this.controlActive(1);
        //题目内容
        this.quiz1.children[0].getComponent(cc.RichText).string = quizContent[0].content;
        //题目图
        let self = this;
        // console.log(this.setNum, `images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz1/picture`)
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz1/picture`, cc.SpriteFrame, function (err, spriteFrame) {
            self.quiz1.children[1].getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        //三个选项图
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz1/1`, cc.SpriteFrame, function (err, spriteFrame) {
            self.quiz1.children[2].getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz1/2`, cc.SpriteFrame, function (err, spriteFrame) {
            self.quiz1.children[3].getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz1/3`, cc.SpriteFrame, function (err, spriteFrame) {
            self.quiz1.children[4].getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        for(let i = 2; i <= 4; i++){
            // this.quiz1.children[i].on(cc.Node.EventType.MOUSE_DOWN, this.clickQuizOption(1, i-1, quizContent), this);
            this.quiz1.children[i].on(cc.Node.EventType.MOUSE_DOWN, function(){
                this.popUp.active = true;
                this.popUp.children[1].once(cc.Node.EventType.MOUSE_DOWN, function(){
                    this.popUp.active = false;
                    if(i-1 == quizContent[1].answer){
                        this.updateQuiz2();
                    }else{
                        // this.popUp.children[0].
                    }
                }, this); 
            }, this);
            
        }
        
    },

    // clickQuizOption: function(quizNum, option, quizContent){
    //     this.popUp.active = true;
    //     this.popUp.children[1].once(cc.Node.EventType.MOUSE_DOWN, function(){
    //         this.popUp.active = false;
    //         if(quizNum == 1){
    //             if(option == quizContent[quizNum].answer){
    //                 this.updateQuiz2();
    //             }else{
    //                 // this.popUp.children[0].
    //             }
    //         }
    //     }, this); 

    // },
    

    updateQuiz2: function(){
        this.controlActive(2);
        //题目内容
        this.quiz1.children[0].getComponent(cc.RichText).string = quizContent[1].content;
        //题目图
        let self = this;
        if(animal = 'dog'){
            this.quiz2.children[1].getComponent(cc.Sprite).spriteFrame = null;
        }else{
            cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz2/picture`, cc.SpriteFrame, function (err, spriteFrame) {
                self.quiz1.children[1].getComponent(cc.Sprite).spriteFrame = spriteFrame;
           });
        }
        // console.log(this.setNum, `images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz1/picture`)
        // cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz2/picture`, cc.SpriteFrame, function (err, spriteFrame) {
        //     self.quiz1.children[1].getComponent(cc.Sprite).spriteFrame = spriteFrame;
        // });
        

    },

    updateQuiz3: function(){

    }


    

    // update (dt) {},
});
