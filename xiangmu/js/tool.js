

function randomColor(){
	var color = "rgba(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255)
				+ "," + Math.round(Math.random() * 255) + ",1)";
	return color;
}

//当前有效的样式
function getStyle(element, style){
	if(element.currentStyle){
		return element.currentStyle[style];
	}else{
		return getComputedStyle(element)[style];
	}
}

function isTrueStr(username){
			var i = 0;
			for(; i < username.length; i++){
				if(username[i] >= "a" && username <= "z" || username[i] >= "A" && username <= "Z" || username[i] >= "0" && username <= "9" || username[i] == "_"){

				}else{
					break;
				}
			}
			if(i == username.length){
				return true;
			}else{
				return false;
			}
		}


		//封装函数 可以创建一个带文本的节点对象
		function createNodeWithText(type, text){
			var node = document.createElement(type);
			if(text){
				var textNode = document.createTextNode(text);
				node.appendChild(textNode);
			}
			return node;
		}

function removeSpaceNode(nodes){
			var newArr = []; //保留不是空白节点的元素
			//1.遍历所有的节点,判断是否符合标准
			for(var i = 0; i < nodes.length; i++){
				if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
					continue;
				}
				newArr.push(nodes[i]);
			}
			return newArr;
		}



		function removeSpaceNode3(parentNode){
			//1.遍历所有的节点,判断是否符合标准
			var nodes = parentNode.childNodes;
			for(var i = 0; i < nodes.length; i++){
				if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
					//删除该节点
					parentNode.removeChild(nodes[i]);
				}
			}
		}

		function removeSpaceNode2(nodes){
			//1.遍历所有的节点,判断是否符合标准
			for(var i = 0; i < nodes.length; i++){
				if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
					//删除该节点
					nodes[i].parentNode.removeChild(nodes[i]);
				}
			}
		}
				function insertAfter(newElement, oldElement){
			var parent = oldElement.parentNode;
			if(oldElement == parent.lastChild){
				parent.appendChild(newElement);
			}else{
				parent.insertBefore(newElement, oldElement.nextSibling);
			}
		}
		function getDate(n){
			var date = new Date();
			var day = date.getDate();
			date.setDate(day + n);
			return date;
		}

		function setCookie(name, value, expires, path, domain, isSecure){
			var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value); //进行cookie的拼接
			if(expires){
				cookieText += ";expires=" + expires;
			}
			if(path){
				cookieText += ";path=" + path;
			}
			if(domain){
				cookieText += ";domain=" + domain;
			}
			if(isSecure){
				cookieText += ";secure";
			}
			document.cookie = cookieText;
		}


		function getCookie(name){
			var cookieText = decodeURIComponent(document.cookie);
			var start = cookieText.indexOf(name + "=");
			if(start == -1){
				return;
			}else{
				var end = cookieText.indexOf(";", start);
				if(end == -1){
					end = cookieText.length;
				}
				var value = cookieText.substring(start, end);
				var arr = value.split("=");
				return arr[1];
			}	
		}

		function removeCookie(name){
			document.cookie = encodeURIComponent(name) + "= ;expires=" + new Date(0);
		}
	//随机 1 ~ 100
	//parseInt(Math.random() * 100);
	// 0~9 数字   65~90大写字母
	// 10~35 + 87 小写字母   97~ 122
	function testStr(n){
		var arr = [];
		for(var i = 0; i < n; i++){
			var num  = parseInt(Math.random() * 100);
			if(num >= 0 && num <= 9){
				arr.push(num);
			}else if(num >= 10 && num <= 35){
				arr.push(String.fromCharCode(num + 87));
			}else if(num >= 65 && num <= 90){
				arr.push(String.fromCharCode(num));
			}else{
				i--;
				continue;
			}
		}
		return arr.join("");
	}
			/*
		一、封装函数（20分）
请封装一个名字为$的函数，用于获取元素，主要能够实现以下功能：
根据id获取元素，如：$(“#container”) 用于获取id名为container的DOM元素。
根据类名获取元素，如：$(“.active”) 用于获取所有class名为active的DOM元素
根据标签名获取元素，如：$(“div”) 用于获取所有标签名为div的DOM元素
根据name属性获取元素，如：$(“name=hobby”) 用于获取所有name属性等于hobby的DOM元素
		*/
		function $(str){
			var newStr = str.substring(0, 5);
			if(newStr == "name="){
				return document.getElementsByName(str.substring(5, str.length));
			}else{
				if(str[0] == "#"){
					return document.getElementById(str.substring(1, str.length));
				}else if(str[0] == "."){
					return document.getElementsByClassName(str.substring(1, str.length));
				}else{
					return document.getElementsByTagName(str);
				}
			}

		}
//【注】绑定事件的兼容性写法
		function addEvent(obj, type, func){
			if(obj.addEventListener){
				obj.addEventListener(type, func, false);
			}else if(obj.attachEvent){
				obj.attachEvent("on" + type, func);
			}
		}

		function removeEvent(obj, type, func){
			if(obj.removeEventListener){
				obj.removeEventListener(type, func);
			}else if(obj.detachEvent){
				obj.detachEvent("on" + type, func);
			}
		}
		function drag(node_id, title_id){
			var node = document.getElementById(node_id);
			var node_title = document.getElementById(title_id);
			//设置一个指示器,当按下鼠标的时候,变成true,当松开鼠标的时候,变成false
			//声明两个变量,记录鼠标和块左上角的相对位置
			var isYes = false;
			var offsetX = 0;
			var offsetY = 0;
			node_title.onmousedown = function(even){
				isYes = true;
				var e = even || window.event;
				offsetX = e.clientX - parseInt(getStyle(node, "left"));
				offsetY = e.clientY - parseInt(getStyle(node, "top"));

			}

			document.onmousemove = function(even){
				var e = even || window.event;
				if(isYes){
					node.style.left = (e.clientX - offsetX) + "px";
					node.style.top = (e.clientY - offsetY) + "px";
				}
			}

			//松手的时候,要将isYes设为false

			node_title.onmouseup = function(){
				isYes = false;
			}
		}

