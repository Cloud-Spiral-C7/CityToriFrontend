var util = require('util');
var Scene = require('../scene');
var sounds = require("../sounds");
var ResultTimeAttackScene = function () {
  Scene.call(this, require('../../html/result_timeattack.html'));
}

util.inherits(ResultTimeAttackScene, Scene)

module.exports = ResultTimeAttackScene;

// about back button
$(document).on("mousedown", "#back", function(){
	$(this).css({
		"background": $(this).css("background").replace(".","_dummy.")	
	});
	sounds.sound_button();
});

$(document).on("mouseup", "#back", function(){
	$(this).css({
		"background": $(this).css("background").replace("_dummy.",".")	
	});
});

$(document).on("mouseout", "#back", function(){
	$(this).css({
		"background": $(this).css("background").replace("_dummy.",".")
	});
});
