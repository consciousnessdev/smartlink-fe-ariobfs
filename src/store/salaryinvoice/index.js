import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

const salaryinvoiceStore = {
  namespace: true,
  state,
  actions,
  getters,
  mutations,
};

export default salaryinvoiceStore;
