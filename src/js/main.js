var Vue = require('vue');
Vue.component('citytori-container', require('./container.vue'));
Vue.component('citytori-title', require('./title.vue'));
Vue.component('citytori-gamemode', require('./gamemode.vue'));

var app = new Vue({
  data: {
    currentComponent: 'citytori-title'
  },
  el: 'body'
});
