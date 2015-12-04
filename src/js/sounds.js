module.exports = {
	sound_button: function (){
		$("#sound_button").get(0).currentTime = 0;
		$("#sound_button").get(0).play();
	},
	sound_select_open: function (){
		$("#sound_select_open").get(0).currentTime = 0;
		$("#sound_select_open").get(0).play();
	},
	sound_answer_success: function (){
		$("#sound_answer_success").get(0).currentTime = 0;
		$("#sound_answer_success").get(0).play();
	},
	sound_answer_miss: function (){
		$("#sound_answer_miss").get(0).currentTime = 0;
		$("#sound_answer_miss").get(0).play();
	},
	sound_start: function (){
		$("#sound_start").get(0).currentTime = 0;
		$("#sound_start").get(0).play();
	},
	sound_end: function (){
		var that = this;

		that.sound_start();
		setTimeout(function(){
			that.sound_start();
		}, 100);
	},
	sound_title_play: function (){
		$("#sound_title").get(0).currentTime = 0;
		$("#sound_title").get(0).play();
	},
	sound_title_pause: function (){
		$("#sound_title").get(0).pause();
	},
	sound_gameplay_play: function (){
		$("#sound_gameplay").get(0).currentTime = 0;
		$("#sound_gameplay").get(0).play();
	},
	sound_gameplay_pause: function (){
		$("#sound_gameplay").get(0).pause();
	},

};
