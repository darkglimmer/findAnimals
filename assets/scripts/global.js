// 全局变量

// 进度
var process = 0;

// 收藏夹
var collection = {
    "xxx": true,
    "yyy": true,
};

//侦探手册
var firstOpen = true;
var firstClose = true;
var bookPage = 0;
var bookContent = [
    'Cover',//0
    'Welcome',//1
    'Select',//2
]

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
        },{
            title: 'A cat in the pan',
            meaning: ''
        }]
    },
    {
        
    },
]

let animals = ['cat', 'dog', 'horse', 'bird', 'pig'];
let page = 3;
let word = 0;
let content = 0;
for(let i in animals){
    for(let word = 0; word < 7; word++){
        let name = animals[i] + '-' + word + '-'+ content++; 
        bookContent[page++] = name;
        name = animals[i] + '-' + word + '-' + content++;
        bookContent[page++] = name;
        content %= 2;
    }
}

//测试分数 score1：解救动物；score2: 指出小偷
var score1 = 0;
var score2 = 5;


module.exports={
    process,
    collection,
    firstOpen,
    firstClose,
    bookPage,
    bookContent,
    score1,
    score2,
    wordContent
}