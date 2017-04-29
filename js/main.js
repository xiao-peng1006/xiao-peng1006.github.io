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
		var classId = $(this).attr('id');
		$("#" + classId + "-section").ScrollTo({
		    duration: 1000,
		    durationMode: "all"
		});
	});

	$("#back-top").click(function() {
		$("#p-content").ScrollTo({
		    duration: 500,
		    durationMode: "all"
		});
	});

// Click on Nav Hamburger Menu

	$(".navbar").click(function(event) {
		if ($(".navbar-drawer").hasClass("translate")){
			$(this).parent().parent().removeClass("drawer-open")
			$(this).parent().parent().next().fadeOut(function() {
				return $(this).css("display", "none")})

			$(".navbar-drawer").removeClass("translate")
			$("body").css("overflow","auto")
		} 
		else{
			$(this).parent().parent().addClass("drawer-open")
			$(this).parent().parent().next().fadeIn(function(){
				return $(this).css("display","block")
			})
			$(".navbar-drawer").addClass("translate")
			$("body").css("overflow","hidden")
		}
	});

// Click Outside the Nav Drawer

	$(window).click(function() {
		if ($(".navbar-drawer").hasClass("translate")){

			$(".navbar").parent().parent().removeClass("drawer-open")
			$(".navbar").parent().parent().next().fadeOut(function() {
				return $("this").css("display", "none")})

			$(".navbar-drawer").removeClass("translate")
			$("body").css("overflow","auto")
		}

	});

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