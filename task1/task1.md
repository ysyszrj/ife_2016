# 任务一：零基础HTML编码
http://ife.baidu.com/task/detail?taskId=1 可以用来练手Emmet
## 任务目的
 - 了解HTML的定义、概念、发展简史
 - 掌握常用HTML标签的含义、用法
 - 能够基于设计稿来合理规划HTML文档结构
 - 理解语义化，合理地使用HTML标签来构建页面
 
## 任务描述
参考示例图（点击查看），完成一个HTML页面代码编写（不写CSS，不需要关注样式，只关注文档结构）

## 个人笔记汇总
### 了解HTML的定义、概念、发展简史
xhtml是w3c提出的对html的规范，用xml的语法来规范html
### 掌握常用HTML标签的含义、用法
\<q> 表示引用，自动加双引号

\<blockquote> 表示文本块引用

\<br> 表示换行，之前是 \<br />

\&nbsp; 表示空格 \&nbsp;no-breaking space:不间断空格，全角空格也是可以正常显示的

\<hr> 表示水平线 格式同br

\<address> 表示地址，作者身份，签名，邮件地址等

\<code>提交代码

\<pre>大段代码 其实是保留预格式的

ul: unordered list  ol: ordered list li:list item
**table**
td :a cell of a table that contains data
tr :a row of cells in a table

\<caption> the title of a table. 

\<colgroup>  a group of columns within a table

\<tbody> 当表格内容非常多时，表格会下载一点显示一点，但如果加上<tbody>标签后，这个表格就要等表格内容全部下载完才会显示。
thead tfoot tbody colspan="2"表示合并单元格

<\a> href 链接 title鼠标移动过来的文字  mailto 发送邮箱 target="_blank"

input name和value其实正好是键值对吧  radio表示的是单选，前提是name一样 input和label合起来用

label 的for可以指定某个控件的id

nav 导航

header 

figure表示在文章中插入图表 figcaption
  
### 能够基于设计稿来合理规划HTML文档结构
### 理解语义化，合理地使用HTML标签来构建页面
   明白每个标签的用途，比如网页标题用title，样式表现和内容载体分离，把样式表现交给css，内容展现交给html结构
 1. 能够让搜索引擎更好地搜索页面，让页面的可读性变强
 2. 更容易让屏幕阅读器读出网页内容
 
## 参考资料
1. 慕课网对于html和css的介绍 http://www.imooc.com/learn/9
2. mdn关于表格的资料 https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
3. 推荐酷炫拽的 zen code 现在改名叫Emmet http://docs.emmet.io/abbreviations/syntax/
4. 表格 http://www.w3school.com.cn/tiy/t.asp?f=html_tbody