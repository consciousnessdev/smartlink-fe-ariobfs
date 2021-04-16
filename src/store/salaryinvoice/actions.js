import {
  SALARY_INVOICE_LOADING,
  SALARY_INVOICE_DATA,
  SALARY_INVOICE_STATUS,
  SALARY_INVOICE_ERROR,
} from './mutations';

import apiRequestUtil from '../../utils/apiRequest';

const actions = {
  getSalaryInvoice({ commit }) {
    return new Promise((resolve, reject) => {
      commit(SALARY_INVOICE_LOADING, true);
      apiRequestUtil
        .get('/inquiry')
        .then((response) => {
          if (response.status !== 200) {
            const {status, messages} = response;
            throw Error({ status, messages });
          }
          const { success: status, messages } = response.data;
          commit(SALARY_INVOICE_STATUS, {
            status,
            messages,
          });
          const {data} = response.data;
          commit(SALARY_INVOICE_DATA, data);
          commit(SALARY_INVOICE_LOADING, false);
          resolve();
        })
        .catch((error) => {
          if(Object.keys(error).length > 0 &&error.constructor === Object){            
            const { success: status, messages } = error;
            commit(SALARY_INVOICE_ERROR, {
              status,
              messages,
            });
          }
          reject(error);
        });
    });
  },
};

export default actions;
