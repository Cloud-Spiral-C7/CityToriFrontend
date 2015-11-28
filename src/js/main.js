var Vue = require('vue');
Vue.component('citytori-container', require('./container.vue'));
Vue.component('citytori-title', require('./title.vue'));

var app = new Vue({
  el: 'body'
});
