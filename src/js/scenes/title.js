var util = require('util');
var Scene = require('../scene');
var sounds = require('../sounds');

var TitleScene = function () {

  Scene.call(this, require('../../html/title.html'));

  this.on("shown",function(){
	sounds.sound_title_play();
  });

}

util.inherits(TitleScene, Scene)

module.exports = TitleScene;
