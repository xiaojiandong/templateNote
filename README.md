# templateNote
templateNote模板的使用

## 1. 引入第3方库template的依赖：
```html
  <script src="js/template.js"></script>
  <script src="http://cdn.bootcss.com/jquery/2.1.3/jquery.min.js"></script>
```
## 2. html结构：
```html
  <div class="container js_container">
    <h2>container父容器里面的内容</h2>
</div>
<!-- 模板中的数据写到script内部 -->
<script type="text/html" id="testTpl">
  <div class="template-container">
   <p>1. 直接赋值 - {{ title }}</p>
   {{each bookInfo as value index }}
     <p>{{value}} - {{index}}</p>
   {{/each}}
   <hr/>
   <p>2. each循环</p>
   {{each authorInfo as value index}}
       <p>名字：{{value.name}} ; 地址：{{value.address}}</p>
   {{/each}}
   <hr/>
   <p>3. if判断</p>
   {{if !isSoldOut}}
     <h1>已经卖完了</h1>
   {{else}}
     <h1>书籍还有</h1>
   {{/if}}
  </div>
</script>
```

## 3. index.js数据：
```js
// 服务端返回的数据
    var resData = {
        'title' : '程序员必读书系列',
        'bookInfo' : {
            0 : '《java从入门的到放弃》',
            1 : '《php从入门的到放弃》',
            2 : '《c从入门的到放弃》'
        },
        'authorInfo' : {
            0 : {
                'name' : '张三',
                'address' : '北京'
            },
            1 : {
                'name' : '李四',
                'address' : '上海'
            },
            2 : {
                'name' : '王五',
                'address' : '广州'
            }
        },
        'isSoldOut' : true
    };
    // 获取 testTpl id，将数据注入到这个id中
    var html = template('testTpl' , resData);
    // 获取 js_container节点，将数据渲染到里面
    $('.js_container').html( html );
```
