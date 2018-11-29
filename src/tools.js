var tools = {
	dialog:function(msg){
		var id = 'dialog' + Math.round(Math.random() * 9999),
		div = document.createElement("div");
		div.setAttribute("id", id)
		div.setAttribute('class','overlay')
		div.setAttribute('onclick','tools.dialogClose(\''+id+'\')')
		document.body.appendChild(div)
		div.innerHTML = '<div class="dialog" onclick="window.event? window.event.cancelBubble = true : e.stopPropagation();"><div class="dialog-content">'+msg+'</div><footer class="dialog-footer"><button class="btn-close" onclick="tools.dialogClose(\''+id+'\')">关闭</button></footer></div>';
		return id
	},
	dialogClose:function(i){
		document.querySelector('#'+i).parentNode.removeChild(document.querySelector('#'+i))
	},
	load:function(){
		var id = 'loadlog' + Math.round(Math.random() * 9999),
		div = document.createElement("div");
		div.setAttribute("id", id)
		div.setAttribute('class','overlay-mask')
		div.setAttribute('onclick','tools.loadClose(\''+id+'\')')
		document.body.appendChild(div);
		div.innerHTML = '<div class="loadlog" onclick="window.event? window.event.cancelBubble = true : e.stopPropagation();">\
		<div class="spinner"><div class="cube1"></div><div class="cube2"></div></div>\
		</div>';
		return id
	},
	loadClose:function(i){
		document.querySelector('#'+i).parentNode.removeChild(document.querySelector('#'+i))
	},
	post:function(url , data , readyFunction){
		var xmlhttp,sendData = ''
		for(var index in data){
			sendData += index +'='+data[index]+'&'
		}
		if (window.XMLHttpRequest){
			//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp=new XMLHttpRequest()
		}else{
			// IE6, IE5 浏览器执行代码
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
		}
		/*// get
			xmlhttp.open("GET","/try/ajax/demo_get.php?t=" + Math.random(),true);
			xmlhttp.send();*/
		xmlhttp.open("POST",url,true)
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
		xmlhttp.send(sendData)

		xmlhttp.onreadystatechange=function(){
		  if(xmlhttp.readyState==4){
		  	readyFunction(xmlhttp.responseText,xmlhttp.status)
		  }
		}
	},
	get:function(url , data , readyFunction){
		var xmlhttp, sendData = '?'
		for(var index in data){
			sendData += index +'='+data[index]+'&'
		}
		if (window.XMLHttpRequest){
			//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
			xmlhttp=new XMLHttpRequest();
		}else{
			// IE6, IE5 浏览器执行代码
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
		}
		xmlhttp.open("GET",url+sendData,true)
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
		xmlhttp.send()
		xmlhttp.onreadystatechange=function()
		{
		  if(xmlhttp.readyState==4)
		  {
		  	readyFunction(xmlhttp.responseText,xmlhttp.status)
		  }
		}
	},
	formData:function(form){
		var form = document.querySelector(form),
		elements = {},
		tagElements = form.getElementsByTagName('input')
		for (var j = 0; j < tagElements.length; j++){
			if(tagElements[j].type == 'number' || tagElements[j].type == 'text'|| tagElements[j].type == 'mail'|| tagElements[j].type == 'password')
      	elements[tagElements[j].name] = tagElements[j].value
      else if(tagElements[j].type == 'radio'){
      	if(tagElements[j].checked)
      		elements[tagElements[j].name] = tagElements[j].value
    	}
    }
    var tagElements = form.getElementsByTagName('select');  
    for (var j = 0; j < tagElements.length; j++){ 
      elements[tagElements[j].name] = tagElements[j].value; 
    }
    return elements
	},
    test:function(){
	for(let i = 1; i<10; i++){
	 let t = ''
		for(let j = 1; j<=i; j++){
			t += j+' X '+i+" = "+i*j+'  '
		}
		console.log(t+'\n')
	}
}
}
