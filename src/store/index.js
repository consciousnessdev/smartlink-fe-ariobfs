import Vue from 'vue';
import Vuex from 'vuex';
import salaryinvoiceStore from './salaryinvoice';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    salaryinvoiceStore,
  },
});
