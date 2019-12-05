$(function(){
	// 메뉴 GNB
	$("#nav").hover(
		function(){
			$(this).parent().addClass("over");
		},
		function(){
			$(this).parent().removeClass("over");
		}
	);
	$("nav > ul > li:first-child > a").focusin(function(){
		$("nav > ul").parents(".menu").addClass("over");
	});
	$("nav li:last-child li:last-child").focusout(function(){
		$("nav > ul").parents(".menu").removeClass("over");
	});
	$("nav > ul > li > a").focusin(function(){
		$(this).addClass("over");
	});
	$("nav li li:last-child").focusout(function(){
		$(this).parent().prev("a").removeClass("over");
	});
	$("nav > ul > li:first-child > a").focusin(function(){
		$("nav > ul").addClass("over");
	});
	$("nav li:last-child li:last-child").focusout(function(){
		$("nav > ul").removeClass("over");
	});

	// 키비주얼 버튼
	var n=0;
	$(".right").click(function(e){
		e.preventDefault();
		if(n < 3){
			n= n+1;
		}
		else{
			return;
		}
		distance=-1*n*100 +"%";
		$(".keyimg").css({"left":distance});
	});
	$(".left").click(function(e){
		e.preventDefault();
		if(n >= 1){
			n= n-1;
		}
		else{
			return;
		}
		distance=-1*n*100 +"%";
		$(".keyimg").css({"left":distance});
	});
});
