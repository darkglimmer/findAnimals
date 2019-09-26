//题目
var questiones = {
    cat: [
        {
            content: '<size=24>嘘！猫猫们正在睡觉，选出正确的词猫猫可以继续睡觉，选择错误猫猫会惊醒大叫引来坏人哦！</size><br/><size=22> _________, but for you to tell your boss that he is cruel seems hard. </size>',
            answer: '3',
        },{
            content: '<size=24>小猫被关在了笼子里，补全俚语可以将猫猫解开哦！</size>',
            write: ['1. She\'s like a cat on a ______ tin roof, waiting for the test result.',
            '2. He told our secrets to teachers, a cat in the ______! ',
            '3. It\'s quite difficult to get a man who can ______ the cat.'],
            answer: ['hot', 'pan', 'bell'],
        },{
            content: '<size=24>小猫们饿的走不动了，不愿意和你走，快帮小猫们找到自己想吃的食物补充体力吧！(点击小喇叭听录音，并将猫粮移动到对应的小猫上哦)</size>',
            answer: ['6','4','5'],
        }
    ],

    dog: [
        {
            content: '<size=24>被偷走的狗狗有些害怕，一直在不停的叫，选对正确的俚语可以平复狗狗心情哦！</size><br/><size=22> If you want to be successful, you\'d better __________.  </size>',
            answer: '3',
        },{
            content: '<size=24>狗狗终于安静下来了，现在你有30s的时间解开绳子带走狗狗哦，请抓紧时间答题吧！</size>',
            write: ['1. In the middle of the picnic it started to _______ cats and dogs, and everybody got soaked.',
            '2. Don\'t lose your hope, every dog has his _______.',
            '3. Does anyone have dog _______ tonight?'],
            answer: ['rain', 'day', 'watch']
        },{
            content:'<size=24>可恶的小偷，竟然放出来蝙蝠阻止我解救狗狗，移动正确的武器来消灭围攻的蝙蝠吧（点击小喇叭听录音，并将相应的武器移到蝙蝠上）</size>',
            answer: ['4', '6', '5'],
        }
    ],

    horse: [
        {
            content: '<size=24>快看！前面有三条路，选择正确的路能够更快解救到马儿哦！</size><br/><size=22>Robert is ____________ and I know he\'ll try his best to do all the work we give him.</size>',
            answer: '1',
        },{
            content: '<size=24>走了这么久总算看到马儿了，咦！马儿身上怎么背着这么重的包袱，快帮他们取下来吧，在横线上补全俚语可以帮助马儿减轻包袱哦！</size>',
            write: ['______ horse  骄傲自大',
            'beat a ______ horse  白费劲，徒劳',
            '______ one’s horse  忍耐，控制自己的感情'],
            answer: ['high', 'hold', 'dead'],
        },{
            content: '<size=24>马儿们已经被关了太多天，饿的走不动了，快来帮助马儿们吃到他们想吃的草吧！选择错了马儿可不会跟你走哦~（点击小喇叭听录音，并将对应的草移向马儿）</size>',
            answer: ['5', '6', '4'],
        }
    ],
    
    bird: [
        {
            content: '<size=24>你看到鸟儿了吗？他们被挂的真高！选择一个合适的梯子爬上去吧~</size><br/><size=22>Jack is ____________. He gets up around five o\'clock every morning.</size>',
            answer: '3',
        },{
            content: '<size=24>天哪，鸟儿们遭到了虐待，他们的翅膀在滴血，补全俚语可以得到纱布为鸟儿包扎，赶快开始吧！</size>',
            write: ['Eat _____ a bird  吃的很少',
            'a little bird _____ me  有人跟我说',
            '_____ the birds  荒唐；对牛弹琴'],
            answer: ['like', 'told', 'for'],
        },{
            content: '<size=24>鸟儿们好像都昏迷了，但是好像昏迷的原因不同，倾听他们的声音并选择合适的药水为他们治疗吧！（点击小喇叭听录音，并将药水移向对应的鸟儿吧）</size>',
            answer: ['5', '6', '4'],
        }
    ],

    pig: [
        {
            content: '<size=24>啊!!!可恶的的小偷,竟然设置了陷阱,快选择一个合适的绳索爬上去吧!</size><br/><size=22>Would you like to ____________ tonight?</size>',
            answer: '2',
        },{
            content: '<size=24>太可怜了,受到惊吓的小猪一直在哭泣,补全俚语可安慰小猪哦~</size>',
            write: ['buy a pig in the _____   盲目购买',
            'driving his pigs to _____   打鼾',
            'pigs might _____  无稽之谈'],
            answer: ['poke', 'market', 'fly'],
        },{
            content: '<size=24>小猪们被锁住了,快将锁与钥匙配对,释放小猪吧!（点击小喇叭听录音，并将钥匙移向相应的锁哦）</size>',
            answer: ['4','6','5'],
        }
    ]
}


module.exports={
    questiones: questiones,
}