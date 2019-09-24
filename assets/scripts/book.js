let global = require('global');
let animal2page = {
    'cat': 0,
    'dog': 1,
    'horse': 2,
    'bird': 3,
    'pig': 4
}
let bookmarkOn = false;
let sidebarOn = false;
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
        title: cc.Node,
        compare: cc.Node,
        meaning: cc.Node,
        example: cc.Node,
        similar: cc.Node,
        video: cc.Node
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

    updatePage: function(flag = true){
        let page = global.bookPage;
        console.log(page);
        
        if(page == 1){
            this.controlActive(page);
        }else{
            this.welcome.active = false;
            if(page == 2){
                this.controlActive(page);
                this.clickAnimal();
            }else{
                let content = global.bookContent[page].split('-');
                let animal = content[0];
                let word = content[1];
                let slangPage = content[2];
                if(word == 0){
                    //word==0 中外对比 title不出现 compare出现
                    this.controlActive(page, false);
                    this.compare.getComponent(cc.Label).string = wordContent[animal2page[animal]].compare
                    
                }else{
                    let slang = wordContent[animal2page[animal]].slangs[word-1];
                    if(slangPage == 0){
                        this.controlActive(page, true, true);
                        this.title.children[0].getComponent(cc.Label).string = slang.title;
                        this.meaning.children[1].getComponent(cc.Label).string = slang.meaning;
                        //生成例句
                        let sentence2;
                        if(slang.example.length == 1){
                            sentence2 = false
                        }else{
                            sentence2 = true;
                        }
                        this.example.children[1].children[1].active = sentence2
                        for(let i in slang.example){
                            this.example.children[1].children[i].getComponent(cc.Label).string = slang.example[i];
                        }
                        this.similar.children[1].getComponent(cc.Label).string = slang.similar;
                    }else{
                        this.controlActive(page, true, false);
                    }
                

                }
                //给书签和侧边栏注册事件，更新侧边栏
                if(!bookmarkOn){
                    this.clickBookMark();
                    bookmarkOn = true;
                }
                if(flag){
                    this.updateSideBar();
                }

            }
        }
    },

    controlActive: function(page, isWordPage = false, isFirstPage){
        this.welcome.active = (page == 1);
        this.selectAnimals.active = (page == 2);
        this.bookMark.active = this.sideBar.active = this.content.active = (page >= 3);
        
        this.title.active = this.meaning.active = this.example.active = this.similar.active = isWordPage && isFirstPage;
        this.video.active = isWordPage && (!isFirstPage);
        this.compare.active = !isWordPage;
        
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
    },

    clickBookMark: function(){
        let marks = this.bookMark.children;
        for(let i in marks){
            marks[i].on(cc.Node.EventType.MOUSE_DOWN, function(){
                global.bookPage = global.bookContent.findIndex((element)=>{
                    return element == marks[i].name + '-0-0';
                })
                this.updatePage();
            }, this)
        }
    },

    updateSideBar: function(){
        let sides = this.sideBar.children;
        let animal = global.bookContent[global.bookPage].split('-')[0];
        for(let i in sides){
            sides[i].on(cc.Node.EventType.MOUSE_DOWN, function(){
                global.bookPage = global.bookContent.findIndex((element)=>{
                    return element == animal + '-' + i +'-0';
                })
                this.updatePage(false);
            }, this)
            if(i != 0){
                sides[i].children[0].getComponent(cc.Label).string = wordContent[animal2page[animal]].slangs[i-1].title;
            }
        }
    },

    


    // update (dt) {},
});


