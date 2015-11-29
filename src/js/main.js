// entry point

var $ = require('jquery');
require('jquery.cookie');
require('jquery.easing');
require('animsition');
require('./title_layout');

var Game = require('./game');
var game = window.game = new Game

game.panels = {
	title: require('../html/title.html'),
	selectPlayMode: require('../html/select_play_mode.html'),
	selectSinglePlayMode: require('../html/select_single_play_mode.html'),
	configSinglePlayMode: require('../html/config_single_play_mode.html')
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
