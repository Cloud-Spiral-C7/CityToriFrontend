var Scene = require('../scene');
var util = require('../util');
var sounds = require('../sounds');


var GameFinishScene = function () {
  Scene.call(this, require('../../html/game_finish.html'));

  this.on('shown', this.onshown);
}, p = GameFinishScene.prototype;

util.inherits(GameFinishScene, Scene);

p.onshown = function (e) {

  sounds.sound_end();

  var that = this;

  setTimeout(function () {
    that.game.transition('result', '君の成績は何位かな？');
  }, 1000);
}

module.exports = GameFinishScene;
