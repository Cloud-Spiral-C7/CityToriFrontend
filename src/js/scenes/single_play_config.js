var Scene = require('../scene');
var util = require('../util');

var SinglePlayConfigScene = function () {
  Scene.call(this, require('../../html/config_single_play_mode.html'));
};

util.inherits(SinglePlayConfigScene, Scene);

module.exports = SinglePlayConfigScene;