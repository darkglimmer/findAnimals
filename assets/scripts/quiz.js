//题目
var questiones = {
    'cat': [
        {
            content: '<size=20>【选词填空】嘘！猫猫们正在睡觉，选出正确的词猫猫可以继续睡觉，选择错误猫猫会惊醒大叫引来坏人哦！</size><br/><size=22>Failing to find a job, he is just like____________</size>',
            answer: '2',
            explain: '【题目•选词填空】\nFailing to find a job, sshe is just like ______.\na cat out of the bag   a cat on a hot tin roof   a cat in the pan\n【答案】\na cat on a hot tin roof\n【解析】\n图片中的人表现的非常焦虑，从语境和图片可以判断，此处应选“a cat on a hot tin roof”；原句意思为：由于找工作的失败，他像一只热锅上的蚂蚁，十分焦虑。\n'
        },{
            content: '<size=20>【补全俚语】小猫被关在了笼子里，补全俚语可以将猫猫解开哦！</size>',
            write: ['a cat in the ______  叛徒；背叛者',
            'a cat may look at a ______  人人平等；最低级的人也有权利',
            '______ the cat  挺身而出；主动冒险'],
            answer: ['pan', 'king', 'bell'],
            explain: '【题目•补全俚语】\na cat in the ______  叛徒；背叛者\na cat may look at a ______  人人平等；最低级的人也有权利\n______the cat 挺身而出；主动冒险；为他人利益冒险\n【答案】\n1）pan  2）king  3）bell\n【解析】\n1）a cat in the pan 叛徒；背叛者\n2）a cat may look at a king 人人平等；最低级的人也有权利\n3）bell the cat 挺身而出；主动冒险；为他人利益冒险\n'   
        },{
            content: '<size=20>【连连看】小猫们饿的走不动了，不愿意和你走，快帮小猫们找到自己想吃的食物补充体力吧！(点击小喇叭听录音，并将猫粮与对应的小猫进行连线)</size>',
            answer: ['5','6','4'],
            sound:['A cat may look at a king','Bell the cat','Let the cat out of the bag'],
            explain:'【答案】\na cat may look at a king 人人平等；最低级的人也有权利\nbell the cat 挺身而出；主动冒险；为他人利益冒险\nlet the cat out of the bag 泄露秘密；真相大白/n' 
        }
    ],

    'dog': [
        {
            content: '<size=20>【选词填空】被偷走的狗狗有些害怕，一直在不停的叫，选对正确的俚语可以平复狗狗心情哦！</size><br/><size=22>Look, it begins to __________ outside! </size>',
            answer: '1',
            explain:'【题目•选词填空】\nLook, it begins to ______ outside!\nrain cats and dogs  work like a dog  dog watch\n【答案】\nrain cats and dogs\n【解析】\n图片中展示的是下大雨的场景，因此此处应选“rain cats and dogs”；\n原句意思为：看！外面开始下倾盆大雨了！\n'
        },{
            content: '<size=20>【补全俚语】狗狗终于安静下来了，现在快解开绳子带走狗狗吧！</size>',
            write: ['Why can\'t she let ______ dogs lie?',
            'Don\'t lose your hope, every dog has his _______.',
            'If you want to be successful, you\'d better _______ like a dog.'],
            answer: ['sleeping', 'day', 'work'],
            explain:'【题目•补全俚语】\nWhy can\'t she let _______ dogs lie?\nDon\'t lose your hope, every dog has its _______.\nIf you want to be successful, you\'d better _______like a dog.\n【答案】\n1）sleeping  2）day  3）work\n【解析】\n1）let sleeping dogs lie 过去的事情就不要再提了；别惹麻烦\n原句意思为：她为什么就不能不惹麻烦呢？2）every dog has its day 人皆有得意之时；时来运转\n原句意思为：不要泄气，每个人都会有时来运转的时候。3）work like a dog 拼命工作\n原句意思为：如果你想成功，你最好努力工作。\n'
        },{
            content:'<size=20>【连连看】可恶的小偷，竟然放出来蝙蝠阻止我解救狗狗，移动正确的武器来消灭围攻的蝙蝠吧（点击小喇叭听录音，并将相应的武器与蝙蝠连线）</size>',
            answer: ['4', '6', '5'],
            sound:['Rain cats and dogs','Every dog has its day','Dog watch'],
            explain:'【答案】\nrain cats and dogs 倾盆大雨\nevery dog has it’s day 时来运转\ndog watch 夜班\n'
        }
    ],

    'horse': [
        {
            content: '<size=20>【选词填空】快看！前面有三条路，选择正确的路能够更快解救到马儿哦！</size><br/><size=22>Mr Green is always on his __________ ，so none of his colleagues like him.</size>',
            answer: '3',
            explain:'【题目•选词填空】\nMr Green is always on his ______，so none of his colleagues like him.\na willing horse    the wooden horse of Trojan    high horse\n【答案】\nhigh horse\n【解析】\n图片中的人表情非常傲慢，从语境和图片可以判断，此处应选“high horse”；\n原句意思为：格林先生非常傲慢，所以他的同事中没有一个人喜欢他。\n'
        },{
            content: '<size=20>【补全俚语】走了这么久总算看到马儿了，咦！马儿身上怎么背着这么重的包袱，快帮他们取下来吧，在横线上补全俚语可以帮助马儿减轻包袱哦！</size>',
            write: ['the ______ horse of Trojan   暗藏的危险',
            'beat a ______ horse  白费劲，徒劳',
            '______ one’s horse  忍耐，控制自己的感情'],
            answer: ['wooden', 'dead', 'hold'],
            explain:'【题目•补全俚语】\nthe ______ horse of Trojan  暗藏的危险\nbeat a ______ horse  白费劲，徒劳\n______one’s horse  忍耐，控制自己的感情\n【答案】\n1）wooden  2）dead  3）hold\n【解析】\n1）the wooden horse of Trojan 暗藏的危险\n2）beat a dead horse 白费劲；徒劳\n3）hold one’s horse 忍耐；控制自己的感情\n'
        },{
            content: '<size=20>【连连看】马儿们已经被关了太多天，饿的走不动了，快来帮助马儿们吃到他们想吃的草吧！选择错了马儿可不会跟你走哦~（点击小喇叭听录音，并将对应的草与马儿连线）</size>',
            answer: ['6', '4', '5'],
            sound:['High horse','Beat a dead horse','Hold one\'s horse(s)'],
            explain:'【答案】\nhigh horse 骄傲；自大；趾高气扬\nbeat a dead horse 白费劲；徒劳；白费口舌\nhold one’s horse 忍耐；控制自己的感情\n'
        }
    ],
    
    'bird': [
        {
            content: '<size=20>【选词填空】你看到鸟儿了吗？他们被挂的真高！选择一个合适的梯子爬上去吧~</size><br/><size=22>She ____________, No wonder she is so thin.</size>',
            answer: '2',
            explain:'【题目•选词填空】\nShe _____ , No wonder she is so thin.\n【答案】\neats like a bird\n【解析】\n图片中饭盘非常小，因此推断此处应选“eats like a bird”；\n原句意思为：她吃的太少了，难怪她这么瘦！\n '
        },{
            content: '<size=20>【补全俚语】天哪，鸟儿们遭到了虐待，他们的翅膀在滴血，补全俚语可以得到纱布为鸟儿包扎，赶快开始吧！</size>',
            write: ['a bird in the _____  未到手的东西、未定局的事',
            'a little bird _____ me  有人跟我说',
            'An _____ bird  早到或者早起的人'],
            answer: ['bush', 'told', 'early'],
            explain:'【题目•补全俚语】\na bird in the _____  未到手的东西、未定局的事\na little bird _____ me  有人跟我说\nan _____ bird  早到或者早起的人\n【答案】\n1）bush  2）told  3）early\n【解析】\n1）a bird in the bush 未到手的东西；未定局的事\n2）a little bird told me 有人跟我说\n3）an early bird 早到或者早起的人\n'
        },{
            content: '<size=20>【连连看】鸟儿们好像都昏迷了，但是好像昏迷的原因不同，倾听他们的声音并选择合适的药水为他们治疗吧！（点击小喇叭听录音，并将药水与对应的鸟儿连线）</size>',
            answer: ['5', '6', '4'],
            sound:['For the birds','Eat like a bird','A bird in the bush'],
            explain:'【答案】\nfor the birds 荒唐；毫无意义\neat like a bird 吃的很少\na bird in the bush 未到手的东西；未定局的事\n'
        }
    ],

    'pig': [
        {
            content: '<size=20>【选词填空】啊!可恶的的小偷,竟然设置了陷阱,快选择一个合适的绳索爬上去吧!</size><br/><size=22>Hearing the boy ____________, his father woke up in the middle of the night.</size>',
            answer: '1',
            explain:'【题目•选词填空】\nHearing the boy _____ , his father woke up in the middle of the night.\ndriving his pigs to market  pig out   pigs might fly\n【答案】\ndriving his pigs to market\n【解析】\n图片中一个人在呼呼打鼾，因此推断此处应选“driving his pigs to market”；\n原句意思为：听着儿子的鼾声，他的爸爸在半夜被吵醒。\n'
        },{
            content: '<size=20>【补全俚语】太可怜了,受到惊吓的小猪一直在哭泣,补全俚语可安慰小猪哦~</size>',
            write: ['driving his pigs to _____   打鼾',
            'Buy a pig in the _____   盲目购买',
            'make a pig\'s _____   把某事弄糟糕'],
            answer: ['market', 'poke', 'ear'],
            explain:'【题目•补全俚语】\ndriving his pigs to _____  打鼾\nbuy a pig in the _____  盲目购买\nmake a pig\'s _____  把某事弄糟糕\n【答案】\n1）market  2）poke  3）ear\n【解析】\n1）driving one’s pigs to market 打鼾\n2）buy a pig in the poke 盲目购买\n3）make a pig’s ear 把某事弄糟糕\n'
        },{
            content: '<size=20>【连连看】小猪们被锁住了,快将锁与钥匙配对,释放小猪吧!（点击小喇叭听录音，并将钥匙与相应的锁对应吧）</size>',
            answer: ['4','6','5'],
            sound:['Pig out','Pigs might fly','Make a pig\'s ear'],
            explain:'【答案】\npig out 狼吞虎咽；大吃特吃\npigs might fly 无稽之谈；奇迹可能会发生\nmake a pig\'s ear 把某事弄糟糕\n'
        }
    ]
}


module.exports={
    questiones: questiones,
}