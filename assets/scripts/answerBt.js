let global = require('global');

cc.Class({
    extends: cc.Component,

    properties: {
        button:{
            default: [],
            type: cc.Node
        }
    },

    onLoad(){
        const {testResult} = global;
        let testResultArr = []
        for(var i = 0; i < 3; i++){
            testResultArr = testResultArr.concat(testResult.cat[i] ? 1 : 0)
        }for(var i = 0; i < 3; i++){
            testResultArr = testResultArr.concat(testResult.dog[i] ? 1 : 0)
        }for(var i = 0; i < 3; i++){
            testResultArr = testResultArr.concat(testResult.horse[i] ? 1 : 0)
        }for(var i = 0; i < 3; i++){
            testResultArr = testResultArr.concat(testResult.bird[i] ? 1 : 0)
        }for(var i = 0; i < 3; i++){
            testResultArr = testResultArr.concat(testResult.pig[i] ? 1 : 0)
        }
        for(var i = 0; i < 15; i++){
            if(testResultArr[i]){
                this.button[i].active = true
            }else{
                this.button[i + 15].active = true
            }
        }
    },
})