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
        e: 0
    },
    
    onLoad(){
        this.arr = ["a cat in the pan","dog watch","an early bird","a willing horse","make a pig's ear"]
        // this.spawnNewStar();
        this.showStar()
    },

    spawnNewStar () {
        for(var i = global.score; i > 0; i = i-3){
            if( i >= 3){
                var newStar = cc.instantiate(this.star1);
            }else if(i == 2){
                var newStar = cc.instantiate(this.star2);
                this.node.addChild(newStar);
                // 为星星设置一个随机位置
                newStar.setPosition(this.getNewStarPosition(i));
                break;
            }else{
                var newStar = cc.instantiate(this.star3);
                this.node.addChild(newStar);
                // 为星星设置一个随机位置
                newStar.setPosition(this.getNewStarPosition(i));
                break;
            }
            // 将新增的节点添加到 Canvas 节点下面
            this.node.addChild(newStar);
            // 为星星设置一个随机位置
            newStar.setPosition(this.getNewStarPosition(i));
        }
    },

    getNewStarPosition: function(i) {
        var positionX = (i-5) * 50;
        var positionY = 235;
        return cc.v2(positionX, positionY);
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
            var b = this.arr.indexOf(this.input[i].getComponent(cc.EditBox).string)
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
        if(global.score <= 0){
            cc.director.loadScene("ending");
        }
        if(this.arr.length == 0){
            this.new.active = false
            for(var i = 0; i < 5; i++){
                this.result[i].active = false
                this.figure[i].active = true
            }
        }  
        if(this.arr.length != 0){
            global.score--;
        }   
        this.showStar()
    }
});