var Scene = require('../scene');
var util = require('../util');

var SinglePlayModeScene = function () {
  Scene.call(this, require('../../html/select_single_play_mode.html'));
};

util.inherits(SinglePlayModeScene, Scene);

module.exports = SinglePlayModeScene;
