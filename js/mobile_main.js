$(function(){
	// 팝업
	$(".pop_close").click(function(e){
		e.preventDefault();
		$(".pop").hide();
	});

	// top 버튼
	$(".top").click(function(e){
		e.preventDefault();
		$("html").animate({"scrollTop":0}, 800);
	});
	$(window).scroll(function(){
		if($(window).scrollTop() > 50){
			$(".top").addClass("active");
		}
		else{
			$(".top").removeClass("active");
		}
	});
	// 검색 팝업
	$(".utils > .search").click(function(e){
		e.preventDefault();
		$(".search_pop").addClass("active");
	});
	$(".search_close").click(function(e){
		e.preventDefault();
		$(".search_pop").removeClass("active");
	});
	// 메뉴
	$(".tab").click(function(e){
		e.preventDefault();
		$(".menu").addClass("active");
		$("body").addClass("active");
		$(".dim").addClass("active");
	});
	$(".tab_close, .dim").click(function(e){
		e.preventDefault();
		$(".menu").removeClass("active");
		$("body").removeClass("active");
		$(".dim").removeClass("active");
		$("#nav > ul > li").removeClass("active");
		$("#nav ul ul").slideUp(300);
	});

	// 2뎁스
	$("#nav > ul > li").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active")){
			$("#nav > ul > li").removeClass("active");
			$("#nav ul ul").slideUp(300);
		}
		else {
			$("#nav > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#nav ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
	});
});
