var Scene = require('../scene');
var util = require('../util');

var SinglePlayConfigScoreAttackScene = function () {
  Scene.call(this, require('../../html/config_scoreattack.html'));
};

util.inherits(SinglePlayConfigScoreAttackScene, Scene);

module.exports = SinglePlayConfigScoreAttackScene;
