//加载组件作为type
var Story = require('story');
var global = require('global');
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
        FGRight:{
            default: null,
            type: cc.Sprite
        },
        BGImage:{
            default: null,
            type: cc.Node
        },
        Story:{
            default: null,
            type: Story
        },
        button:{
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.button.active = false;
        if(global.process == 15){
            // cc.director.loadScene("test");
        }
        let self = this;
        let change2prop = ['FGLeft', 'FGRight', 'BGImage', 'otherImg'];
        let prefix = ['zt', 'ncz', 'bg', 'img']
        this.node.on('onclick', function (event) {
            event.stopPropagation();
            const change = self.Story.change;
            if(global.process == 14){
                self.button.active = true;
            }
            if(change){
                for(let i in change){
                    if(i == 4){
                        // cc.director.loadScene(change[4]);
                    }else{
                        this.changeFGImg(prefix[i], change[i], change2prop[i]);
                    }
                }
            }else{
                console.log('change is undefined');
            }
        }, this);
        
    },

    changeFGImg: function(imgName, change, prop){
        imgName += change;
        let self = this;
        cc.loader.loadRes(`images/character/${imgName}`, cc.SpriteFrame, function (err, spriteFrame) {
            self[`${prop}`].spriteFrame = spriteFrame;
        });
    },

    changeScene: function(scene){
    }
});
