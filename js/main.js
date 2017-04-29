$ (function() {

	$(".sliding-middle-out").hover(function() {
		var classId = $(this).attr('id');
		$("." + classId).css({"color": "#859bb1", "font-weight": "600"});
	},
	function() {
		var classId = $(this).attr('id');
		$("." + classId).css({"color": "#567", "font-weight": "500"});
	});

	$(".linkDiv").click(function() {
		window.location = $(this).find("a").attr("href"); 
	    return false;
	});

	$(".sliding-middle-out").click(function() {
		var body = $("html, body");
		var classId = $(this).attr('data-id');
		body.stop().animate({
			scrollTop:$("#" + classId + "-section").offset().top
		}, 1500);
	});

	$("#back-top").click(function() {
		var body = $("html, body");
		body.stop().animate({
			scrollTop:0}, "500", "swing")
	});

// Click on Nav Hamburger Menu

	function closeDrawer(){
		if ($(".navbar-drawer").hasClass("translate")){

			$(".navbar").parent().parent().removeClass("drawer-open")
			$(".navbar").parent().parent().next().fadeOut(function() {
				return $("this").css("display", "none")})

			$(".navbar-drawer").removeClass("translate")
			$("body").css("overflow","auto")
		}
	}

	function openDrawer(){
		if (!$(".navbar-drawer").hasClass("translate")){
			$(this).parent().parent().addClass("drawer-open")
			$(this).parent().parent().next().fadeIn(function(){
				return $(this).css("display","block")
			})
			$(".navbar-drawer").addClass("translate")
			$("body").css("overflow","hidden")
		}
	}

	$(".navbar").on("click", closeDrawer).on("click", openDrawer);
// Click Outside the Nav Drawer

	$(window).on("click", closeDrawer);

	$('.navbar-drawer, .navbar-drawer-bar').click(function(event){
	    event.stopPropagation();
	});

// Click on items inside Nav Drawer

	$(".navbar-drawer-item").click(function() {
		$(this).addClass("selected")
		$(".navbar-drawer-item").not(this).removeClass("selected")

		$(".navbar-drawer-bar").removeClass("drawer-open")
		$(this).closest("div").prev().fadeOut(function() {
			return $(this).css("display", "none")})

		$(this).closest("div").removeClass("translate")
		$("body").css("overflow","auto")

	});

})