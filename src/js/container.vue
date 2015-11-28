<script>
var $ = require('jquery');

module.exports = {
  created: function () {
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
  }
};
</script>

<template>
<div class="container">
  <div id="js-bg-cloud" class="bg cloud"></div>
  <div id="js-bg-bird" class="bg bird"></div>
  <div class="footer">&copy; 2015 Cloud Spiral Team C7</div>
</div>
</template>

<style>
.container {
  position: relative;
  height: 100%;
  background-image: url('/img/background.png');
  background-size: cover;
  background-position: bottom;
}

.footer {
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
