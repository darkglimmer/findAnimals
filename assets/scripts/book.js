let global = require('global');

cc.Class({
    extends: cc.Component,

    properties: {
        leftArrow: cc.Node,
        rightArrow: cc.Node,
        welcome: cc.Node,
        selectAnimals: cc.Node,
        bookMark: cc.Node,
        sideBar: cc.Node,
        content: cc.Node,
        line: cc.Prefab,
    },

    onLoad () {
        let sprite = this.node.getComponent(cc.Sprite);
        console.log(global.firstOpen);
        if(global.firstOpen === true){
            cc.loader.loadRes('images/UI/bookCover', cc.SpriteFrame, function (err, spriteFrame) {
                sprite.spriteFrame = spriteFrame;
            });
        }
        this.node.on('clickLeft', function (event) {
            event.stopPropagation();
            this.nextPage(-1);
            
        }, this);
        this.node.on('clickRight', function (event) {
            event.stopPropagation();
            this.nextPage(1);
        }, this);
    },

    start () {},

    //-1：left，1：right
    nextPage: function(direction){
        if(this.ifPageLegal(global.bookPage + direction)){
            this.updatePageImg(global.bookPage, direction);
            global.bookPage += direction;
            this.updatePage();
        }else{
            console.log('不能再往前/后翻了');
        }
    },
    
    ifPageLegal: function(page){
        if(page < 0){
            return false;   
        }
        return true;
    },
    
    
    //是否换背景。bookPage=1, direction=-1 -> 1;bookPage=0, direction=1 -> 1
    updatePageImg: function(page, d){
        let img='book'
        if(page == 1 && d == -1){
            img += 'Cover'
            this.leftArrow.active = false;
        }else if(page == 0 && d == 1){
            img += 'Base'
            this.leftArrow.active = true;
        }else{
            return;
        }
        
        let sprite = this.node.getComponent(cc.Sprite);
        cc.loader.loadRes(`images/UI/${img}`, cc.SpriteFrame, function (err, spriteFrame) {
            sprite.spriteFrame = spriteFrame;
        });
    },

    updatePage: function(){
        console.log(global.bookPage);
        if(global.bookPage == 1){
            this.controlActive(global.bookPage);
        }else{
            this.welcome.active = false;
            if(global.bookPage == 2){
                this.controlActive(global.bookPage);
                this.clickAnimal();
            }else{
                //主要内容
                this.controlActive(global.bookPage);
            }
        }
    },

    controlActive: function(page){
        this.welcome.active = (page == 1);
        this.selectAnimals.active = (page == 2);
        this.bookMark.active = this.sideBar.active = this.content.active = (page >= 3);
    },

    clickAnimal: function(){
        let animals = this.selectAnimals.children;
        for(let i in animals){
            animals[i].on(cc.Node.EventType.MOUSE_DOWN, function(){
                global.bookPage = global.bookContent.findIndex((element)=>{
                    return element == animals[i].name + '-0-0';
                })
                this.updatePage();
            }, this)
        } 
    }


    // update (dt) {},
});
