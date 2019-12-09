// var global = require('global');

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // cc.game.removePersistRootNode(global.persistnode)
    },
    
    toTest(){
        cc.director.loadScene('test');
    },
    
    toQRcode(){
        cc.director.loadScene('qrcode');
    }

});
