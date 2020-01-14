import Vue from 'vue';
import App from './App.vue';
import VueScrollTo from 'vue-scrollto';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;

Vue.use(VueScrollTo, {
  duration: 500,
  easing: 'ease-out'
});

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
});

new Vue({
  render: h => h(App),
}).$mount('#app')
