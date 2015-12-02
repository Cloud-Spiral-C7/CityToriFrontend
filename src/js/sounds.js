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
};
