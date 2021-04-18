export const SET_FETCH_STATE = 'SET_FETCH_STATE';

export const SALARY_INVOICE_LOADING = 'SALARY_INVOICE_LOADING';
export const SALARY_INVOICE_DATA = 'SALARY_INVOICE_DATA';
export const SALARY_INVOICE_STATUS = 'SALARY_INVOICE_STATUS';
export const SALARY_INVOICE_ERROR = 'SALARY_INVOICE_ERROR';

// modal mutation
export const PRESENCE_DLG_STATE = 'PRESENCE_DLG_STATE';
export const PRIMARY_SALARY_DLG_STATE = 'PRIMARY_SALARY_DLG_STATE';
export const SECONDARY_SALARY_DLG_STATE = 'SECONDARY_SALARY_DLG_STATE';
export const COMMISSION_SALARY_DLG_STATE = 'COMMISSION_SALARY_DLG_STATE';
export const DEPENDENT_SALARY_DLG_STATE = 'DEPENDENT_SALARY_DLG_STATE';

export const ADD_COMMISSION_SALARY_STATE = 'ADD_COMMISSION_SALARY_STATE';
export const ADD_DEPENDENT_SALARY_STATE = 'ADD_DEPENDENT_SALARY_STATE';

export const SET_PRESENCE_DAY_STATE = 'SET_PRESENCE_DAY_STATE';
export const SET_PRIMARY_SALARY_STATE = 'SET_PRIMARY_SALARY_STATE';
export const SET_SECONDARY_SALARY_STATE = 'SET_SECONDARY_SALARY_STATE';
export const SET_COMMISSION_SALARY_STATE = 'SET_COMMISSION_SALARY_STATE';
export const SET_DEPENDENT_SALARY_STATE = 'SET_DEPENDENT_SALARY_STATE';

// subtotal data mutation
export const SET_MAIN_SALARY_VALUE = 'SET_MAIN_SALARY_VALUE';
export const SET_PIECERATE_SALARY_VALUE = 'SET_PIECERATE_SALARY_VALUE';
export const SET_COMMISSION_SALARY_VALUE = 'SET_COMMISSION_SALARY_VALUE';
export const SET_BRUTO_SALARY_VALUE = 'SET_BRUTO_SALARY_VALUE';
export const SET_DEPENDENT_SALARY_VALUE = 'SET_DEPENDENT_SALARY_VALUE';
export const SET_NETTO_SALARY_VALUE = 'SET_NETTO_SALARY_VALUE';

// index data mutation
export const SET_INDEX_DATA_DLG = 'SET_INDEX_DATA_DLG';
export const UNSET_INDEX_DATA_DLG = 'UNSET_INDEX_DATA_DLG';

import dateFormatter from '../../utils/dateFormatter';

