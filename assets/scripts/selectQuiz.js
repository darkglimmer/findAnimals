var global = require('global');
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log(global.animal);
        
    },

    start () {

    },

    // update (dt) {},
});
