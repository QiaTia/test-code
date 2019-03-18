# 高中英语助手单词数据准备程序
### 高中的时候曾经写的一个电子书式的APP, 也就是看单词的APP, 还是曾经向我贡献了300快零花钱的, 本来大学的时候就曾经打算搞的, 结果一玩就根本停不下来了, 现在抽上班的空闲事件来写一下

## 大体思路
首先 对文本进行拆分储存, 第一步对回车进行拆分, 先把单词拆成一行一行的数组
```JavaScript
let dcs = dc.split("\n")
```
然后分析单词的结构,---------------- 好吧太乱了弄得我头大
```
//这样的
"ignore [iɡ'nɔ:] vt. 不理睬；忽视" 
//有这样的
"∆survey [sə:'vei, 'sə:vei] n. 调查；测验"
// 还有
"walk the dog  遛狗"
```

中间的音标也是一个问题, 不全是字母但是也不全不是字母, 头大. 想了一下 , 就做简单点, 把单词提出来, 以后使用TTS朗读比较好一点, 然后数据全放数据库也可以方便后期做字典查询.
```JavaScript
// 那就这样了 把单词提取出来, 有"["结束
dcReg = /[A-z]+(?=\[)/i
// 争对那种没有音标的,也就好做了 ,就把字母,或者里面一些数据提取出来, 反正不要汉字
dcReg = /[A-z\/\- (…)]+/
```

拆分出来, 发现章节是连在一起的, 那就来一个for循环, 申请两个变量, 当检测到当条数据中包含 'unit'时,把unit变量自增一下, 储存到对象中

### OK, 到这里也就差不多了, 就剩下把数据发送到数据库了, 简单就好, 我选择了for + post把数据逐条发送给php储存起来
```JavaScript
for(item in dcs){
	$.get('php-url',item,(res)=>{console.log(res)})
}

```

### 后端懒得说啥了, 就看下代码把, 本人比较菜, 代码也写的比较丑, 请少骂几句
```php
if(isset($_REQUEST['add'])){
	$stmt = $conn->prepare("INSERT INTO `dc_list` (`i`, `b`, `u`, `dc`, `t`) VALUES (? ,? ,? ,? ,?);");
	$i= $_REQUEST['dc_i'];
	$b= $_REQUEST['dc_b'];
	$u= $_REQUEST['dc_u'];
	$dc= $_REQUEST['dc_dc'];
	$t= $_REQUEST['add'];
  try{
  	$stmt->bind_param('issss', $i, $b, $u, $dc, $t);
  	$stmt->execute();
   }catch (PDOException $e) {
		die('失败，请重试 '.$time ."\n" .$e->getMessage());
	}
	echo 'I`m OK!'.$time;
	$stmt->close();
	$conn->close();
}
```
