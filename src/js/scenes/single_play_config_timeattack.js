var Scene = require('../scene');
var util = require('../util');

var SinglePlayConfigTimeAttackScene = function () {
  Scene.call(this, require('../../html/config_timeattack.html'));
};

util.inherits(SinglePlayConfigTimeAttackScene, Scene);

module.exports = SinglePlayConfigTimeAttackScene;
