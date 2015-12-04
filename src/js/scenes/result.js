var util = require('../util');
var Scene = require('../scene');
var sounds = require('../sounds');
var api = require('../api');

var ResultScene = function () {
  Scene.call(this, require('../../html/result.html'));
  this.on('shown', this.onshown);
}, p = ResultScene.prototype;

util.inherits(ResultScene, Scene);

p.onshown = function () {
  this.setEventHandlers();
  if($.cookie("resultType") == "Time"){
    this.fetchTimeAttackRankingData();
  }else{
	this.fetchScoreAttackRankingData();
  }
};

p.setEventHandlers = function () {

  var that = this;

  // about back button
  $(document).on('mousedown', '#back', function() {
  	$(this).css({
  		background: $(this).css('background').replace('.png', '_dummy.png')
  	});
  	sounds.sound_button();
  });

  $(document).on('mouseup', '#back', function() {
  	$(this).css({
  		background: $(this).css('background').replace('_dummy.png', '.png')
  	});
	that.game.transition('title', '名前を入力してゲームを始めよう！');
  });

  $(document).on('mouseout', '#back', function() {
  	$(this).css({
  		background: $(this).css('background').replace('_dummy.png', '.png')
  	});
  });
};

p.fetchTimeAttackRankingData = function () {
  api.getRanking($.cookie('userId'), $.cookie('roomId'), $.cookie('resultTime') / 1000, 0, 1).done(function(data) {
    console.log(data);
    var arraySize = Object.keys(data.ranking).length;

    for (var i = 0; i < arraySize; i++) {
      if (data.ranking[i].name == $.cookie('name')) {
        $('#ranking').append(
           '<div id="myscore">- 今回の成績 -<br>' + (i + 1) + '位</br>' +
           data.ranking[i].name + '</br>' +
           data.ranking[i].score + ' 秒</br><hr></div>');
      } else {
        $('#ranking').append(
          '<span>' + (i + 1) + '位</br>' +
          data.ranking[i].name + '</br>' +
          data.ranking[i].score + ' 秒</br><hr></span>');
      }
    }

    var v = $('#myscore').position().top - (100 * $('#main_in').width() / 1500);
    $('#rankingboard').scrollTop(v);
  });
};

p.fetchScoreAttackRankingData = function () {
  api.getRanking($.cookie('userId'), $.cookie('roomId'), $.cookie('AnswerNum'), 0, -1).done(function(data) {
    console.log(data);
    var arraySize = Object.keys(data.ranking).length;

    for (var i = 0; i < arraySize; i++) {
      if (data.ranking[i].name == $.cookie('name')) {
        $('#ranking').append(
           '<div id="myscore">- 今回の成績 -<br>' + (i + 1) + '位</br>' +
           data.ranking[i].name + '</br>' +
           parseInt(data.ranking[i].score) + ' 個</br><hr></div>');
      } else {
        $('#ranking').append(
          '<span>' + (i + 1) + '位</br>' +
          data.ranking[i].name + '</br>' +
          parseInt(data.ranking[i].score) + ' 個</br><hr></span>');
      }
    }

    var v = $('#myscore').position().top - (100 * $('#main_in').width() / 1500);
    $('#rankingboard').scrollTop(v);
  });
};

module.exports = ResultScene;
