const getters = {
  getFetchState: (state) => {
    return state.fetchState;
  },
  getBankListLoading: (state) => {
    return state.isBankListLoading;
  },
  getBankListData: (state) => {
    return state.bankListData;
  },
  getBankListStatus: (state) => {
    return state.bankListStatus;
  },
  getBankListMessage: (state) => {
    return state.bankListMessage;
  },
  getSubmitPaymentDetailLoading: (state) => {
    return state.loadingSubmitPaymentDetail;
  },
  getSubmitPaymentDetailData: (state) => {
    return state.submitPaymentDetailData;
  },
  getSubmitPaymentDetailStatus: (state) => {
    return state.submitPaymentDetailStatus;
  },
  getSubmitPaymentDetailMessage: (state) => {
    return state.submitPaymentDetailMessage;
  }
};
export default getters;
