import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import salaryinvoiceStore from './salaryinvoice';
import paymentdetailStore from './paymentdetail';
import invoicedetailStore from './invoicedetail';

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ['salaryinvoiceStore', 'paymentdetailStore', 'invoicedetailStore'],
});

export default new Vuex.Store({
  modules: {
    salaryinvoiceStore,
    paymentdetailStore,
    invoicedetailStore,
  },
  plugins: [dataState],
});
