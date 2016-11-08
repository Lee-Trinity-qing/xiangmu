	
	//加载内容
	$.ajax({
		type:"get",
		url:"json/data.json",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
		success:function(res){
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
		
//	设置轮播图
	
	






//加载market
	$.ajax({
		type:"get",
		url:"json/market.json",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
		success:function(data){
			var html = '';
			//alert(data.length)
			for (i=0;i<data.length;i++) {
				
				html += '<div class="marketl"><a class="marketlimg" href="#"><img id="market_l_img" src=img/'+data[i].jimg+'></a><div class="market_text"><div class=brands><img class="imgflag"  src=img/'+data[i].imgflag+'>'+data[i].brands+'</div><div class="markettitle"><a class="markettitlea" href="#">'+data[i].title+'</a></div><div class="markettips">'+data[i].tips+'</div><div class="marketspan">'+data[i].spanj+'</div><div><span class="marketlspan">'+data[i].pspan+'</span><del>'+data[i].del+'</del><a class="btnla"  href="#">'+data[i].btn+'</a></div></div></div>';
			}
			$(".markwarp").html(html);
			$(".marketlimg").mouseover(function(){
				$(this).find("#market_l_img").stop(true,false).animate({width:250,height:250,marginTop:-3,marginLeft:-7})
			});
			$(".marketlimg").mouseout(function(){
				$(this).find("#market_l_img").stop(true,false).animate({width:234,height:228,marginTop:0,marginLeft:0})
			})
				
		
		}
	});
	
	
	$.ajax({
		type:"get",
		url:"json/goods.json",
		success:function(goods){
			var html = '';
			for (i = 0; i < goods.length; i++) {
				var htmlulleft='';
				for (j = 0; j <goods[i].ul.length; j++) {
					htmlulleft += '<li><a href="#">'+goods[i].ul[j]+'</a></li>';
				}
				var htmlulbottom = '';
				//alert(goods[i].ulleft.length)
				for (k = 0; k <goods[i].ulleft.length; k++) {
				htmlulbottom += '<li><a href="#">'+goods[i].ulleft[k]+'</a></li>';	
				}
				var htmlmain = '';
				for (l = 0; l < goods[i].prolist.length; l++) {
					htmlmain += '<div class="baby-m-box"><div class="baby-m-img"><a href="#"><img class="jimg" src=img/'+goods[i].prolist[l].jimg+'></a><div class="baby-m-img-f"><img src=img/'+goods[i].prolist[l].imgflag+'>'+goods[i].prolist[l].brands+'</div></div><h3>'+goods[i].prolist[l].title+'</h3><div class="baby-m-price"><span>'+goods[i].prolist[l].pspan+'</span><del>'+goods[i].prolist[l].del+'</del></div></div>'
				}
				html += '<div class="commodity-hd"><div class="commodity-icon"></div><div class="commodity-wrap"><h2>'+goods[i].title+'</h2><span>'+goods[i].note+'</span><ul class="market-hd-ul">'+htmlulleft+'</ul></div></div><div class="baby-wrap"><div class="baby-left"><a class="baby-left-img" href="#"><img src=img/'+goods[i].imgleft+'></a><ul class="baby-l-ul">'+htmlulbottom+'</ul></div><div class="baby-middle">'+htmlmain+'</div><div class="baby-right"><a><img src=img/'+goods[i].imgright+'></a></div></div>';
			}
			$(".commodity").html(html);
			$(".baby-left").find("a").hover(function(){
				$(this).find("img").stop(true,false).animate({width:242,height:410,marginTop:-20,marginLeft:-10})
			},function(){
				$(this).find("img").stop(true,false).animate({width:220,height:376,marginTop:0,marginLeft:0})
			});
			$(".baby-m-img").hover(function(){
				$(this).stop(true,false).animate({marginLeft:-10})
			},function(){
				$(this).stop(true,false).animate({marginLeft:0})
			});
			$(".baby-right").find("a").hover(function(){
				$(this).find("img").stop(true,false).animate({width:440,height:550,marginTop:-25,marginLeft:-20})
			},function(){
				$(this).find("img").stop(true,false).animate({width:400,height:500,marginTop:-0,marginLeft:-0})
			});
		}
	});
	
	
	

	
		















	
	
	
	
	
	
	
	
	
	
	

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
		




