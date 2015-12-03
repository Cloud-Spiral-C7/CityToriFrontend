var performLayout = function () {
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
			});
			$("#ranking").css({
				"font-size": (175 * (w) / 1500) + "%"
			});
		}else{
			$("#header-bk").css({
				"width": w,
				"height": 100
			});1
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
			});
			$("#ranking").css({
				"font-size": (175 * (h - 100 - 100) / 1000) + "%"
			});
		}
	};
//
// initial layout
$(document).ready(function() {
	game.onAfterTransition = function() {
		if (game.currentScene.id == 'playGameSingle') return;
		performLayout();
	};
});

// layout when resized
$(window).resize(function(){
	if (game.currentScene.id == 'playGameSingle') return;
	performLayout();
});
