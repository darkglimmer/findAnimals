var global = require('global')

cc.Class({
    extends: cc.Component,

    properties: {
        star: {
            default: [],
            type: cc.Node
        },
        figure:{
            default: [],
            type: cc.Node
        },
        input:{
            default:[],
            type:cc.Node
        },
        arr: [],
        prefab:{
            default:[],
            type: cc.Prefab
        },
        new:cc.Node,
        result:{
            default:[],
            type:cc.Node
        },
        e: 0,
        redCircle:{
            default: [],
            type: cc.Node
        },
        popUp:cc.Node,
        mask:cc.Node,
        error: cc.Node,
        right: cc.Node
    },
    
    onLoad(){
        this.arr = ["a cat in the pan","dog watch","an early bird","a willing horse","make a pig's ear"]
        this.showStar()
    },

    getResultPosition: function(i){
        var positionX = 208;
        var positionY = 90 - i*75;
        return cc.v2(positionX, positionY);
    },

    showStar(){
        for(var i = 0; i < global.score; i++){
            this.star[i].active = true
        }
        for(var i = global.score; i < 5; i++){
            this.star[i].active = false
        }
    },

    save(){
        var a = 0
        for(var i = 0; i < 5; i++){
            var str = this.input[i].getComponent(cc.EditBox).string;
            str=str.replace(/^\s+|\s+$/g,'');
            var b = this.arr.indexOf(str)
            if(b != -1){
                this.result[this.e] = cc.instantiate(this.prefab[b]);
                this.node.addChild(this.result[this.e]);
                this.result[this.e].setPosition(this.getResultPosition(i));
                this.arr.splice(b,1)
                this.prefab.splice(b,1)
                this.input[i].active = false
                this.e++
            }
            else{
                this.input[i].getComponent(cc.EditBox).string = ""
                a++;
            }
        }
        if(this.arr.length != 0){
            global.score--;
            this.error.active = true
        }   
        if(global.score <= 0){
            cc.director.loadScene("ending");
        }
        if(this.arr.length == 0){
            this.right.active = true
        }  

        this.showStar()
    },
    correct(){
        if(global.id == 3){
            global.changeMusic = true;
            global.music = 'captureSuccess'
            cc.director.loadScene("ending")
        }else{
            global.changeMusic = true;
            global.music = 'captureFailed'
            global.score = 0
            cc.director.loadScene("ending")
        }
    },
    cancel(){
        this.redCircle[global.id].active = false;
        this.popUp.active = false
        this.mask.active = false
    },
    closeErr(){
        this.error.active = false
    },
    closeRight(){
        this.right.active = false
        this.new.active = false
        for(var i = 0; i < 5; i++){
            this.result[i].active = false
            this.figure[i].active = true
        }
    }
});