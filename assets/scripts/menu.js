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
        },
    },

    onLoad () {
        this.readme.active = false
        this.BtnClose.node.active = false
    },

    start () {

    },


    showReadme: function (event) {
        this.readme.active = true;
        this.BtnClose.node.active = true
        if (this.readme.active) {
            this.mask.on('touchstart', emptyFunc, this);
        } else {
            this.mask.off('touchstart', emptyFunc, this);
        }
    },

    closeReadme: function (event) {
        this.readme.active = false;
        this.BtnClose.node.active = false;
        if (this.readme.active) {
            this.mask.on('touchstart', emptyFunc, this);
        } else {
            this.mask.off('touchstart', emptyFunc, this);
        }
    }
});
