export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const BANK_LIST_LOADING = 'BANK_LIST_LOADING';
export const BANK_LIST_DATA = 'BANK_LIST_DATA';
export const BANK_LIST_ERROR = 'BANK_LIST_ERROR';

export const PAYMENT_DETAIL_LOADING = 'PAYMENT_DETAIL_LOADING';
export const PAYMENT_DETAIL_FETCHED = 'PAYMENT_DETAIL_FETCHED';
export const PAYMENT_DETAIL_ERROR = 'PAYMENT_DETAIL_ERROR';

export default {
  [SET_FETCH_STATE](state, values) {
    state.fetchState = values;
  },
  [BANK_LIST_LOADING](state, values) {
    state.isBankListLoading = values;
  },
  [BANK_LIST_DATA](state, values) {
    const {data, status, messages} = values;
    state.isBankListLoading = false;
    state.bankListData= data;
    state.bankListStatus= status;
    state.bankListMessage= messages;
  },
  [BANK_LIST_ERROR](state, values) {
    const { status, messages } = values;
    state.isBankListLoading = false;
    state.bankListStatus= status;
    state.bankListMessage= messages;
  },

  [PAYMENT_DETAIL_LOADING](state, values) {
    state.loadingSubmitPaymentDetail = values;
  },
  [PAYMENT_DETAIL_FETCHED](state, values) {
    const { data, status, messages } = values;
    state.loadingSubmitPaymentDetail = false;
    state.submitPaymentDetailData = data;
    state.submitPaymentDetailStatus = status;
    state.submitPaymentDetailMessage = messages;
  },
  [PAYMENT_DETAIL_ERROR](state, values) {
    const { status, messages } = values;
    state.loadingSubmitPaymentDetail = false;
    state.submitPaymentDetailStatus = status;
    state.submitPaymentDetailMessage = messages;
  },
};
