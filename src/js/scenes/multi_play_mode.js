var Scene = require('../scene');
var util = require('../util');

var MultiPlayModeScene = function () {
  Scene.call(this, require('../../html/select_multi_play_mode.html'));
};

util.inherits(MultiPlayModeScene, Scene);

module.exports = MultiPlayModeScene;
