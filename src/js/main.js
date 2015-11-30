// entry point

var $ = require('jquery');
require('jquery.cookie');
require('jquery.easing');
require('animsition');
require('./title_layout');

var Game = require('./game');
var game = window.game = new Game
game.scenes = require('./scenes');

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
