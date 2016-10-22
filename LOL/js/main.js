$(function(){

	//主导航
	$("#B-nav").mouseover(function() {
		$(this).next().show();
	}).next().hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});

	// banner轮播
	var i=0;
	var picWidth = $("#banner li").width();
	var t = setInterval(move,3000);
	// 过渡动画
	function showPic(){
		var turnLeft = -i*picWidth;
		$("#banner").stop().animate({"left":turnLeft},300);
		$("#triggerPic li").eq(i).addClass("itemOn").siblings().removeClass("itemOn");
	}
	// 轮播
	function move(){
		i++;
		if(i==$("#banner li").length){
			i=0;
		}
		showPic();
	}
	// 按钮切换
	$("#triggerPic li").mouseover(function() {
		clearInterval(t);
		var _index = $(this).index();
		i = _index;
		showPic();
		t = setInterval(move,3000);
	})



	// 视频展示
	$("#videoMore").click(function(){
		$(this).hide();
		$("#videoShow").show().css({"display":"block"});
		$(".videoList").css({"height":"auto"});
	})

	// 页面选项卡
	$(".tabChange li").each(function(index) {
		$(this).mouseover(function(){
			$(this).addClass("current").siblings().removeClass("current");
			$(".tabList").eq(index).show().siblings(".tabList").hide();
		});
	});

	// 视频中心遮罩
	$(".videoItem").hover(function(){
		$(this).find(".videoShadow2").show().end().find(".videoIcon").show();
	},function(){
		$(this).find(".videoShadow2").hide().end().find(".videoIcon").hide();
	});

})