cc.Class({
    extends: cc.Component,
    properties: {
    },

    onLoad: function () {
        this.node.on('click', this.callback, this);
    },

    callback: function () {
        this.node.addChild(book);
    }
});