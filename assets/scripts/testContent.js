var global = require('global');
var quiz1 = require('quiz');
var quiz2 = require('quiz2');

let animal = global.animal;
let quizContent;

let option3 = [];
//是否答对
let answer = [false, false, false];

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
        popUp: cc.Node,
        tipPopUp: cc.Node,
        editBoxArr: {
            default: [],
            type: cc.EditBox
        },
        selectAnimals: cc.Node,
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
        quizContent = this.setNum == 0 ? quiz1.questiones[`${animal}`] : quiz2.questiones[`${animal}`];
        // console.log(quizContent)
        this[`updateQuiz${quizNum}`]();
    },

    controlActive: function(quizNum){
        this.quiz1.active = (quizNum == 1);
        this.quiz2.active = (quizNum == 2);
        this.quiz3.active = (quizNum == 3);
    },

    updateQuiz1: function(){
        console.log('updatequiz1');
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
            this.quiz1.children[i].on(cc.Node.EventType.MOUSE_DOWN, function(){
                console.log(i);
                this.popUpEvent(0, i-1, quizContent);
            }, this);
            
        }
        
    },

    updateQuiz2: function(){
        this.controlActive(2);
        //题目内容
        this.quiz2.children[0].getComponent(cc.RichText).string = quizContent[1].content;

        //题目图
        let self = this;
        if(animal == 'dog'){
            this.quiz2.children[1].getComponent(cc.Sprite).spriteFrame = null;
        }else{
            cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz2/picture`, cc.SpriteFrame, function (err, spriteFrame) {
                self.quiz2.children[1].getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        }
        //题目
        for(let i in quizContent[1].write){
            this.quiz2.children[parseInt(i)+2].getComponent(cc.Label).string = quizContent[1].write[i];
        }
        
    },

    updateQuiz3: function(){
        this.controlActive(3);
        //题目内容
        this.quiz3.children[0].getComponent(cc.RichText).string = quizContent[2].content;
        //题目图1-3
        let self = this;
        let ifErr = false;
        //1
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz3/1`, cc.SpriteFrame, function (err, spriteFrame) {
            self.quiz3.children[1].children[0].getComponent(cc.Sprite).spriteFrame = spriteFrame;
            let customSpriteFrame = spriteFrame;
            //2
            cc.loader.loadRes(`images/test/${animal}/set${parseInt(self.setNum) + 1}/quiz3/2`, cc.SpriteFrame, function (err, spriteFrame) {
                if(err){
                    self.quiz3.children[1].children[1].getComponent(cc.Sprite).spriteFrame = customSpriteFrame;
                    // console.log(err);
                    ifErr = true;
                }else{
                    self.quiz3.children[1].children[1].getComponent(cc.Sprite).spriteFrame = spriteFrame;
                }
                //3
                if(!ifErr){
                    cc.loader.loadRes(`images/test/${animal}/set${parseInt(self.setNum) + 1}/quiz3/3`, cc.SpriteFrame, function (err, spriteFrame) {
                        self.quiz3.children[1].children[2].getComponent(cc.Sprite).spriteFrame = spriteFrame
                    });
                }else{
                    console.log('sprite not exist');
                    self.quiz3.children[1].children[2].getComponent(cc.Sprite).spriteFrame = customSpriteFrame;
                }
            });            
        });
        //题目图4-6；拖拽
        let dargNode = this.quiz3.children[2].children;
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(self.setNum) + 1}/quiz3/4`, cc.SpriteFrame, function (err, spriteFrame) {
            dargNode[0].getComponent(cc.Sprite).spriteFrame = spriteFrame
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(self.setNum) + 1}/quiz3/5`, cc.SpriteFrame, function (err, spriteFrame) {
            dargNode[1].getComponent(cc.Sprite).spriteFrame = spriteFrame
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(self.setNum) + 1}/quiz3/6`, cc.SpriteFrame, function (err, spriteFrame) {
            dargNode[2].getComponent(cc.Sprite).spriteFrame = spriteFrame
        });
        this.quiz3Drag(dargNode[0], dargNode[0].position, '4');
        this.quiz3Drag(dargNode[1], dargNode[1].position, '5');
        this.quiz3Drag(dargNode[2], dargNode[2].position, '6');
    },

    quiz2Btn: function(){
        console.log('click quiz2 button');
        let option = [];
        for(let i in this.editBoxArr){
            option.push(this.editBoxArr[i].string);
        }
        this.popUpEvent(1, option);
    },

    quiz3Drag: function(node, oldPosition, nodeID){
        let spritePosition = [];
        for(let i = 0 ; i < 3; i++){
            let spriteNode = this.quiz3.children[1].children[i];
            let spriteRect = new cc.Rect(spriteNode.x-spriteNode.width/2, spriteNode.y-spriteNode.height/2, spriteNode.width, spriteNode.height);
            spritePosition[i] = spriteRect;
        }
        let mouseDown = false;
        //当用户点击的时候记录鼠标点击状态
        node.on(cc.Node.EventType.MOUSE_DOWN, (event)=>{
            mouseDown = true;
        });
        //只有当用户鼠标按下才能拖拽
        node.on(cc.Node.EventType.MOUSE_MOVE, (event)=>{
            if(mouseDown){
                //获取鼠标距离上一次点的信息
                let delta = event.getDelta();
                let minX = -node.parent.width / 2 + node.width / 2;
                let maxX = node.parent.width / 2 - node.width / 2;
                let minY = -node.parent.height / 2 + node.height / 2;
                let maxY = node.parent.height / 2 - node.height / 2;
                let moveX = node.x + delta.x;
                let moveY = node.y + delta.y;
                //控制移动范围
                if(moveX < minX){
                    moveX = minX;
                    mouseDown = false;
                }else if(moveX > maxX){
                    moveX = maxX;
                    mouseDown = false;
                }
                if(moveY < minY){
                    moveY = minY;
                    mouseDown = false;
                }else if(moveY > maxY){
                    moveY = maxY;
                    mouseDown = false;
                }
                node.x = moveX;
                node.y = moveY;
            }
        });
        
        function changePosition(){
            let rightPlace = false;
            for(let i in spritePosition){
                let position = new cc.Vec2(node.x, node.y);
                if(spritePosition[i].contains(position)){ 
                    rightPlace = true;
                    option3[i] = nodeID;
                    break;
                }
            }
            
            mouseDown = false;
            if(!rightPlace){
                node.x = oldPosition.x;
                node.y = oldPosition.y;
                for(let j = 0; j < 3; j++){
                    if(option3[j] == nodeID){
                        option3[j] = undefined;
                    }
                }
            }
        }

        //当鼠标抬起的时候恢复状态
        node.on(cc.Node.EventType.MOUSE_LEAVE, (event)=>{
            if(mouseDown){
                changePosition();
            }
        });
        node.on(cc.Node.EventType.MOUSE_UP, (event)=>{
            changePosition();
            if(option3[0] && option3[1] && option3[2]){
                this.popUpEvent(2, option3);
            }else{
                console.log(option3);
            }
        });
        
    },

    popUpEvent: function(quizNum, option){
        this.popUp.active = true;
        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "testContent";
        clickEventHandler.handler = "hidePopUp";
        clickEventHandler.customEventData = {quizNum, option};
        
        let okBtn = this.popUp.children[1].children[1].getComponent(cc.Button);
        okBtn.clickEvents.push(clickEventHandler);
    },

    //tipPopUp中的文字和事件
    tipPopUpEvent: function(isCorrect, quizNum){
        let tipText;
        if(isCorrect){
            tipText = '恭喜你答对啦';
            answer[quizNum] = true;
            //取消按钮不出现
            this.tipPopUp.children[1].children[2].active = false;
        }else{
            tipText = '很遗憾，答错啦！你可以查看侦探手册后再来作答，或者直接进入下一关，不会再回来了哟~';
            this.tipPopUp.children[1].children[2].active = true;
        }
        this.tipPopUp.children[1].children[0].getComponent(cc.Label).string = tipText;

        let tipEventHandler = new cc.Component.EventHandler();
        tipEventHandler.target = this.node;
        tipEventHandler.component = "testContent";
        tipEventHandler.handler = "nextQuiz";
        tipEventHandler.customEventData = {quizNum};
        
        let nextBtn = this.tipPopUp.children[1].children[1].getComponent(cc.Button);
        nextBtn.clickEvents.push(tipEventHandler);
    },

    nextQuiz(event, customEventData){
        this.tipPopUp.active = false;
        const {quizNum} = customEventData;
        console.log('?', quizNum);
        if(quizNum == 0){
            this.updateQuiz2();
        }else if(quizNum == 1){
            this.updateQuiz3();
        }else{
            if(answer[0] && answer[1] && answer[2]){
                global.saveAnimal[animal] = 1;
            }else{
                global.saveAnimal[animal] = -1;
            }
            this.node.active = false;
            this.selectAnimals.active = true;
        }
    },

    hidePopUp(event, customEventData){
        this.popUp.active = false;
        //确定按钮后的事件
        if(customEventData){
            this.tipPopUp.active = true;
            let {quizNum, option} = customEventData;
            console.log(quizNum, option, quizContent);
            if(option.toString() == quizContent[quizNum].answer.toString()){
                //回答正确
                this.tipPopUpEvent(true, quizNum);
            }else{
                //回答错误
                this.tipPopUpEvent(false, quizNum);
            }
        }
    },
    
    hideTipPopUp(event, customEventData){
        this.tipPopUp.active = false;
    }
    

    // update (dt) {},
});
