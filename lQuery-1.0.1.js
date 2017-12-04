// 将其封装成一个函数

function $(selector){
	var s = selector[0];

	if(s == "#"){
		var id = selector.substring(1);
		return document.getElementById(id);
	}else if(s == "."){
		var className = selector.substring(1);
		// var reg = /(^|\s)box1(\s|$)/i;
		var reg = eval("/(^|\\s)"+ className + "(\\s|$)/i")
		var aEle  = document.getElementsByTagName("*");
		var arr = [];
		for(var i=0;i<aEle.length;i++){
			if(reg.test(aEle[i].className)){
				arr.push(aEle[i]);
			}
		}
		return arr;
	}else{
		return document.getElementsByTagName(selector);
	}
}