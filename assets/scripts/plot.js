//本脚本用于控制剧情流

//控制图片切换，数组中依次为：左立绘，右立绘，背景图，其他图片
var imgControl = {
    3: ['smile'],
    5: ['normal']
}
var popControl = {
    2: "为什么呢？",
    4: "他去哪了"
}

module.exports={
    story:[
        "hello，我是<color=#495A80>甄探</color>，是一名初出茅庐的见习侦探",
        "最近师父有事出差了，留我一个人在事务所里无所事事。",
        "好无聊啊——！",
        "咦，这是什么？",
        "啊，是<color=#FE4C40>师父给我的信！</color>",
    ],
    imgControl: imgControl,
    popControl: popControl 
}