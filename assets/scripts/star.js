cc.Class({
    extends: cc.Component,

    properties: {
        score: 1,
        // starPrefab: {
        //     default: null,
        //     type: cc.Prefab
        // },
    },

    onLoad () {
        for(var i = 0; i < this.score; i++){
            var self = this;
            cc.loader.loadRes('images/star.png', cc.SpriteFrame,function(err,spriteFrame){
            //创建一个新的节点，因为cc.Sprite是组件不能直接挂载到节点上，只能添加到为节点的一个组件  
                var newStar = new cc.Node('newStar')  
                //调用新建的node的addComponent函数，会返回一个sprite的对象  
                const sprite = newStar.addComponent(cc.Sprite)  
                //给sprite的spriteFrame属性 赋值  
                sprite.spriteFrame=spriteFrame
                //把新的节点追加到self.node节点去。self.node，就是脚本挂载的节点  
                self.node.addChild(newStar)  
                newStar.setPosition(this.getNewStarPosition(i));
            })
        }
    },
    getNewStarPosition (i) {
        var positionX = (i+1) * 50;
        var positionY = 50;
        return cc.v2(positionX, positionY);
    },
})