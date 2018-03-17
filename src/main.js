// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.mixin({
  components: {
    FontAwesomeIcon,
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
