
// initial layout
$(document).ready(function(){
	var w = $(window).width();
	var h = $(window).height();
	if(w < h){
		$("#header-bk").css({
			"width": w,
			"height": (h -(2/3 * w))/2
		});
		$("#main").css({
			"height": 2/3 * w		
		});
		$("#main_in").css({
			"width": w, 
		})
		$("#footer-bk").css({
			"width": w,
			"height": (h -(10/15 * w))/2
		});

		$("#name").css({
			"font-size": w * 0.02
		})	
	}else{
		$("#header-bk").css({
			"width": w,
			"height": 100
		});
		$("#main").css({	
			"height": h - 100 - 100
		});
		$("#main_in").css({
			"width": 3/2 * (h - 100 - 100)
		});
		$("#footer-bk").css({
			"width": w,
			"height": 100	
		});

		$("#name").css({
			"font-size": 3/2 * (h - 100 - 100) * 0.02
		})
	}
});

// layout when resized
$(window).resize(function(){
	var w = $(window).width();
	var h = $(window).height();
	if(w < h){
		$("#header-bk").css({
			"width": w,
			"height": (h -(2/3 * w))/2
		});
		$("#main").css({
			"height": 2/3 * w		
		});
		$("#main_in").css({
			"width": w, 
		})
		$("#footer-bk").css({
			"width": w,
			"height": (h -(10/15 * w))/2
		});

		$("#name").css({
			"font-size": w * 0.02
		})	
	}else{
		$("#header-bk").css({
			"width": w,
			"height": 100
		});
		$("#main").css({	
			"height": h - 100 - 100
		});
		$("#main_in").css({
			"width": 3/2 * (h - 100 - 100)
		});
		$("#footer-bk").css({
			"width": w,
			"height": 100	
		});

		$("#name").css({
			"font-size": 3/2 * (h - 100 - 100) * 0.02
		})
	}
});

