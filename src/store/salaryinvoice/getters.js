const getters = {
  getSalaryInvoiceLoading: (state) => {
    return state.isSalaryInvoiceLoading;
  },
  getSalaryEmployeeData: (state) => {
    return state.salaryEmployeeData;
  },

  getSalaryMainSettingData: (state) => {
    return state.salaryMainSettingData;
  },
  getSalaryWageSettingData: (state) => {
    return state.salaryWageSettingData;
  },
  getSalaryWageProcessingSettingData: (state) => {
    return state.salaryWageProcessingSettingData;
  },
  getSalaryCommissionData: (state) => {
    return state.salaryCommissionData;
  },
  getSalaryDependentsData: (state) => {
    return state.salaryDependentsData;
  },
  getSalaryInvoiceStatus: (state) => {
    return state.salaryInvoiceStatus;
  },
  getSalaryInvoiceMessage: (state) => {
    return state.salaryInvoiceMessage;
  },
};

export default getters;
