var util = require('util');
var Scene = require('../scene');
var TitleScene = function () {
  Scene.call(this, require('../../html/title.html'));
}

util.inherits(TitleScene, Scene)

module.exports = TitleScene;
