# 任务二：零基础HTML及CSS编码（一）
http://ife.baidu.com/task/detail?taskId=2


## 学习笔记
css有权重问题
相同权重的覆盖
！important优先级高于其他
text-indent:2em; 排版缩进 
line-height 行高
word-spacing 单词间距
letter-spacing  字母间距
text-align 可以用于图片居中

常用的块状元素有：独占一行，可以设置高和宽
\<div>、\<p>、\<h1>...\<h6>、\<ol>、\<ul>、\<dl>、\<table>、\<address>、\<blockquote> 、\<form>
常用的内联元素有： 不分行，不能设置高度和宽度
\<a>、\<span>、\<br>、\<i>、\<em>、\<strong>、\<label>、\<q>、\<var>、\<cite>、\<code>
常用的内联块状元素有： display:inline-block; 有高度和宽度
\<img>、\<input> 
 
层模型有三种形式：
1、绝对定位(position: absolute)
2、相对定位(position: relative)
3、固定定位(position: fixed)

如果想为元素设置层模型中的绝对定位，需要设置position:absolute(表示绝对定位)，这条语句的作用将元素从文档流中拖出来，然后使用left、right、top、bottom属性相对于其最接近的一个具有定位属性的父包含块进行绝对定位。如果不存在这样的包含块，则相对于body元素，即相对于浏览器窗口。
绝对位置偏离文档流
如果想为元素设置层模型中的相对定位，需要设置position:relative（表示相对定位），它通过left、right、top、bottom属性确定元素在正常文档流中的偏移位置。相对定位完成的过程是首先按static(float)方式生成一个元素(并且元素像层一样浮动了起来)，然后相对于以前的位置移动，移动的方向和幅度由left、right、top、bottom属性确定，偏移前的位置保留不动。
相对位置偏离前的位置还在文档流中间，而且其他元素根据原来的位置定位。
fixed是相对屏幕位置不变。

对于非块状元素，居中可以直接用text-align

对于块状元素，如果定宽，可以选择用margin left 和right都设置auto来居中。
当被设置元素为块状元素时用 text-align：center 就不起作用了，这时也分两种情况：定宽块状元素和不定宽块状元素。这一小节我们先来讲一讲定宽块状元素。
满足定宽和块状两个条件的元素是可以通过设置“左右margin”值为“auto”来实现居中的。我们来看个例子就是设置 div 这个块状元素水平居中：

不定宽度的块状元素有三种方法居中（这三种方法目前使用的都比多）：
加入 table 标签
设置 display;inline 方法
设置 position:relative 和 left:50%;

方法三：通过给父元素设置 float，然后给父元素设置 position:relative 和 left:50%，子元素设置 position:relative 和 left:-50% 来实现水平居中。
代码如下：
```
<body>
<div class="container">
    <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
    </ul>
</div>
</body>
```
css代码：
```
<style>
.container{
 ***   
    float:left;
    position:relative;
    left:50%
    ***
}

.container ul{
    list-style:none;
    margin:0;
    padding:0;
    
    position:relative;
    left:-50%;
}
.container li{float:left;display:inline;margin-right:8px;}
</style>
```


父元素高度确定的单行文本的竖直居中的方法是通过设置父元素的 height 和 line-height 高度一致来实现的。如下代码：
<div class="container">
    hi,imooc!
</div>
css代码：
<style>
.container{
    height:100px;
    line-height:100px;
    background:#999;
}
</style>

在 chrome、firefox 及 IE8 以上的浏览器下可以设置块级元素的 display 为 table-cell，激活 vertical-align 属性，但注意 IE6、7 并不支持这个样式。

有一个有趣的现象就是当为元素（不论之前是什么类型元素，display:none 除外）设置以下 2 个句之一：
position : absolute
float : left 或 float:right
元素会自动变为以 display:inline-block 的方式显示，当然就可以设置元素的 width 和 height 了且默认宽度不占满父元素。

vertical-align: text-top;

p里面不能嵌套 ul

## 参考资料：
1. imooc
2. box-shadow 
http://www.w3school.com.cn/cssref/pr_box-shadow.asp