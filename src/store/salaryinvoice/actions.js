import {
  SET_FETCH_STATE,
  SALARY_INVOICE_LOADING,
  SALARY_INVOICE_DATA,
  SALARY_INVOICE_STATUS,
  SALARY_INVOICE_ERROR,
  PRESENCE_DLG_STATE,
  SET_PRESENCE_DAY_STATE,
  PRIMARY_SALARY_DLG_STATE,
  SET_PRIMARY_SALARY_STATE,
  SET_INDEX_DATA_DLG,
  UNSET_INDEX_DATA_DLG,
} from './mutations';

import apiRequestUtil from '../../utils/apiRequest';

const actions = {
  // fetch salary action
  getSalaryInvoice({ commit }, fetchState) {
    return new Promise((resolve, reject) => {
      commit(SALARY_INVOICE_LOADING, true);
      if (fetchState) {
        commit(SALARY_INVOICE_LOADING, false);
      } else {
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
          });
      }
    });
  },

  // dialog modal action
  setPresenceDlg({ commit }, presenceDlgState) {
    commit(PRESENCE_DLG_STATE, presenceDlgState);
  },
  setPeriodeSalaryDlg({ commit }, periodeSalaryDlgState) {
    commit(PRIMARY_SALARY_DLG_STATE, periodeSalaryDlgState);
  },

  // dialog submit data action
  setPresenceDayCount({ commit }, presenceDayVal) {
    commit(SET_PRESENCE_DAY_STATE, presenceDayVal);
    return new Promise((resolve, reject) => {
      commit(PRESENCE_DLG_STATE, false);
      resolve();
    }).catch((error) => {
      throw Error(error);
    });
  },
  setPeriodeSalaryCount({ commit }, periodeSalaryVal) {
    commit(SET_PRIMARY_SALARY_STATE, periodeSalaryVal);
    return new Promise((resolve, reject) => {
      commit(UNSET_INDEX_DATA_DLG, {});
      commit(PRIMARY_SALARY_DLG_STATE, false);
      resolve();
    }).catch((error) => {
      throw Error(error);
    });
  },

  setIndexData({ commit }, { keyData, indexData }) {
    commit(SET_INDEX_DATA_DLG, {keyData, indexData});
  },
  unsetIndexData({ commit }) {
    commit(UNSET_INDEX_DATA_DLG, {});
  },
};

export default actions;
