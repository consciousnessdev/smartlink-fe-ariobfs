const getters = {
  getFetchState: (state) => {
    return state.fetchState;
  },
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
  getSalaryNettoValue: (state) => {
    return state.salaryNettoValue;
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
  getDialogDataObj: (state) => {
    return state.dialogDataObj;
  },

  getSalaryInvoiceStatus: (state) => {
    return state.salaryInvoiceStatus;
  },
  getSalaryInvoiceMessage: (state) => {
    return state.salaryInvoiceMessage;
  },

  // modal dialog getter
  getPresenceDlgState: (state) => {
    return state.presenceSettingDlg;
  },
  getPeriodeSalaryDlgState: (state) => {
    return state.primarySalarySettingDlg;
  },
  getSecondarySalaryDlgState: (state) => {
    return state.secondarySalarySettingDlg;
  }
  
};

export default getters;
