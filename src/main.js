import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Buefy from 'buefy';
import './assets/styles/style.scss';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Buefy, {
  defaultIconPack: 'mdi',
  defaultContainerElement: '#content',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
