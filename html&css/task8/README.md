主要有两个知识点
1. @media 可以根据设备来定义css
2. less的mixin以及参数以及循环

less的mixin，定义基础类，定义变量
定义变量

@var:30px;
定义基础类就如同我们定义一个普通的类

.base{
    width:@var;
}

.class{
    .base
}

利用代码嵌套来得到循环
```
.mixin-loop (@i,@type) when (@i > 0) {
  .col-@{type}-@{i}{
    width: 100% / (12 / @i );
  }
  .mixin-loop(@i - 1,@type);
}

```