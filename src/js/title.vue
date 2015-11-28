<script>
var $ = require('jquery');

module.exports = {};
</script>

<template>
<div id="title-container" class="container">
  <h1 class="title">シティとり</h1>
  <h2 class="sub-title">- A new shiritori game -</h2>
  <form class="form">
    <p>名前を入力してください</p>
    <input class="form-input" type="text"><br>
    <button class="form-button" type="submit">ゲームを始める</button>
  </form>
</div>
</template>

<style>
#title-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 400px;
}

#title-container > .title {
  text-align: center;
  color: #fff;
  font-size: 56px;
  text-shadow: 3px 4px #CCC;
}

#title-container > .sub-title {
  margin-bottom: 40px;
  text-align: center;
  color: #fff;
  text-shadow: 2px 3px #CCC;
}
</style>
