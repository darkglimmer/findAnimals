cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },
    
    toTest(){
        cc.director.loadScene('test');
    },
    
    toQRcode(){
        cc.director.loadScene('qrcode');
    }

});
