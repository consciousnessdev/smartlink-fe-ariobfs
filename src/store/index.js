import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import salaryinvoiceStore from './salaryinvoice';

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ['salaryinvoiceStore'],
});

export default new Vuex.Store({
  modules: {
    salaryinvoiceStore,
  },
  plugins: [dataState],
});
