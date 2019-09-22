
cc.Class({
    extends: cc.Component,

    properties: {
        star1: {
            default: null,
            type: cc.Prefab
        },
        star2: {
            default: null,
            type: cc.Prefab
        },
        star3: {
            default: null,
            type: cc.Prefab
        },
        score: 15,
        input:{
            default:[],
            type:cc.EditBox
        }
    },
    
    onLoad(){
        this.spawnNewStar();
    },

    spawnNewStar () {
        for(var i = this.score; i > 0; i = i-3){
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
        var positionX = (-i) * 20;
        var positionY = 235;
        return cc.v2(positionX, positionY);
    },

    save(){
        let loginname = this.input[0].string
        console.log(loginname)
    }
});