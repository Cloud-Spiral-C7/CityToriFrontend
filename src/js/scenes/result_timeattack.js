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
	game.transition('selectPlayMode', 'ようこそ「' + $.cookie('name') + '」 プレイ人数を選択してね！');
});

$(document).on("mouseout", "#back", function(){
	$(this).css({
		"background": $(this).css("background").replace("_dummy.",".")
	});
});
