const getters = {
  getFetchedInvoiceDetailPayment: (state) => {
    return state.fetchedState;
  },
  getInvoiceDetailEmployeeData: (state) => {
    return state.invoiceDetailEmployeeData;
  },
  getInvoiceDetailMainSettingData: (state) => {
    return state.invoiceDetailMainSettingData;
  },
  getInvoiceDetailWageSettingData: (state) => {
    return state.invoiceDetailWageSettingData;
  },
  getInvoiceDetailWageProcessingSettingData: (state) => {
    return state.invoiceDetailWageProcessingSettingData;
  },
  getInvoiceDetailCommissionData: (state) => {
    return state.invoiceDetailCommissionData;
  },
  getInvoiceDetailDependentsData: (state) => {
    return state.invoiceDetailDependentsData;
  },
  getInvoiceDetailMainValue: (state) => {
    return state.invoiceDetailMainValue;
  },
  getInvoiceDetailCommissionValue: (state) => {
    return state.invoiceDetailCommission;
  },
  getInvoiceDetailPieceRateValue: (state) => {
    return state.invoiceDetailPieceRateValue;
  },
  getInvoiceDetailBrutoValue: (state) => {
    return state.invoiceDetailBrutoValue;
  },
  getInvoiceDetailDependentsValue: (state) => {
    return state.invoiceDetailDependentValue;
  },
  getInvoiceDetailNettoValue: (state) => {
    return state.invoiceDetailNettoValue;
  },
  getInvoiceDetailInfo: (state) => {
    return state.invoiceDetailInfo;
  },
};

export default getters;
