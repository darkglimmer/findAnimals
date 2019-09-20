//加载组件作为type
var Story = require('story');
var global = require('global')
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
        if(global.process == 15){
            this.changeScene('test');
        }
        let self = this;
        let change2prop = ['FGLeft', 'FGRight', 'BGImage', 'otherImg'];
        this.node.on('onclick', function (event) {
            event.stopPropagation();
            const change = self.Story.change;
            
            if(change){
                for(let i in change){
                    if(i == 4){
                        this.changeScene(change[4])
                    }else{
                        this.changeFGImg('zt', change[i], change2prop[i]);
                    }
                }
            }else{
                console.log('change is undefined');
            }
        }, this);
    },

    changeFGImg: function(imgName, change, prop){
        switch (change){
            case 'normal': {
                imgName += 'Normal';
                break;
            }
            case 'smile': {
                imgName += 'Smile';
                break;
            }
        }
        let self = this;
        cc.loader.loadRes(`images/character/${imgName}`, cc.SpriteFrame, function (err, spriteFrame) {
            self[`${prop}`].spriteFrame = spriteFrame;
        });
    },

    changeScene: function(scene){
        if(scene){
            cc.director.loadScene(scene);
        }
    }
});
