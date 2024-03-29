
var plot = require("plot");
var global = require("global")

cc.Class({
    extends: cc.Component,

    properties: {
        richTextInfo: cc.RichText,
        change: [],
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
        this.change = plot.control[global.process];
        this.ifPop = plot.popControl[global.process];
        this.node.dispatchEvent(new cc.Event.EventCustom('onclick', true));
        this.nextText();
    },
    
    nextText: function() {
        if(this.change && this.change[4]){
            return ;
        }
        let textArr = plot.story[global.process++].split('@');
        
        // if(this.leftActive === true){
        //     this.changeName(this.LNameLabel, this.RNameLabel, textArr[0]);
        // } else {
        //     this.changeName(this.RNameLabel, this.LNameLabel, textArr[0]);
        // }
        if(textArr[0] == '甄探'){
            this.LName.active = true;
            this.RName.active = false;
            this.LNameLabel.string = textArr[0];
        }else if(textArr[0] != ''){
            this.LName.active = false;
            this.RName.active = true;
            this.RNameLabel.string = textArr[0];
        }
    
        this.richTextInfo.string = textArr[1];
    },
    
    // changeName: function(label, newLabel, str){
    
    //     if(label.string == ''){
    //         label.string = str;
    //         return;
    //     }else if(label.string !== str && str != ''){
    //         this.leftActive = !this.leftActive;
    //         this.LName.active = !this.LName.active;
    //         this.RName.active = !this.RName.active;
    //         newLabel.string = str;
    //     }
    // }
    

});
