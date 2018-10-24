# test-code
一些平时常用的方法 , 封装一下 用到才会写
现在已经写了一个dialog弹出框, 需要配合css使用,ajax中的 post get 方法, api 与 jquery 一样, 做到了最简, 还有一个直接给出 form id或 class 名获取下面表单的数据, 现在可以获得 input 中 文本 数字 邮件 密码 radio, 至于其他暂时没用到没写。
```html
<script src="js/tools.js"></script>
```
```javascript
tools.dialog(msg)
  //return element object
tools.post(url , data , readyFunction)

tools.get(url , data , readyFunction)

tools.formData(form)
  //return object
```
