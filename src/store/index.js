import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import salaryinvoiceStore from './salaryinvoice';
import paymentdetailStore from './paymentdetail';

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ['salaryinvoiceStore', 'paymentdetailStore'],
});

export default new Vuex.Store({
  modules: {
    salaryinvoiceStore,
    paymentdetailStore,
  },
  plugins: [dataState],
});
