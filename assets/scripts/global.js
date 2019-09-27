// 全局变量

// 进度
var process = 0;
var id = 0
var quiz = 0

// 收藏夹
var collection = {
};

var score = 5

//侦探手册
var firstOpen = true;
var firstClose = true;
var bookPage = 0;
var bookContent = [
    'Cover',//0
    'Welcome',//1
    'Select',//2
]

let animals = ['cat', 'dog', 'horse', 'bird', 'pig'];
let page = 3;
let content = 0;
for(let i in animals){
    for(let word = 0; word < 6; word++){
        if(word == 0){
            let name = animals[i] + '-' + word + '-'+ content; 
            bookContent[page++] = name;
        } else {
            let name = animals[i] + '-' + word + '-'+ content++; 
            bookContent[page++] = name;
            name = animals[i] + '-' + word + '-' + content++;
            bookContent[page++] = name;
            content %= 2;
        }
    }
}
bookContent[page] = 'Collection'
// console.log(bookContent);

//测试分数 score1：解救动物；score2: 指出小偷
var score1 = 0;
var score2 = 5;

//test场景
var animal;

module.exports={
    process,
    collection,
    firstOpen,
    firstClose,
    bookPage,
    bookContent,
    score,
    score1,
    score2,
    animal,
}