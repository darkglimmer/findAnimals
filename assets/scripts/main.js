var Story = require('story');
cc.Class({
    extends: cc.Component,

    properties: {
        FGLeft:{
            default: null,
            type: cc.Sprite
        },
        star: {
            default: null,
            type: cc.Prefab
        },
        score: 2,
        FGRight:{
            default: null,
            type: cc.Node
        },
        BGImage:{
            default: null,
            type: cc.Node
        },
        Story:{
            default: null,
            type: Story
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // var self = this;
        // cc.loader.loadRes("images/zt1", cc.SpriteFrame, function (err, spriteFrame) {
        //     self.FGLeft.spriteFrame = spriteFrame;
        // });
        // this.node.on('onclick', function (event) {
        //     event.stopPropagation();
        //     const change = self.Story.change;
        //     console.log(change);
        //     if(change){
        //         let url = 'zt'
        //         switch (change[0]){
        //             case 'normal': {
        //                 url += '1';
        //                 break;
        //             }
        //             case 'smile': {
        //                 url += '2';
        //                 break;
        //             }
        //         }
        //         cc.loader.loadRes(`images/${url}`, cc.SpriteFrame, function (err, spriteFrame) {
        //             self.FGLeft.spriteFrame = spriteFrame;
        //         });
        //     }else{
        //         console.log('change is undefined');
        //     }
        // });
        this.spawnNewStar();
    },
    spawnNewStar () {
        for(var i = 0; i < this.score; i++){
            var newStar = cc.instantiate(this.star);
            // 将新增的节点添加到 Canvas 节点下面
            this.node.addChild(newStar);
            // 为星星设置一个随机位置
            newStar.setPosition(this.getNewStarPosition(i));
        }
    },
    getNewStarPosition : function(i) {
        var positionX = (i-3.5) * 100;
        var positionY = 250;
        return cc.v2(positionX, positionY);
    },
});
