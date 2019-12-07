var global = require('global');
var quiz1 = require('quiz');
var quiz2 = require('quiz2');

let animal = global.animal;
let quizContent;

let option3 = [];
//是否答对
let firstRight = [true, true, true];
let firstLoad = true;
let dragPosition;
let connectPosition = [
    [[200, 200], [200, 400]],
    [[400, 200], [400, 400]],
    [[600, 200], [600, 400]]
]

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
        dragNode: {
            default: [],
            type: cc.Node
        },
        line: cc.Graphics,
        soundsArr: {
            default: [],
            type: cc.AudioClip
        },
        soundsNode: {
            default: [],
            type: cc.Node
        },
        star1: cc.Prefab,
        star2: cc.Prefab,
        star3: cc.Prefab,
        rightSound: {
            default: null,
            type: cc.AudioClip
        },
        wrongSound: {
            default: null,
            type: cc.AudioClip
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //第几套
        cc.audioEngine.stopAll();
        this.setNum = Math.round(Math.random());
        console.log('题目',this.setNum);
        
        const {dragNode} = this;
        dragPosition = [dragNode[0].position, dragNode[1].position, dragNode[2].position];
        this.updateContent();

    },

    onEnable(){
        if(!firstLoad){
            this.updateContent();
            //清空题2、题3
            for(let i in this.editBoxArr){
                this.editBoxArr[i].string = '';
            }
            for(let i in dragPosition){
                this.dragNode[i].x = dragPosition[i].x;
                this.dragNode[i].y = dragPosition[i].y;
            }
            option3 = [];
            firstRight = [true, true, true];
        }
    },
    
    start(){
        firstLoad = false;
    },

    updateContent(){
        animal = global.animal;
        // animal = 'dog';
        console.log(animal);
        let self = this;
        cc.loader.loadRes(`images/test/${animal}`, cc.SpriteFrame, function (err, spriteFrame) {
            self.border.spriteFrame = spriteFrame;
        });
        quizContent = this.setNum == 0 ? quiz1.questiones[`${animal}`] : quiz2.questiones[`${animal}`];
        this.updateQuiz1();
    },

    controlActive: function(quizNum){
        this.quiz1.active = (quizNum == 1);
        this.quiz2.active = (quizNum == 2);
        this.quiz3.active = (quizNum == 3);
    },

    spawnNewStar () {
        this.star.removeAllChildren();
        console.log(global.animalScore);
        let completeStarNum = Math.floor(global.animalScore / 3);
        let restStarNum = global.animalScore % 3;
        let i;
        for(i = 0; i < completeStarNum; i++){
            let newStar = cc.instantiate(this.star1);
            this.star.addChild(newStar);
            newStar.setPosition(this.getNewStarPosition(i));
        }
        let newStar;
        if(restStarNum){
            if(restStarNum == 1){
                newStar = cc.instantiate(this.star3);
            }else{
                newStar = cc.instantiate(this.star2);
            }
            this.star.addChild(newStar);
            newStar.setPosition(this.getNewStarPosition(i));
        }
    },

    getNewStarPosition: function(i) {
        var positionX = -75 + i*50;
        var positionY = -10;
        return cc.v2(positionX, positionY);
    },

    updateQuiz1: function(){
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
            self.quiz1.children[2].getComponent(cc.Button).normalSprite = spriteFrame;
            self.quiz1.children[2].getComponent(cc.Button).pressedSprite = spriteFrame;
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz1/1hover`, cc.SpriteFrame, function (err, spriteFrame) {
            self.quiz1.children[2].getComponent(cc.Button).hoverSprite = spriteFrame;
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz1/2`, cc.SpriteFrame, function (err, spriteFrame) {
            self.quiz1.children[3].getComponent(cc.Button).normalSprite = spriteFrame;
            self.quiz1.children[3].getComponent(cc.Button).pressedSprite = spriteFrame;
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz1/2hover`, cc.SpriteFrame, function (err, spriteFrame) {
            self.quiz1.children[3].getComponent(cc.Button).hoverSprite = spriteFrame;
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz1/3`, cc.SpriteFrame, function (err, spriteFrame) {
            self.quiz1.children[4].getComponent(cc.Button).normalSprite = spriteFrame;
            self.quiz1.children[4].getComponent(cc.Button).pressedSprite = spriteFrame;
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz1/3hover`, cc.SpriteFrame, function (err, spriteFrame) {
            self.quiz1.children[4].getComponent(cc.Button).hoverSprite = spriteFrame;
        });
        for(let i = 2; i <= 4; i++){
            this.quiz1.children[i].on(cc.Node.EventType.MOUSE_DOWN, function(){
                this.popUpEvent(0, i-1);
            }, this);
        }  
    },

    updateQuiz2: function(){
        this.controlActive(2);
        //题目内容
        this.quiz2.children[0].getComponent(cc.RichText).string = quizContent[1].content;

        //题目图
        let self = this;
        // if(animal == 'dog'){
        //     this.quiz2.children[1].getComponent(cc.Sprite).spriteFrame = null;
        // }else{
            cc.loader.loadRes(`images/test/${animal}/set${parseInt(this.setNum) + 1}/quiz2/picture`, cc.SpriteFrame, function (err, spriteFrame) {
                self.quiz2.children[1].getComponent(cc.Sprite).spriteFrame = spriteFrame;
            });
        // }
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
        const {dragNode} = this;
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(self.setNum) + 1}/quiz3/4`, cc.SpriteFrame, function (err, spriteFrame) {
            dragNode[0].getComponent(cc.Button).normalSprite = spriteFrame;
            dragNode[0].getComponent(cc.Button).pressedSprite = spriteFrame
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(self.setNum) + 1}/quiz3/4hover`, cc.SpriteFrame, function (err, spriteFrame) {
            dragNode[0].getComponent(cc.Button).hoverSprite = spriteFrame;
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(self.setNum) + 1}/quiz3/5`, cc.SpriteFrame, function (err, spriteFrame) {
            dragNode[1].getComponent(cc.Button).normalSprite = spriteFrame;
            dragNode[1].getComponent(cc.Button).pressedSprite = spriteFrame
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(self.setNum) + 1}/quiz3/5hover`, cc.SpriteFrame, function (err, spriteFrame) {
            dragNode[1].getComponent(cc.Button).hoverSprite = spriteFrame;
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(self.setNum) + 1}/quiz3/6`, cc.SpriteFrame, function (err, spriteFrame) {
            dragNode[2].getComponent(cc.Button).normalSprite = spriteFrame;
            dragNode[2].getComponent(cc.Button).pressedSprite = spriteFrame
        });
        cc.loader.loadRes(`images/test/${animal}/set${parseInt(self.setNum) + 1}/quiz3/6hover`, cc.SpriteFrame, function (err, spriteFrame) {
            dragNode[2].getComponent(cc.Button).hoverSprite = spriteFrame;
        });
        // this.quiz3Drag(dragNode[0], dragPosition[0], '4');
        // this.quiz3Drag(dragNode[1], dragPosition[1], '5');
        // this.quiz3Drag(dragNode[2], dragPosition[2], '6');


        //喇叭声音资源改变
        for(let i = 0; i < 3; i++){
            cc.loader.loadRes(`sounds/${animal}/${quizContent[2].sound[i]}`, cc.AudioClip, function (err, audioClip) {
                // console.log(audioClip);
                self.soundsArr[i] = audioClip;
            });
            this.soundsNode[i].on(cc.Node.EventType.MOUSE_DOWN, function(){
                cc.audioEngine.playMusic(this.soundsArr[i], false);
            }, this);
            // let quizSoundEventHandler = new cc.Component.EventHandler();
            // quizSoundEventHandler.target = this.node;
            // quizSoundEventHandler.component = "testContent"
            // quizSoundEventHandler.handler = "loadSound";
            // quizSoundEventHandler.customEventData = {  };
    
            // let speakerBtn = this.soundsNode[i].getComponent(cc.Button);
            // speakerBtn.clickEvents = [quizSoundEventHandler];
        }
        this.connect();
    },

    connect: function(){
        for(let i = 0; i < 3; i++){
            let spriteNode = this.quiz3.children[1].children[i];
            let mouseDown =false;
            spriteNode.on(cc.Node.EventType.MOUSE_DOWN, (event)=>{
                mouseDown = true;
            });
            spriteNode.on(cc.Node.EventType.MOUSE_MOVE, (event) =>{
                if(mouseDown){
                    let x = connectPosition[i][0][0];
                    let y = connectPosition[i][0][1];
                    console.log([x, y]);
                    let line = this.line;
                    line.moveTo(x, y);
                    // let delta = event.getDelta();
                    let position = cc.Event.EventMouse.getLocation();
                    line.lineTo(position.x, position.y);
                    line.fillColor = cc.Color.RED;
    
                    line.stroke();
                    line.fill();
                }
            }, this);
        }
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
            let spriteRect = new cc.Rect(spriteNode.x-80, spriteNode.y-80, 130, 130);
            spritePosition[i] = spriteRect;
            console.log(spriteRect);
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
            // if(mouseDown){
            //     changePosition();
            // }
            mouseDown = false;
        });
        node.on(cc.Node.EventType.MOUSE_UP, (event)=>{
            mouseDown = false;
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
        console.log('in popupevent', quizNum);

        let okBtn = this.popUp.children[1].children[1].getComponent(cc.Button);
        okBtn.clickEvents = [clickEventHandler];
    },

    //tipPopUp中的文字和事件
    tipPopUpEvent: function(isCorrect, quizNum){
        console.log('in tippopupevent', quizNum);
        let tipText;
        if(isCorrect){
            tipText = '恭喜你答对啦';
            //取消按钮不出现
            this.tipPopUp.children[1].children[1].children[1].active = false;
        }else{
            tipText = '很遗憾，答错啦！你可以查看侦探手册后再来作答，或者直接进入下一关，不会再回来了哟~';
            this.tipPopUp.children[1].children[1].children[1].active = true;
            global.testResult[animal][quizNum] = false;
            console.log(global.testResult);
        }
        this.tipPopUp.children[1].children[0].getComponent(cc.Label).string = tipText;

        let tipEventHandler = new cc.Component.EventHandler();
        tipEventHandler.target = this.node;
        tipEventHandler.component = "testContent";
        tipEventHandler.handler = "nextQuiz";
        tipEventHandler.customEventData = {quizNum};
        
        let nextBtn = this.tipPopUp.children[1].children[1].children[0].getComponent(cc.Button);
        // console.log(nextBtn.clickEvents);
        nextBtn.clickEvents = [tipEventHandler];
    },

    nextQuiz(event, customEventData){
        this.tipPopUp.active = false;
        const {quizNum} = customEventData;
        console.log('in nextQuiz', quizNum);
        if(quizNum == 0){
            this.updateQuiz2();
        }else if(quizNum == 1){
            this.updateQuiz3();
        }else{
            const answer = global.testResult[animal];
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
            console.log('in hidepopup', quizNum, option, quizContent);
            if(option.toString() == quizContent[quizNum].answer.toString()){
                //回答正确
                this.tipPopUpEvent(true, quizNum);
                if(firstRight[quizNum]){
                    global.animalScore++;
                    this.spawnNewStar();
                }
                cc.audioEngine.playEffect(this.rightSound, false);
            }else{
                //回答错误
                this.tipPopUpEvent(false, quizNum);
                firstRight[quizNum] = false;
                cc.audioEngine.playEffect(this.wrongSound, false);
            }
        }
    },
    
    hideTipPopUp(event, customEventData){
        this.tipPopUp.active = false;
    }
    

    // update (dt) {},
});
