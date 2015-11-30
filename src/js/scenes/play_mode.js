var Scene = require('../scene');
var util = require('../util');

var PlayModeScene = function () {
  Scene.call(this, require('../../html/select_play_mode.html'));
}

util.inherits(PlayModeScene, Scene);

module.exports = PlayModeScene;
