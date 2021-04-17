export const SET_FETCH_STATE = 'SET_FETCH_STATE';

export const SALARY_INVOICE_LOADING = 'SALARY_INVOICE_LOADING';
export const SALARY_INVOICE_DATA = 'SALARY_INVOICE_DATA';
export const SALARY_INVOICE_STATUS = 'SALARY_INVOICE_STATUS';
export const SALARY_INVOICE_ERROR = 'SALARY_INVOICE_ERROR';

// modal mutation
export const PRESENCE_DLG_STATE = 'PRESENCE_DLG_STATE';

export const SET_PRESENCE_DAY_STATE = 'SET_PRESENCE_DAY_STATE';

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
  },
  [SET_PRESENCE_DAY_STATE](state, values) {
    state.salaryEmployeeData['total_kehadiran'] = values;
  }
};
