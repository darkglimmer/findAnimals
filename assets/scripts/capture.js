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
        }
    },
    
    onLoad(){
        this.arr = ["turn cat in the pan","dog watch","an early bird","a willing horse","make a pig's ear"]
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
        var positionX = 130;
        var positionY = i - 30 - i*47;
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
        var a = 0;
        for(var i = 0; i < 5; i++){
            var b = this.arr.indexOf(this.input[i].getComponent(cc.EditBox).string)
            if(b != -1){
                var result = cc.instantiate(this.prefab[b]);
                this.node.addChild(result);
                result.setPosition(this.getResultPosition(i));
                this.arr.splice(b,1)
                this.prefab.splice(b,1)
                this.input[i].active = false
            }
            else{
                this.input[i].getComponent(cc.EditBox).string = ""
                a++;
                global.score--;
            }
        }
        if(global.score <= 0){
            cc.director.loadScene("ending");
        }
        if(this.arr.length == 0){
            for(var i = 0; i < 5; i++){
                this.figure[i].active = true
            }
        }        
        this.showStar()
    }
});