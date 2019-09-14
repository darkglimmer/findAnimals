cc.Class({
    extends: cc.Component,

    properties: {
        button: {
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
        this.readme.active = 0
    },

    start () {

    },


    showReadme: function (event) {
        this.readme.active = 1;
        if (this.readme.active) {
            this.mask.on('touchstart', emptyFunc, this);
        } else {
            this.mask.off('touchstart', emptyFunc, this);
        }
    }
});
