const state = {
  fetchState: false,
  isSalaryInvoiceLoading: true,
  salaryEmployeeData: {},
  salaryMainSettingData: [],
  salaryWageSettingData: [],
  salaryWageProcessingSettingData: [],
  salaryCommissionData:[],
  salaryDependentsData:[],
  salaryBrutoValue: 0,
  salaryNettoValue: 0,
  salaryInvoiceStatus: 0,
  salaryInvoiceMessage:'',

  // modal state
  presenceSettingDlg: false,
  primarySalarySettingDlg: false,
  secondarySalarySettingDlg: false,
  commissionDlg: false,
  dependentDlg: false,
  
};

export default state;