
var plot = require("plot");

cc.Class({
    extends: cc.Component,

    properties: {
        plotNum: 0,
        richTextInfo: cc.RichText,
        changeImg: [],
        ifPop: [],
        readme:{
            default: null,
            type: cc.Node
        },
        LName: cc.Node,
        RName: cc.Node,
        LNameLabel: cc.Label,
        RNameLabel: cc.Label,
        leftActive: true,
    },

    //构造函数
    ctor() {
        
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.RName.active = false;
        this.nextText();
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onClick, this);
    },

    // update (dt) {},

    onClick: function() {
        this.changeImg = plot.imgControl[this.plotNum];
        this.ifPop = plot.popControl[this.plotNum];
        if(this.readme.active === false){
            this.node.dispatchEvent(new cc.Event.EventCustom('onclick', true));
            this.nextText();
        }
    },
    
    nextText: function() {
        let textArr = plot.story[this.plotNum++].split('@');
        
        if(this.leftActive === true ){
            this.changeName(this.LNameLabel, this.RNameLabel, textArr[0]);
        } else {
            this.changeName(this.RNameLabel, this.LNameLabel, textArr[0]);
        }
    
        this.richTextInfo.string = textArr[1];
    },
    
    changeName: function(label, newLabel, str){
        if(label.string == ''){
            label.string = str;
            return;
        }
        if(label.string !== str){
            if(str === "甄探" ^ this.leftActive){
                this.leftActive = !this.leftActive;
                this.LName.active = !this.LName.active;
                this.RName.active = !this.RName.active;
                newLabel.string = str;
            } else {
                label.string = str;
            }
        }
    }
    

});
