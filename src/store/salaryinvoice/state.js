const state = {
  fetchState: false,
  isSalaryInvoiceLoading: true,
  salaryEmployeeData: {},
  salaryMainSettingData: [],
  salaryWageSettingData: [],
  salaryWageProcessingSettingData: [],
  salaryCommissionData: [],
  salaryDependentsData: [],

  salaryMainValue: 0,
  salaryPieceRateValue: 0,
  salaryCommission: 0,
  salaryBrutoValue: 0,
  salaryDependentValue: 0,
  salaryNettoValue: 0,
  salaryInvoiceStatus: 0,
  salaryInvoiceMessage: '',

  // modal state
  presenceSettingDlg: false,
  primarySalarySettingDlg: false,
  secondarySalarySettingDlg: false,
  commissionDlg: false,
  dependentDlg: false,
  dialogDataObj: {},
};

export default state;