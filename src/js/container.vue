<script>
var $ = require('jquery');

module.exports = {
  data: function () {
    return {
      currentComponent: 'citytori-title',
      message: '自分の名前を入力してゲームを始めよう!'
    };
  },

  events: {
    'hook:created': function () {
      var bgCloudX = 0;
      var bgBirdX = 0;

      setInterval(function(){
        $("#js-bg-cloud").css({
          "background-position": bgCloudX++ + "px"
        });
      }, 150);

      setInterval(function(){
        $("#js-bg-bird").css({
          "background-position": bgBirdX++ + "px"
        });
      }, 50);
    },

    changeComponent: function (name) {
      this.currentComponent = name;
    },

    changeMessage: function (msg) {
      this.message = msg;
    }
  },

};
</script>

<template>
<div id="page-header">{{ message }}</div>
<div id="game-container" class="container">
  <div id="js-bg-cloud" class="bg cloud"></div>
  <div id="js-bg-bird" class="bg bird"></div>
  <component :is="currentComponent" transition="fade" transition-mode="out-in"></component>
</div>
<div id="page-footer">&copy; 2015 Cloud Spiral Team C7</div>
</template>

<style>
#page-header {
  position: absolute;
  width: 100%;
  padding: 8px 24px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: #fff;
  font-size: 20px;
}

#game-container {
  background-image: url('/img/background.png');
  background-size: cover;
  background-position: bottom;
}

#page-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  margin: 10px;
  color: rgba(0, 0, 0, 0.5);
}

.bg {
  background-repeat: repeat-x;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
}

.cloud {
  background-image: url('/img/background_cloud.png');
}

.bird {
	background-image: url("/img/background_bird.png");
}
</style>
