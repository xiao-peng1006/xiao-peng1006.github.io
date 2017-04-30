$ (function() {

	$(".sliding-middle-out.hover-action").hover(function() {
		var classId = $(this).attr('data-id');
		$("." + classId).css({"color": "#859bb1", "font-weight": "600"});
	}, function() {
		var classId = $(this).attr('data-id');
		$("." + classId).css({"color": "#567", "font-weight": "500"});
	});

	$(".linkDiv").on("click", function() {
		window.location = $(this).find("a").attr("href"); 
	    return false;
	});

	$(".sliding-middle-out").on("click", function() {
		var body = $("html, body");
		var classId = $(this).attr('data-id');
		body.stop().animate({
			scrollTop:$("#" + classId + "-section").offset().top
		}, 1500);
	});

	$("#back-top").on("click touchend", function() {
		var body = $("html, body");
		body.stop().animate({
			scrollTop:0}, "500", "swing")
	});

// Click on Nav Hamburger Menu

	function closeDrawer(){
		$(".navbar").parent().parent().removeClass("drawer-open")
		$(".navbar").parent().parent().next().fadeOut(function() {
			return $(this).css("display", "none")})

		$(".navbar-drawer").removeClass("translate")
		$("body").css("overflow","auto")
	}

	function openDrawer(){
		$(".navbar").parent().parent().addClass("drawer-open")
		$(".navbar").parent().parent().next().fadeIn(function(){
			return $(this).css("display","block")
		})
		$(".navbar-drawer").addClass("translate")
		$("body").css("overflow","hidden")
	}

	$(".navbar").on("click", function() {
		if ($(".navbar-drawer").hasClass("translate")){
			closeDrawer();
		}
		else {
			openDrawer();
		}
	})

// Click Outside the Nav Drawer

	$(window).on("click", function(){
		if ($(".navbar-drawer").hasClass("translate")){
			closeDrawer();
		}
	})

	$('.navbar-drawer, .navbar-drawer-bar').on("click", function(event){
	    event.stopPropagation();
	});

// Click on items inside Nav Drawer

	$(".navbar-drawer-item").on("click", function() {
		$(this).addClass("selected")
		$(".navbar-drawer-item").not(this).removeClass("selected")

		$(".navbar-drawer-bar").removeClass("drawer-open")
		$(this).closest("div").prev().fadeOut(function() {
			return $(this).css("display", "none")})

		$(this).closest("div").removeClass("translate")
		$("body").css("overflow","auto")

	});

// Scroll when drawer is oen (mobile)
	$(document).scroll(function(){
		if ($(".navbar-drawer").hasClass("translate")){
			closeDrawer();
		}
	});
})