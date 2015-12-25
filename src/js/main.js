// entry point

var $ = require('jquery');
require('jquery.cookie');
require('jquery.easing');
require('animsition');
require('./title_layout');

var Game = require('./game');
var Scenes = require('./scenes');
var game = window.game = new Game

game.scenes = {
  title:                new Scenes.Title,
  selectPlayMode:       new Scenes.SelectPlayMode,
  selectLimitTimeForSinglePlay: new Scenes.SelectLimitTimeForSinglePlay,
  playGameSingle:       new Scenes.PlayGameSingle,
  gameFinish:           new Scenes.GameFinish,
  selectMultiPlayMode:  new Scenes.SelectMultiPlayMode,
  result:			    new Scenes.Result,
};

game.transition('title', '自分の名前を入力してゲームを始めよう！', function () {
  require('./title_function');
});

$(function () {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1000,
    outDuration: 1000,
    linkElement: '.animsition-link'
  });
});
