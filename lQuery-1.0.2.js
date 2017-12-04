//封装对象
function $(selector){
	var s = selector[0];
	var lquery = new LQuery();
	var regHtml = /<[^<>]+>/g;
	var regHtmlName = /[a-z1-6]+/i;

	if(s == "#"){
		var id = selector.substring(1);
		var oEle = document.getElementById(id);
		lquery.date.push(oEle);
	}else if(s == "."){
		var className = selector.substring(1);
		// var reg = /(^|\s)box1(\s|$)/i;
		var reg = eval("/(^|\\s)"+ className + "(\\s|$)/i")
		console.log(reg);
		var aEle  = document.getElementsByTagName("*");
		for(var i=0;i<aEle.length;i++){
			if(reg.test(aEle[i].className)){
				lquery.date.push(aEle[i]);
			}
		}
	}
	//将html标签转化为lquery对象的Dom节点
	//0、判断传进来的是否为标签
	else if(regHtml.test(selector)){
		//1、取得标签名称
		var htmlName = selector.match(regHtmlName)[0];
		console.log(htmlName);
		//2、根据标签名称创建Dom节点
		var oEle = document.createElement(htmlName);
		//3、取得标签的内容
		var iStart = selector.indexOf(">")+1;
		var iEnd = selector.indexOf("<");
		var content = selector.substring(iStart,iEnd);
		//4、把内容加进新创建的Dom节点
		oEle.innerHTML = content;
		//5、将新创建的动漫dom节点添加到lquery对象中
		lquery.date.push(oEle);



	}

	else{
		var aEle = document.getElementsByTagName(selector);
		for(var i=0;i<aEle.length;i++){
			lquery.date.push(aEle[i]);
		}
	}
	return lquery;
}

function LQuery(){
	this.date = [];
}

LQuery.prototype = {

	constructor:LQuery,

	//获取Dom节点的个数
	size:function(){
		return this.date.length;
	},

	//获取对应索引的Dom节点
	get:function(index){
		if(this.date.length != 0){
			return this.date[index];
		}
	},

	//筛选元素，模拟过滤器
	eq:function(index){
		if(this.date.length !=0){
			var tmp = this.date[index];	
			this.date.length = 0;
			this.date.push(tmp);
		}
		return this;
	}
}