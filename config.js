/**
 * 大家在这里自定义即可，如果不添加图片，记得把图片配置的src写成 ""
 */
var settings = {
    // 爱心配置
    love: {
        length: 600,  // 爱心的大小
        duration: 2,  // 爱心扩散速度，越小速度越快
        velocity: 100,  // 爱心扩散速度，越小速度越慢
        effect: -0.75, // 爱心收缩效果，比如：1扩散，-2收缩
        size: 32, // 爱心数量
        color: "pink" // 爱心颜色
    },
    // 开始按钮配置
    button: {
        // 按钮内容
        text: "李欣怡的专属爱心",
        // 按钮字体颜色
        color: "#FFF",
        // 按钮边框颜色
        borderColor: "red",
        // 按钮宽度
        width: "150",
        // 按钮高度
        height: "60",
        // 按钮字体大小
        size: "18",
        // 按钮圆角，可根据喜好调节
        borderRadius: "5"
    },
    // 背景颜色配置
    bg: {
        color: "#000"
    },
    // 音乐配置
    music: {
        // 只用写音乐名，比如 xxx.mp3
        src: "雪distance.mp3"
    },
    // 文字配置
    text: {
        // 文字内容
        content: "李欣怡的专属爱心",
        // 字体大小
        size: "25",
        // 文字宽度
        width: "100",
        // 文字颜色
        color: "#FFB6C1",
        // 文字是否加粗,0不加粗，1加粗
        bold: "1",
        // 文字距离左边多远
        left: "20",
        // 文字距离顶部多远
        top: "20",
        // 透明度，1不透明，0不透明
        opacity: ".6"
    },
    // 图片配置
    image: {
        // 图片放在image文件夹下，然后写图片名比如 xxx.png
        src: "你好.jpg",
        // 图片宽度
        width: "110",
        // 图片高度
        height: "110",
        // 图片距离顶部距离
        top: "10",
        // 图片距离左边距离
        left: "150",
        // 圆角，50%是圆形
        borderRadius: "50%",
        // 透明度，1不透明，0不透明
        opacity: ".5"
    }
};