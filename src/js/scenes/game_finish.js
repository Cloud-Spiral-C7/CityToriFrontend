var Scene = require('../scene');
var util = require('../util');

var GameFinishScene = function () {
  Scene.call(this, require('../../html/game_finish.html'));

  this.on('shown', this.onshown);
}, p = GameFinishScene.prototype;

util.inherits(GameFinishScene, Scene);

p.onshown = function (e) {
  var that = this;

  setTimeout(function () {
    that.game.transition('resultTimeAttack', '君のタイムは何位かな？');
  }, 1000);
}

module.exports = GameFinishScene;
