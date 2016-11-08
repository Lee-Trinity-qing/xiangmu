	
	//加载内容
	$.ajax({
		type:"get",
		url:"json/data.json",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
		success:function(res){
			//alert(1);
			var html = '';
			for(i = 0; i < res.length; i++){
				var htmlp = '';
				for(j = 0; j < res[i].list.length; j++){
					htmlp += '<a href = "#" class="promo_la">' + res[i].list[j] + '</a>'	;
				}
				var htmldiv = '';
				//alert(i+','+res[i].child.length);
				for (k = 0; k < res[i].child.length; k++) {
					//alert(i+','+res[i].child[k].title)
					var html_div_list = '';
					//alert(i + "," +res[i].child[k].list.length)
					for (l = 0; l < res[i].child[k].list.length; l++) {
						html_div_list += '<li class="li_menue_li"><a class="pdiv">' + res[i].child[k].list[l]	+ '</a></li>'
					}
					htmldiv += '<div class="li_title_menu"><h5 class="dtitleh5"><a href="#">' + res[i].child[k].title + '</a></h5><ul>' + html_div_list + '</ul></div>';
				}

				html += '<li class="promoli" id = '+'promoli' + i + '><h5 class="promolih"><a href="#">' + res[i].title + '</a></h5><p>'+ htmlp +  '</p><div class="promo_li_menu">'+ htmldiv + '</div></li>';
			}
			$(".promoul").html(html);
			$(".promoli").mouseover(function(){
				$(this).css("background", "red");
				$(this).find(".promo_li_menu").css("display", "block")
			});
			$(".promoli").mouseout(function(){
				$(this).css("background", "");
				$(this).find(".promo_li_menu").css("display", "none")
			});
		}
	});
		
//	加载baby商品列表
	$.ajax({
		type:"get",
		url:"json/mod.json",
		success:function(data){
			//alert(1)
			var html = '';
			for(i = 0; i < data.length; i++){
				var htmllist = '';
				//alert(data[i].list.length)
				
				for (j = 0; j <data[i].list.length; j++) {
					var htmltag = '';
					if (data[i].list[j].tags) {
						htmltag +='<span class="tagsspan">'+ data[i].list[j].tags+'</span>';
					}
					htmllist += '<div class="product"><a href="#" class="producta"><img src=img/'+data[i].list[j].jimg+'.jpg></a><h3><a href="#">'+data[i].list[j].title+'</a></h3><div class="tags">'+htmltag+'</div><div class=modprices><span class="snormal">'+data[i].list[j].normal+'</span><del class="sorigin">'+data[i].list[j].origin+'</del><div class="card"><div class="dcard">'+data[i].list[j].dcard+'</div></div></div></div>'
				}
				
				html += '<div class="modfloor"><div class="modhead">'+data[i].title+'</div><div class="modbody">'+htmllist+'</div></div>'
			}
			$(".modlist").html(html);
			$(".product").hover(function(){
				$(this).css("box-shadow","0px 5px 6px 0px #6B7885");
				$(this).find(".card").stop(true,false).slideDown().css("box-shadow","0px 4px 5px 0px #6B7885");
			},function(){
				$(this).css("box-shadow","");
				$(this).find(".card").stop(true,false).slideUp().css("box-shadow","");
			})
		}
	})
	
	
	







	
	
	

	
		















	
	
	
	
	
	
	
	
	
	
	

		function startMove(obj, json, func){
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){

				var bStop = true; 

				//1.取出该属性的初值
				for(var attr in json){
					var iCur = 0;
					if(attr == "opacity"){
						iCur = parseFloat(getStyle(obj, attr)) * 100;
					}else{
						iCur = parseInt(getStyle(obj, attr))
					}
					var speed = (json[attr] - iCur) / 8;
					//8 缩放系数,缓冲运动效果最好的缩放系数
					speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
					if(iCur != json[attr]){
						bStop = false;
					}
					if(attr == "opacity"){
						obj.style.filter = "alpha(opacity: " + (iCur + speed) + ")";
						obj.style.opacity = (iCur + speed) / 100;
					}else{
						obj.style[attr] = iCur + speed + "px";
					}
				}
				if(bStop){
					clearInterval(obj.timer);
					if(func){
						func();
					}
				}
			}, 30);
		}


		function getStyle(obj, attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj)[attr];
			}
		}
		




