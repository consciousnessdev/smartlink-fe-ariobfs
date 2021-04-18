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
  SECONDARY_SALARY_DLG_STATE,
  SET_SECONDARY_SALARY_STATE,
  COMMISSION_SALARY_DLG_STATE,
  DEPENDENT_SALARY_DLG_STATE,
  ADD_COMMISSION_SALARY_STATE,
  SET_COMMISSION_SALARY_STATE,
  ADD_DEPENDENT_SALARY_STATE,
  SET_DEPENDENT_SALARY_STATE,
  SET_INDEX_DATA_DLG,
  UNSET_INDEX_DATA_DLG,
  SET_MAIN_SALARY_VALUE,
  SET_PIECERATE_SALARY_VALUE,
  SET_COMMISSION_SALARY_VALUE,
  SET_BRUTO_SALARY_VALUE,
  SET_DEPENDENT_SALARY_VALUE,
  SET_NETTO_SALARY_VALUE,
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
  setSecondarySalaryDlg({ commit }, secondarySalaryDlgState) {
    commit(SECONDARY_SALARY_DLG_STATE, secondarySalaryDlgState);
  },
  setCommissionSalaryDlg({ commit }, commissionSalaryDlgState) {
    commit(COMMISSION_SALARY_DLG_STATE, commissionSalaryDlgState);
  },
  setDependentSalaryDlg({ commit }, dependentSalaryDlgState) {
    commit(DEPENDENT_SALARY_DLG_STATE, dependentSalaryDlgState);
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
  setSecondarySalaryCount({ commit }, secondarySalaryVal) {
    commit(SET_SECONDARY_SALARY_STATE, secondarySalaryVal);
    return new Promise((resolve, reject) => {
      commit(UNSET_INDEX_DATA_DLG, {});
      commit(SECONDARY_SALARY_DLG_STATE, false);
      resolve();
    }).catch((error) => {
      throw Error(error);
    });
  },
  addCommissionSalaryItem({ commit }, commissionItemObj) {
    commit(ADD_COMMISSION_SALARY_STATE, commissionItemObj);
    return new Promise((resolve, reject) => {
      commit(COMMISSION_SALARY_DLG_STATE, false);
      resolve();
    }).catch((error) => {
      throw Error(error);
    });
  },
  setCommissionSalaryItem({ commit }, commissionSalaryVal) {
    commit(SET_COMMISSION_SALARY_STATE, commissionSalaryVal);
    return new Promise((resolve, reject) => {
      commit(COMMISSION_SALARY_DLG_STATE, false);
      resolve();
    }).catch((error) => {
      throw Error(error);
    });
  },
  addDependentSalaryItem({ commit }, dependentItemObj) {
    commit(ADD_DEPENDENT_SALARY_STATE, dependentItemObj);
    return new Promise((resolve, reject) => {
      commit(DEPENDENT_SALARY_DLG_STATE, false);
      resolve();
    }).catch((error) => {
      throw Error(error);
    });
  },
  setDependentSalaryItem({ commit }, dependentSalaryVal) {
    commit(SET_DEPENDENT_SALARY_STATE, dependentSalaryVal);
    return new Promise((resolve, reject) => {
      commit(DEPENDENT_SALARY_DLG_STATE, false);
      resolve();
    }).catch((error) => {
      throw Error(error);
    });
  },

  // Calculate Subtotal Action
  setMainSalaryValue({ commit }, mainSalaryValue) {
    commit(SET_MAIN_SALARY_VALUE, mainSalaryValue);
    commit(SET_BRUTO_SALARY_VALUE);
  },
  setPieceRateSalaryValue({ commit }, pieceRateSalaryValue) {
    commit(SET_PIECERATE_SALARY_VALUE, pieceRateSalaryValue);
    commit(SET_BRUTO_SALARY_VALUE);
  },
  setCommissionSalaryValue({ commit }, commissionSalaryValue) {
    commit(SET_COMMISSION_SALARY_VALUE, commissionSalaryValue);
    commit(SET_BRUTO_SALARY_VALUE);
  },
  setBrutoSalaryValue({ commit }) {
    commit(SET_BRUTO_SALARY_VALUE);
  },
  setDependentsSalaryValue({ commit }, dependentSalaryValue) {
    commit(SET_DEPENDENT_SALARY_VALUE, dependentSalaryValue);
    commit(SET_NETTO_SALARY_VALUE);
  },
  setNettoSalaryValue({ commit }) {
    commit(SET_NETTO_SALARY_VALUE);
  },

  // Set Unsed Data Object for Populating Data to Dialog
  setIndexData({ commit }, commissionItemObj) {
    commit(SET_INDEX_DATA_DLG, commissionItemObj);
  },
  unsetIndexData({ commit }) {
    commit(UNSET_INDEX_DATA_DLG, {});
  },
};

export default actions;
