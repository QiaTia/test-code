(()=>{var cssStyle = document.createElement("style");cssStyle.innerHTML='.overlay{position:fixed;top:0;z-index:998;width:100%;height:100vh;background-color:rgba(44,44,44,.66)}.overlay>.dialog{position:absolute;top:calc(50% - 50px);left:calc(50% - 147.5px);z-index:9999;overflow:hidden;width:295px;height:auto;border:1px solid #393d49;border-radius:5px;background-color:#fff;box-shadow:1px 7px 14px -5px rgba(0,0,0,.3);transition:All .3s ease-in-out}.dialog>.dialog-content{position:relative;overflow-y:auto;margin:3px auto;padding:.7rem;padding-left:2pc;max-width:25rem;max-height:calc(100vh - 6rem);min-height:1.5rem;color:#c75050;font-size:1.1rem;line-height:1.5rem}.dialog>.dialog-footer,.dialog>.dialog-footer>.btn-close{padding-top:0;width:100%;height:2.3rem;border:none;background-color:#ddd;color:#444}.dialog>.dialog-footer>.btn-close:hover{background-color:#ccc}.overlay-mask>.loadlog{position:absolute;top:50%;left:50%;overflow:hidden;margin-top:-60px;margin-left:-60px;width:90pt;height:90pt;border-radius:8px;background-color:#fff;text-align:center}.overlay-mask .spinner{display:inline-block;margin-top:8px;width:4pc;height:4pc}.overlay-mask .cube1,.overlay-mask .cube2{width:30px;height:30px;background-color:#67cf22;-webkit-animation:cubemove 1.8s infinite ease-in-out;animation:cubemove 1.8s infinite ease-in-out}.overlay-mask .cube2{-webkit-animation-delay:-.9s;animation-delay:-.9s}@-webkit-keyframes cubemove{25%{-webkit-transform:translateX(42px) rotate(-90deg) scale(0.5)}50%{-webkit-transform:translateX(42px) translateY(42px) rotate(-180deg)}75%{-webkit-transform:translateX(0px) translateY(42px) rotate(-270deg) scale(0.5)}to{-webkit-transform:rotate(-360deg)}}@keyframes cubemove{25%{-webkit-transform:translateX(42px) rotate(-90deg) scale(0.5);transform:translateX(42px) rotate(-90deg) scale(0.5)}50%{-webkit-transform:translateX(42px) translateY(42px) rotate(-179deg);transform:translateX(42px) translateY(42px) rotate(-179deg)}50.1%{-webkit-transform:translateX(42px) translateY(42px) rotate(-180deg);transform:translateX(42px) translateY(42px) rotate(-180deg)}75%{-webkit-transform:translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);transform:translateX(0px) translateY(42px) rotate(-270deg) scale(0.5)}to{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}';document.body.appendChild(cssStyle)})()
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
	tex2voice:function (val, per){
		per = per?"&per="+per:'';
		let s =document.createElement('source'),a = document.createElement('audio');
		s.type ='audio/mp3';
		s.src = 'https://wx.qiatia.cn/admin/config/?ttsTex='+val+per;
		a.appendChild(s);
		a.autoplay = true;
		let item = 'tia'+ new Date().getTime()
		a.setAttribute('id',item)
		document.body.appendChild(a);
		return document.getElementById(item)
	}
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