//侦探手册的具体内容
var wordContent = [
    {
        animal: 'cat',
        compare: '猫在中国人眼中温顺可爱，中国人喜欢猫，而在西方文化中，猫是魔鬼“撒旦”的化身，是中世纪巫婆的守护神。尤其是黑猫让西方人深恶痛绝。Cat在英语中谕指“可鄙的女人”、“恶妇”。',
        slangs: [{
            title: 'Let the cat out of the bag',
            meaning: '泄露秘密；真相大白',
            example: [
                'We tried to keep the party a surprise for my mother but my sister let the cat out of the bag.@我们原打算给妈妈办一个惊喜派对,但我妹妹泄露了秘密。',
                'Bob didn\'t want anyone to know he was sick, but his wife let the cat out of the bag.@鲍勃不想让任何人知道他生病了，但是他的妻子说漏了嘴。'
            ],
            similar:'betray a secret；put it on the street; tell tales',
        },
        {
            title: 'A cat in the pan',
            meaning: '叛徒；背叛者',
            example: [
                'He was a cat in the pan.@他是个叛徒。',
                'He told our secrets to teachers, a cat in the pan!@他把我们的秘密告诉老师了，这个叛徒！'
            ],
            similar:'traitor; renegade; turncoat',
        },
        {
            title: 'A cat may look at a king',
            meaning: '人人平等；最低级的人也有权利',
            example: [
                'A cat may look at a king, but for you to tell your boss that he is cruel seems hard.@人人平等是没错啦，不过跟你老板说他很残忍似乎很难。'
            ],
            similar:'Everyone is equal; All men are equal',
        },
        {
            title: 'Bell the cat',
            meaning: '挺身而出；主动冒险；为他人利益冒险',
            example: [
                'It\'s quite difficult to get a man who can bell the cat.@很难找到危险时刻能够挺身而出的人了。'
            ],
            similar:'throw oneself into the breach; come out boldly',
        },
        {
            title: 'Cat on a hot tin roof',
            meaning: '十分焦虑；热锅上的蚂蚁',
            example: [
                'Failing to find her homework, Jill is just like a cat on a hot tin roof.@吉尔的作业找不到了，急得像热锅上的蚂蚁。',
                'She\'s like a cat on a hot tin roof, waiting for the test result.@她等待着考试成绩，焦虑的像热锅上的蚂蚁。'
            ],
            similar:'ants on a hot pan; ants in one\’s pants',
        }]
    },
    {
        animal: 'dog',
        compare: '在中国，狗不能像牛马一样拉车耕地，只能看家护院。所以，狗的贬义词居多。在西方国家“狗”不但是宠物，还是人类的好朋友。正因为外国人对狗的偏爱，因此在英语中“dog”大多是褒义词，也常常与人有关。',
        slangs: [{
            title: 'Dog watch',
            meaning: '夜班',
            example: [
                'Does anyone have dog watch tonight?@今晚有人值夜班么？'
            ],
            similar:'night shift',
        },
        {
            title: 'Let sleeping dogs lie',
            meaning: '过去的事情就不要再提了；别惹麻烦',
            example: [
                'There\'s absolutely no point pursuing this issue. We should just let sleeping dogs lie.@在这个问题上深究没有意义，我们就不要自找麻烦了。',
                'Why can\'t she let sleeping dogs lie?@为什么她就不能不多事？'
            ],
            similar:'Don’t ask for trouble; try not to shoot oneself in the foot',
        },
        {
            title: 'Rain cats and dogs',
            meaning: '倾盆大雨',
            example: [
                'In the middle of the picnic it started to rain cats and dogs, and everybody got soaked.@野餐进行中，突然大雨倾盆，每个人身上都湿透了。'
            ],
            similar:'heavy rain',
        },
        {
            title: 'Every dog has its day',
            meaning: '人皆有得意之时；时来运转',
            example: [
                'Don\'t lose your hope, every dog has his day.@不要灰心，每个人都有转运的一天。'
            ],
            similar:'get a break; be in good luck',
        },
        {
            title: 'Work like a dog',
            meaning: '拼命工作',
            example: [
                'If you want to be successful, you\'d better work like a dog.@如果你想要获得成功，你就要拼命工作。'
            ],
            similar:'work hard',
        }]
    },
    {
        animal: 'horse',
        compare: '中西方文化中的马的形象大都为褒义的，马在中华民族的文化中地位极高，具有一系列的象征和寓意。龙马精神是中华民族自古以来所崇尚的奋斗不止、自强不息的进取向上的民族精神。在西方文化里，马(horse)被当做一种神圣的动物，它代表速度、优雅和高贵。在西方童话中，马是一种有魔力、能讲话、能预言未来的动物，能给它所信赖的主人提出建议和忠告。',
        slangs: [{
            title: 'Hold one\'s horse(s)',
            meaning: '忍耐；控制自己的感情',
            example: [
                'Hold your horses, your mother will pick you up in a minute.@别着急，你妈妈马上就会来接你。',
                'We all need to learn to hold our horses.@我们都需要学会控制自己的情感。'
            ],
            similar:'endure；control one\'s emotions；control one\'s feeling',
        },
        {
            title: 'A willing horse',
            meaning: '积极工作的人；肯干的人',
            example: [
                'Robert is a willing horse and I know he\'ll try his best to do all the work we give him.@罗伯特是个乐于干活的人，我知道他会尽自己最大努力做好我们给他的工作的。',
                'Never spur a willing horse.@不要鞭抽快马。'
            ],
            similar:'an active worker',
        },
        {
            title: 'The wooden horse of Trojan',
            meaning: '暗藏的危险；阴险狡诈的手段',
            example: [
                'Don\'t be too relieved，there might be the wooden horse of Trojan.@别太放松了，可能有隐藏的危险。',
                'Let\'s fight fair, I hate the wooden horse of Trojan.@让我们公平对决吧，我讨厌阴险狡诈的手段。'
            ],
            similar:'hidden danger',
        },
        {
            title: 'High horse',
            meaning: '骄傲；自大；趾高气扬',
            example: [
                'If you keep on your high horse, you will lose all your friends.@如果你总是一副盛气凌人的样子，你将会失去所有的朋友。',
                'Get off your high horse. Stop judging people.@放下你的架子吧，别老是去评判别人。'
            ],
            similar:'arrogant',
        },
        {
            title: 'Beat a dead horse ',
            meaning: '白费劲；徒劳；白费口舌',
            example: [
                'I hate to beat a dead horse, but it is very important that you understand this before you leave.@我不想多此一举，但你离开以前必须了解这个。',
                'We\'re simply beating a dead horse. He\'ll never change.@我们是在白费口舌，他永远不会改变的。'
            ],
            similar:'waste one\'s breath',
        }]
    },
    {
        animal: 'bird',
        compare: '西方人关于bird的联想非常丰富，他们喜欢以 bird 喻人，在英国俚语中，bird 指少女、美女、少妇、女朋友，此外西方人还以bird 喻“事”。汉语中对鸟的联想也没有这么丰富，我们常说某人像鸟儿一样会唱歌，说小孩叽叽喳喳像小鸟一样快活。',
        slangs: [{
            title: 'A little bird told me',
            meaning: '有人跟我说（用于表示说话者不愿透露向其提供消息者为何人）',
            example: [
                'A little bird told me we have to work overtime tonight.@有人告诉我，我们今晚必须加班。',
                'A little bird told me that today is your birthday. @听说今天是你的生日。'
            ],
            similar:'Someone said to me.',
        },
        {
            title: 'A bird in the bush',
            meaning: '未到手的东西；未定局的事情；没把握的事',
            example: [
                'It is only a bird in the bush.@那还是一件未定局的事。',
                'A bird in the hand is worth two in the bush.@一鸟在手,胜似二鸟在林。'
            ],
            similar:'not sure；uncertain',
        },
        {
            title: 'An early bird',
            meaning: '早到或者早起的人',
            example: [
                'Mary is an early bird. She gets up around five o\'clock every morning.@玛丽是个早起的人， 她每天大约五点钟起床。',
                'She wishes she could be an early bird.@她希望她能是个早起的人。'
            ],
            similar:'get up early',
        },
        {
            title: 'For the birds',
            meaning: '荒唐；对牛弹琴；毫无意义',
            example: [
                'Their opinions on art are simply for the birds.@他们对艺术的见解真是荒唐可笑。',
                'Believe me, this book is for the birds.@相信我，这本书一点也不好。'
            ],
            similar:'meaningless；make no sense；insignificance',
        },
        {
            title: 'eat like a bird',
            meaning: '吃得很少；饭量小；胃口小',
            example: [
                'You\'re eating like a bird, I wish you would eat just a little more.@你吃的太少了，我希望你能尽量多吃一点。',
                'Girls always eat like a bird in order to keep a slender figure.@女孩子们吃得很少，为的是保持苗条的身材。'
            ],
            similar:'eat little',
        }]
    },
    {
        animal: 'pig',
        compare: '在中国古代猪象征吉祥、圆满、财富，人们多称赞猪的憨厚、宽容、豁达，如今它往往是蠢笨、懒惰、贪婪、丑陋的代名词，与西方文化体系中猪的形象大致相同。猪在人类的文化生活中被使用时，带有深厚的贬义色彩。',
        slangs: [{
            title: 'make a pig\'s ear',
            meaning: '把某事弄糟糕',
            example: [
                'He made a pig\'s ear of things on the evening.@那天晚上，他干了一件错事。',
                'Don\'t try to build models when you\'re feeling ill. You\'ll make a pig\'s ear of it. @身体不舒服的时候别尝试着制作模型，你会弄糟的。'
            ],
            similar:'mess up、flub',
        },
        {
            title: 'Buy a pig in the poke',
            meaning: '盲目购买',
            example: [
                'My brother bought a pig in a poke. He bought some property in Florida over the phone.@我兄弟在电话上就冲动地买下了佛罗里达沿海的那块地。',
                'The used car he bought not long ago has broken down.He always seems to buy a pig in a poke and never learns from his mistakes. @不久前他买的一部旧车现在已经坏了，看来他总是不看清楚就买东西，从不吸取教训。'
            ],
            similar:'buy sth blindly',
        },
        {
            title: 'Drive one\'s pigs to market',
            meaning: '打鼾',
            example: [
                'I can\'t get any sleep with Will driving his pigs to market every night.@威尔每天晚上打鼾，我睡不着觉。',
                'Last night I heard him driving his pigs to market. @昨天晚上，我听见他鼾声如雷。'
            ],
            similar:'snore',
        },
        {
            title: 'Pigs might fly ',
            meaning: '无稽之谈；奇迹可能会发生',
            example: [
                'Tom said he will become a good person，and pigs might fly.@汤姆说他会试着做一个好人，这完全是不可能的事。',
                'My uncle give me money! Pigs might fly! @叔叔会给我钱！那是不可能的事！'
            ],
            similar:'impossible；no way；out of the question',
        },
        {
            title: 'Pig out ',
            meaning: '狼吞虎咽；大吃特吃',
            example: [
                'Would you like to pig out with us tonight?@今晚想不想跟我们一起去海吃一顿？',
                'We pig out on pizza and beer.@我们大吃比萨饼，大喝啤酒。'
            ],
            similar:'gobble；wolf down',
        }]
    }
]
