import {
  SET_FETCH_STATE,
  SALARY_INVOICE_LOADING,
  SALARY_INVOICE_DATA,
  SALARY_INVOICE_STATUS,
  SALARY_INVOICE_ERROR,
  PRESENCE_DLG_STATE,
  SET_PRESENCE_DAY_STATE
} from './mutations';

import apiRequestUtil from '../../utils/apiRequest';

const actions = {
  getSalaryInvoice({ commit }, fetchState) {
      return new Promise((resolve, reject) => {
        commit(SALARY_INVOICE_LOADING, true);
        if(fetchState){
          commit(SALARY_INVOICE_LOADING, false);
        }else{
        apiRequestUtil
          .get('/inquiry')
          .then((response) => {
            if (response.status !== 200) {
              const { status, messages } = response;
              throw Error({ status, messages });
            }
            const { success: status, messages } = response.data;
            commit(SALARY_INVOICE_STATUS, {
              status,
              messages,
            });
            const { data } = response.data;
            commit(SALARY_INVOICE_DATA, data);
            commit(SET_FETCH_STATE, true);
            commit(SALARY_INVOICE_LOADING, false);
            resolve();
          })
          .catch((error) => {
            if (Object.keys(error).length > 0 && error.constructor === Object) {
              const { success: status, messages } = error;
              commit(SALARY_INVOICE_ERROR, {
                status,
                messages,
              });
            }
            reject(error);
          });}
      });
  },
  setPresenceDlg({ commit }, modalState) {
    commit(PRESENCE_DLG_STATE, modalState);
  },
  setPresenceDayCount({ commit }, presenceDatVal) {
    commit(SET_PRESENCE_DAY_STATE, presenceDatVal);
    return new Promise((resolve, reject) => {
      commit(PRESENCE_DLG_STATE, false);
      resolve();
    }).catch((error) => {
      reject(error);
    });
  },
};

export default actions;
