module.exports = {
	// sound on button pushed
	sound_button: function (){
		$("#sound_button").get(0).currentTime = 0;
		$("#sound_button").get(0).play();
	}
};
