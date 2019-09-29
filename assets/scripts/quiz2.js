//题目
var questiones = {
    cat: [
        {
            content: '<size=24>嘘！猫猫们正在睡觉，选出正确的词猫猫可以继续睡觉，选择错误猫猫会惊醒大叫引来坏人哦！</size><br/><size=22> _________, but for you to tell your boss that he is cruel seems hard. </size>',
            answer: '3',
            explain: '【题目·选词填空】\n____________,but for you to tell your boss that he is cruel seems hard.\nBell the cat     Let the cat out of the bag    A cat may look at a king\n【答案】\nA cat may look at a king\【解析】\n图片中两个人在天平两端一边高，从语境和图片可以判断，此处应选“a cat on a hot tin roof”人人平等；\n原句意思为：虽然人人平等。但是你还是很难告诉你的老板他太残酷了。',
        },{
            content: '<size=24>小猫被关在了笼子里，补全俚语可以将猫猫解开哦！</size>',
            write: ['1. She\'s like a cat on a ______ tin roof, waiting for the test result.',
            '2. He told our secrets to teachers, a cat in the ______! ',
            '3. It\'s quite difficult to get a man who can ______ the cat.'],
            answer: ['hot', 'pan', 'bell'],
            explain: '【题目·补全俚语】\nShe\'s like a cat on a ______ tin roof, waiting for the test result. \nHe told our secrets to teachers, a cat in the ______! \nIt\'s quite difficult to get a man who can ______ the cat. \n【答案】\n1）hot  2）pan  3）bell\n【解析】\n 1）a cat on a hot tin roof 热锅上的蚂蚁\n原句意思为：等待考试成绩的过程中，她焦虑的就像热锅上的蚂蚁。\n2）a cat in the pan 叛徒\n原句意思为：他把我们的秘密告诉了老师，这个叛徒！\n3）bell the cat 挺身而出；主动冒险；为他人利益冒险\n原句意思为：现在很难有人可以挺身而出了。',
        },{
            content: '<size=24>小猫们饿的走不动了，不愿意和你走，快帮小猫们找到自己想吃的食物补充体力吧！(点击小喇叭听录音，并将猫粮移动到对应的小猫上哦)</size>',
            answer: ['6','4','5'],
            sound:['Let the cat out of the bag','A cat in the pan','A cat on a hot tin roof'],
            explain: '【答案】\na cat in the pan 叛徒\na cat on a hot tin roof 十分焦虑\nlet the cat out of the bag 泄露秘密；真相大白',
        }
    ],

    dog: [
        {
            content: '<size=24>被偷走的狗狗有些害怕，一直在不停的叫，选对正确的俚语可以平复狗狗心情哦！</size><br/><size=22> If you want to be successful, you\'d better __________.  </size>',
            answer: '3',
            explain: '【题目·选词填空】\nIf you want to be successful, you\'d better ______.\nlet sleeping dogs lie   dog watch   work like a dog\n【答案】\nwork like a dog\n【解析】\n 图片中的人在非常拼命的工作，因此此处应选“work like a dog”；\n原句意思为：如果你想成功，你最好努力工作。',
        },{
            content: '<size=24>狗狗终于安静下来了，现在你有30s的时间解开绳子带走狗狗哦，请抓紧时间答题吧！</size>',
            write: ['1. In the middle of the picnic it started to _______ cats and dogs, and everybody got soaked.',
            '2. Don\'t lose your hope, every dog has his _______.',
            '3. Does anyone have dog _______ tonight?'],
            answer: ['rain', 'day', 'watch'],
            explain: '【题目·补全俚语】\nIn the middle of the picnic it started to _______ cats and dogs, and everybody got soaked. \nDon\'t lose your hope, every dog has its _______. \nDoes anyone have dog _______ tonight? \n【答案】\n1）rain  2）day  3）watch\n【解析】\n1）rain cats and dogs 倾盆大雨\n原句意思为：野餐进行到一半下起了倾盆大雨，每个人都被淋湿了。\n2）every dog has its day 人皆有得意之时；时来运转\n原句意思为：不要泄气，每个人都会有时来运转的时候。\n3）dog watch 夜班\n原句意思为：今天晚上有谁有夜班么？',
        },{
            content:'<size=24>可恶的小偷，竟然放出来蝙蝠阻止我解救狗狗，移动正确的武器来消灭围攻的蝙蝠吧（点击小喇叭听录音，并将相应的武器移到蝙蝠上）</size>',
            answer: ['4', '6', '5'],
            sound:['Every dog has its day','Rain cats and dogs','Work like a dog'],
            explain: '【答案】\nevery dog has its day 时来运转\nrain cats and dogs 倾盆大雨\nwork like a dog 努力工作',
        }
    ],

    horse: [
        {
            content: '<size=24>快看！前面有三条路，选择正确的路能够更快解救到马儿哦！</size><br/><size=22>Robert is ____________ and I know he\'ll try his best to do all the work we give him.</size>',
            answer: '1',
            explain: '【题目·选词填空】\nRobert is ___________ and I know he\'ll try his best to do all the work we give him. \na willing horse   the wooden horse of Trojan   high horse\n【答案】\na willing horse\n【解析】\n图片中的人在非常认真的工作，从语境和图片可以判断，此处应选“a willing horse”；\n原句意思为：罗伯特是个积极工作的人，我知道他一定能尽其所能完成好我们给他的工作。',
        },{
            content: '<size=24>走了这么久总算看到马儿了，咦！马儿身上怎么背着这么重的包袱，快帮他们取下来吧，在横线上补全俚语可以帮助马儿减轻包袱哦！</size>',
            write: ['______ horse  骄傲自大',
            'beat a ______ horse  白费劲，徒劳',
            '______ one’s horse  忍耐，控制自己的感情'],
            answer: ['high', 'dead', 'hold'],
            explain: '【题目·补全俚语】\n______ horse  骄傲自大\n______ one’s horse   忍耐，控制自己的感情\nbeat a ______ horse   白费劲，徒劳\n【答案】\n1）high  2）hold  3）dead\n【解析】\n1）high horse 暗藏的危险\n2）hold one’s horse 忍耐；控制自己的感情\n3）beat a dead horse白费劲；徒劳',
        },{
            content: '<size=24>马儿们已经被关了太多天，饿的走不动了，快来帮助马儿们吃到他们想吃的草吧！选择错了马儿可不会跟你走哦~（点击小喇叭听录音，并将对应的草移向马儿）</size>',
            answer: ['5', '6', '4'],
            sound:['High horse','A willing horse','Beat a dead horse'],
            explain: '【答案】\nhigh horse 骄傲；自大；趾高气扬\na willing horse 积极工作的人\nbeat a dead horse 白费劲；徒劳',
        }
    ],
    
    bird: [
        {
            content: '<size=24>你看到鸟儿了吗？他们被挂的真高！选择一个合适的梯子爬上去吧~</size><br/><size=22>Jack is ____________. He gets up around five o\'clock every morning.</size>',
            answer: '3',
            explain: '【题目·选词填空】\nJack is _________. He gets up around five o\'clock every morning.\neat  like a bird   for the birds   an early bird\n【答案】\n【解析】\n图片中的男孩伸着懒腰正在起床，因此推断此处应选“an early bird”；\n原句意思为：杰克起得很早，他每天早上5点左右起床。',
        },{
            content: '<size=24>天哪，鸟儿们遭到了虐待，他们的翅膀在滴血，补全俚语可以得到纱布为鸟儿包扎，赶快开始吧！</size>',
            write: ['Eat _____ a bird  吃的很少',
            'a little bird _____ me  有人跟我说',
            '_____ the birds  荒唐；对牛弹琴'],
            answer: ['like', 'told', 'for'],
            explain: '【题目·补全俚语】\neat _____ a bird   吃的很少\na little bird _____ me  有人跟我说\n _____ the birds  荒唐；对牛弹琴\n【答案】\n1）like  2）told  3）for\n【解析】\n1）eat like a bird  吃的很少\n2）a little bird told me 有人跟我说\n3）for the birds  荒唐；对牛弹琴',
        },{
            content: '<size=24>鸟儿们好像都昏迷了，但是好像昏迷的原因不同，倾听他们的声音并选择合适的药水为他们治疗吧！（点击小喇叭听录音，并将药水移向对应的鸟儿吧）</size>',
            answer: ['5', '6', '4'],
            sound:['A bird in the bush','An early bird','A little bird told me'],
            explain: '【答案】\na bird in the bush 未到手的东西；未定局的事\nan early bird 起得很早\na little bird told me 有人跟我说',
        }
    ],

    pig: [
        {
            content: '<size=24>啊!!!可恶的的小偷,竟然设置了陷阱,快选择一个合适的绳索爬上去吧!</size><br/><size=22>Would you like to ____________ tonight?</size>',
            answer: '2',
            explain: '【题目·选词填空】\nWould you like to _________ tonight?\npigs might fly    pig out   pigs might fly\n【答案】\npig out\n【解析】\n图片中一个人在狼吞虎咽的吃着东西，因此推断此处应选“pig out”；\n原句意思为：你今天晚上想大吃一顿么？',
        },{
            content: '<size=24>太可怜了,受到惊吓的小猪一直在哭泣,补全俚语可安慰小猪哦~</size>',
            write: ['buy a pig in the _____   盲目购买',
            'driving his pigs to _____   打鼾',
            'pigs might _____  无稽之谈'],
            answer: ['poke', 'market', 'fly'],
            explain: '【题目·补全俚语】\nbuy a pig in the _____ 盲目购买\ndriving his pigs to _____ 打鼾\npigs might _____ 无稽之谈\n【答案】\n1）poke  2）market  3）fly\n【解析】\n1）buy a pig in the poke 盲目购买\n2）driving his pigs to market 打鼾\n3）pigs might fly   无稽之谈',
        },{
            content: '<size=24>小猪们被锁住了,快将锁与钥匙配对,释放小猪吧!（点击小喇叭听录音，并将钥匙移向相应的锁哦）</size>',
            answer: ['4','6','5'],
            sound:['Pig out','Buy a pig in the poke','Make a pig\'s ear'],
            explain: '【答案】\nmake a pig\'s ear 把某事弄糟糕\npigs might fly 无稽之谈；奇迹可能会发生\npig out 狼吞虎咽；大吃特吃',
        }
    ]
}


module.exports={
    questiones: questiones,
}