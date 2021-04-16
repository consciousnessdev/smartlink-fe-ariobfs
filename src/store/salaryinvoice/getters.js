const getters = {
  getSalaryInvoiceLoading: (state) => {
    return state.isSalaryInvoiceLoading;
  },
  // main data getter
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
  getSalaryBrutoValue: (state) => {
    return state.salaryBrutoValue;
  },
  getSalaryDependentsData: (state) => {
    return state.salaryDependentsData;
  },

  // specific data getter
  getPeriod: (state) => {
    return state.salaryEmployeeData['total_periode'];
  },
  getPresenceDay: (state) => {
    if (!state.salaryEmployeeData.hasOwnProperty('total_kehadiran')) {
      return 0;
    }
    return state.salaryEmployeeData['total_kehadiran'];
  },

  getSalaryInvoiceStatus: (state) => {
    return state.salaryInvoiceStatus;
  },
  getSalaryInvoiceMessage: (state) => {
    return state.salaryInvoiceMessage;
  },
};

export default getters;
