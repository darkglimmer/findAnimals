var global = require('global');
cc.Class({
    extends: cc.Component,

    properties: {
        BtnClose: {
            default: null,
            type: cc.Button
        },
        BtnInfo:{
            default: null,
            type: cc.Button
        },
        readme: {
            default: null,
            type: cc.Node
        },
        mask: {
            default: null,
            type: cc.Node
        }
    },

    onLoad () {
        this.readme.active = false
        this.BtnClose.node.active = false
    },

    showReadme: function (event) {
        this.readme.active = true;
        this.BtnClose.node.active = true
        if (this.readme.active) {
            this.mask.on('touchstart', ()=>{}, this);
        } else {
            this.mask.off('touchstart', ()=>{}, this);
        }
    },

    closeReadme: function (event) {
        this.readme.active = false;
        this.BtnClose.node.active = false;
        if(global.firstClose){
            cc.director.loadScene("test");
            global.firstClose = false;
        }
        if (this.readme.active) {
            this.mask.on('touchstart', ()=>{}, this);
        } else {
            this.mask.off('touchstart', ()=>{}, this);
        }
    }
});
