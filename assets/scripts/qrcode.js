var global = require('global');
cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad () {},
    
    again(){
        global.process = 0
        global.id = 0
        global.quiz = 0
        global.collection = {}
        global.firstOpen = true
        global.firstClose = true
        global.bookPage = 0
        global.animalScore = 0
        global.saveAnimal = {
            'cat': 0,
            'dog': 0,
            'horse': 0,
            'bird': 0,
            'pig': 0
        }
        global.testResult = {
            'cat': [true, true, true],
            'dog': [true, true, true],
            'horse': [true, true, true],
            'bird': [true, true, true],
            'pig': [true, true, true]
        }
        global.testResultArr = []
        global.saveResult = true;
        cc.director.loadScene("cover")
    },
    closeWindow(){
        window.close();
    }

});