export default {
  [SET_FETCH_STATE](state, values) {
    state.fetchState = values;
  },
  [SALARY_INVOICE_LOADING](state, values) {
    state.isSalaryInvoiceLoading = values;
  },
  [SALARY_INVOICE_DATA](state, values) {
    const {
      id_karyawan,
      nama_karyawan,
      tanggal_awal,
      tanggal_akhir,
      total_kehadiran,
      total_periode,
      pengaturan_gaji,
      pengaturan_upah,
      pengerjaan_upah,
      komisi,
      tanggungan,
    } = values;
    state.salaryEmployeeData = {
      id_karyawan,
      nama_karyawan,
      periode: `${dateFormatter(tanggal_awal)} - ${dateFormatter(
        tanggal_akhir
      )}`,
      total_kehadiran,
      total_periode,
    };
    state.salaryMainSettingData = [...pengaturan_gaji];
    state.salaryWageSettingData = [...pengaturan_upah];
    state.salaryWageProcessingSettingData = [...pengerjaan_upah];
    state.salaryCommissionData = [...komisi];
    state.salaryDependentsData = [...tanggungan];
    state.salaryMainValue = 0;
    state.salaryPieceRateValue = 0;
    state.salaryCommission = 0;
    state.salaryBrutoValue = 0;
    state.salaryDependentValue = 0;
    state.salaryNettoValue = 0;
  },
  [SALARY_INVOICE_STATUS](state, values) {
    state.salaryInvoiceStatus = values.status;
    state.salaryInvoiceMessage = values.messages;
  },
  [SALARY_INVOICE_ERROR](state, values) {
    state.salaryInvoiceStatus = values.status;
    state.salaryInvoiceMessage = values.messages;
  },
  [PRESENCE_DLG_STATE](state, values) {
    state.presenceSettingDlg = values;
    state.primarySalarySettingDlg = false;
    state.secondarySalarySettingDlg = false;
    state.commissionDlg = false;
    state.dependentDlg = false;
  },
  [PRIMARY_SALARY_DLG_STATE](state, values) {
    state.primarySalarySettingDlg = values;
    state.presenceSettingDlg = false;
    state.secondarySalarySettingDlg = false;
    state.commissionDlg = false;
    state.dependentDlg = false;
  },
  [SECONDARY_SALARY_DLG_STATE](state, values) {
    state.secondarySalarySettingDlg = values;
    state.primarySalarySettingDlg = false;
    state.presenceSettingDlg = false;
    state.commissionDlg = false;
    state.dependentDlg = false;
  },
  [COMMISSION_SALARY_DLG_STATE](state, values) {
    state.commissionDlg = values;
    state.presenceSettingDlg = false;
    state.primarySalarySettingDlg = false;
    state.secondarySalarySettingDlg = false;
    state.dependentDlg = false;
  },
  [DEPENDENT_SALARY_DLG_STATE](state, values) {
    state.dependentDlg = values;
    state.presenceSettingDlg = false;
    state.primarySalarySettingDlg = false;
    state.secondarySalarySettingDlg = false;
    state.commissionDlg = false;
  },
  [ADD_COMMISSION_SALARY_STATE](state, values) {
    let populateCommissionState = [...state.salaryCommissionData];
    populateCommissionState.push(values);
    state.salaryCommissionData = populateCommissionState;
  },
  [ADD_DEPENDENT_SALARY_STATE](state, values) {
    let populateDependentState = [...state.salaryDependentsData];
    populateDependentState.push(values);
    state.salaryDependentsData = populateDependentState;
  },

  [SET_PRESENCE_DAY_STATE](state, values) {
    state.salaryEmployeeData['total_kehadiran'] = values;
  },
  [SET_INDEX_DATA_DLG](state, values) {
    const { keyData, indexData } = values;
    const parseStateObj = Object.assign(
      {},
      values.dialog_type && values.dialog_type === 'edit'
        ? {
            ...state[keyData][indexData],
            dialog_type: values.dialog_type,
            indexData,
          }
        : state[keyData].find((item) => item.id === indexData)
    );
    state.dialogDataObj = parseStateObj;
  },
  [UNSET_INDEX_DATA_DLG](state, values) {
    state.dialogDataObj = values;
  },
  [SET_PRIMARY_SALARY_STATE](state, values) {
    if (values.periode) {
      state.salaryEmployeeData['total_periode'] = values.periode;
    }
    const { id, value } = values;
    const matchIdIndex = state.salaryMainSettingData
      .map((item) => item.id)
      .indexOf(id);
    state.salaryMainSettingData[matchIdIndex]['nominal'] = Number(value);
  },
  [SET_SECONDARY_SALARY_STATE](state, values) {
    const { id, value } = values;
    const matchIdIndex = state.salaryMainSettingData
      .map((item) => item.id)
      .indexOf(id);
    state.salaryMainSettingData[matchIdIndex]['nominal'] = Number(value);
  },
  [SET_COMMISSION_SALARY_STATE](state, values) {
    const { index, nama, nominal } = values;
    let populateDataCommission = [...state.salaryCommissionData];
    populateDataCommission[index] = Object.assign({}, { nama, nominal });
    state.salaryCommissionData = [...populateDataCommission];
  },
  [SET_DEPENDENT_SALARY_STATE](state, values) {
    const { index, nama, nominal, keterangan } = values;
    let populateDataDependent = [...state.salaryDependentsData];
    populateDataDependent[index] = Object.assign(
      {},
      { nama, nominal, keterangan }
    );
    state.salaryDependentsData = [...populateDataDependent];
  },
  [SET_MAIN_SALARY_VALUE](state, values) {
    state.salaryMainValue = values;
  },
  [SET_PIECERATE_SALARY_VALUE](state, values) {
    state.salaryPieceRateValue = values;
  },
  [SET_COMMISSION_SALARY_VALUE](state, values) {
    state.salaryCommissionValue = values;
  },
  [SET_BRUTO_SALARY_VALUE](state) {
    const sumBrutoSalaryIndicator =
      state.salaryMainValue +
      state.salaryPieceRateValue +
      state.salaryCommissionValue;
    state.salaryBrutoValue = sumBrutoSalaryIndicator;
  },
  [SET_DEPENDENT_SALARY_VALUE](state, values) {
    state.salaryDependentValue = values;
  },
  [SET_NETTO_SALARY_VALUE](state) {
    const sumNettoSalaryIndicator =
      state.salaryBrutoValue - state.salaryDependentValue;
    state.salaryNettoValue = sumNettoSalaryIndicator;
  },
};
