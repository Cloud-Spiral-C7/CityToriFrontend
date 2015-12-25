var Scene = require('../scene');
var util = require('../util');

var SinglePlayModeScene = function () {
  Scene.call(this, require('../../html/select_limit_time_for_single_play.html'));
};

util.inherits(SinglePlayModeScene, Scene);

module.exports = SinglePlayModeScene;
