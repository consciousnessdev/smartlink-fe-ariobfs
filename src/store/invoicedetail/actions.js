import {
  SET_FETCHED_STATE,
  UNSET_FETCHED_STATE,
  INIT_INVOICE_DETAIL_DATA,
  SET_INVOICEDETAIL_MAIN_VALUE,
  SET_INVOICEDETAIL_PIECERATE_VALUE,
  SET_INVOICEDETAIL_COMMISSION_VALUE,
  SET_INVOICEDETAIL_BRUTO_VALUE,
  SET_INVOICEDETAIL_DEPENDENT_VALUE,
  SET_INVOICEDETAIL_NETTO_VALUE,
} from './mutations';

const actions = {
  setIsSubmittedData({ commit }) {
    commit(SET_FETCHED_STATE);
  },
  unsetIsSubmittedData({ commit }) {
    commit(UNSET_FETCHED_STATE);
  },
  setInvoiceDetailInitData({ commit }, invoiceDetailInitData) {
    return new Promise((resolve) => {
      commit(INIT_INVOICE_DETAIL_DATA, invoiceDetailInitData);
      commit(SET_FETCHED_STATE);
      resolve();
    });
  },
  setInvoiceDetailMainValue({ commit }, mainInvoiceDetailValue) {
    commit(SET_INVOICEDETAIL_MAIN_VALUE, mainInvoiceDetailValue);
    // commit(SET_INVOICEDETAIL_BRUTO_VALUE, {
    //   key: 'main',
    //   value: mainInvoiceDetailValue,
    // });
  },
  setInvoiceDetailPieceRateValue({ commit }, pieceRateInvoiceDetailValue) {
    commit(SET_INVOICEDETAIL_PIECERATE_VALUE, pieceRateInvoiceDetailValue);
    // commit(SET_INVOICEDETAIL_BRUTO_VALUE, {
    //   key: 'piecerate',
    //   value: pieceRateInvoiceDetailValue,
    // });
  },
  setInvoiceDetailCommissionValue({ commit }, commissionInvoiceDetailValue) {
    commit(SET_INVOICEDETAIL_COMMISSION_VALUE, commissionInvoiceDetailValue);
    // commit(SET_INVOICEDETAIL_BRUTO_VALUE, {
    //   key: 'commission',
    //   value: commissionInvoiceDetailValue,
    // });
  },
  // setInvoiceDetailBrutoValue({ commit }) {
  //   commit(SET_INVOICEDETAIL_BRUTO_VALUE);
  // },
  setInvoiceDetailDependentsValue({ commit }, dependentInvoiceDetailValue) {
    commit(SET_INVOICEDETAIL_DEPENDENT_VALUE, dependentInvoiceDetailValue);
    // commit(SET_INVOICEDETAIL_NETTO_VALUE, {
    //   key: 'dependent',
    //   value: dependentInvoiceDetailValue,
    // });
  },
  // setInvoiceDetailNettoValue({ commit }) {
  //   commit(SET_INVOICEDETAIL_NETTO_VALUE);
  // },
};

export default actions;
