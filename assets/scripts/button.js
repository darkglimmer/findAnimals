
cc.Class({
    extends: cc.Component,
    properties: {
        book:{
            default: null,
            type: cc.Node
        },
    },

    onLoad: function () {
        console.log(this.book)
        this.node.on('click', this.callback, this);
    },

    callback: function () {
        
    }
});