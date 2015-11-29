<script>
module.exports = {
  events: {
    'hook:created': function () {
      this.$dispatch('changeMessage', 'hoge');
    }
  }
};
</script>

<template>
<div id="playermode-container" class="row block-center">
  <div class="col-50">
    <div class="form">
      <p>1人でプレイ</p>
      <p class="player-icon-group">
        <i class="fa fa-male"></i>
      </p>
      <a href="#" class="form-button block">OK</a>
    </div>
  </div>

  <div class="col-50">
    <div class="form">
      <p>みんなでプレイ</p>
      <p class="player-icon-group">
        <i class="fa fa-male"></i><i class="fa fa-male"></i><i class="fa fa-male"></i><i class="fa fa-male"></i>
      </p>
      <a href="#" class="form-button block">OK</a>
    </div>
  </div>
</div>
</template>

<style>
#playermode-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 500px;
  height: 200px;
}

.player-icon-group {
  margin: 8px 0 16px 0;
  line-height: 1;
  font-size: 40px;
  text-shadow: #FF9663 2px 2px 0px, #FF9663 -2px 2px 0px,
             #FF9663 2px -2px 0px, #FF9663 -2px -2px 0px;
  letter-spacing: 2px;
}

.row::after {
  content: '';
  clear: both;
}

.col-50 {
  width: 50%;
  float: left;
  padding: 12px;
}
</style>
