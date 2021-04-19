export const SET_FETCHED_STATE = 'SET_FETCHED_STATE';
export const UNSET_FETCHED_STATE = 'UNSET_FETCHED_STATE';
export const INIT_INVOICE_DETAIL_DATA = 'INIT_INVOICE_DETAIL_DATA';

// subtotal data mutation
export const SET_INVOICEDETAIL_MAIN_VALUE = 'SET_INVOICEDETAIL_MAIN_VALUE';
export const SET_INVOICEDETAIL_PIECERATE_VALUE =
  'SET_INVOICEDETAIL_PIECERATE_VALUE';
export const SET_INVOICEDETAIL_COMMISSION_VALUE =
  'SET_INVOICEDETAIL_COMMISSION_VALUE';
export const SET_INVOICEDETAIL_BRUTO_VALUE = 'SET_INVOICEDETAIL_BRUTO_VALUE';
export const SET_INVOICEDETAIL_DEPENDENT_VALUE =
  'SET_INVOICEDETAIL_DEPENDENT_VALUE';
export const SET_INVOICEDETAIL_NETTO_VALUE = 'SET_INVOICEDETAIL_NETTO_VALUE';

import dateFormatter from '../../utils/dateFormatter';

export default {
  [SET_FETCHED_STATE](state) {
    state.fetchedState = true;
  },
  [UNSET_FETCHED_STATE](state) {
    state.fetchedState = false;
  },
  [INIT_INVOICE_DETAIL_DATA](state, values) {
    const {
      id_karyawan,
      nama_karyawan,
      tanggal_awal,
      tanggal_akhir,
      tanggal_catat,
      total_kehadiran,
      total_periode,
      pengaturan_gaji,
      pengaturan_upah,
      pengerjaan_upah,
      komisi,
      tanggungan,
      keterangan,
    } = values;
    state.invoiceDetailEmployeeData = {
      id_karyawan,
      nama_karyawan,
      periode: `${dateFormatter(tanggal_awal)} - ${dateFormatter(
        tanggal_akhir
      )}`,
      total_kehadiran,
      total_periode,
      tanggal_catat: `${dateFormatter(tanggal_catat)}`,
    };
    state.invoiceDetailMainSettingData = [...pengaturan_gaji];
    state.invoiceDetailWageSettingData = [...pengaturan_upah];
    state.invoiceDetailWageProcessingSettingData = [...pengerjaan_upah];
    state.invoiceDetailCommissionData = [...komisi];
    state.invoiceDetailDependentsData = [...tanggungan];

    const mainInvoiceDetailSalaryCalc = [...pengaturan_gaji].reduce((total, item) => {
      return (total +=
        item.jenis === 'periode'
          ? item.nominal * total_periode
          : item.nominal * total_kehadiran);
    }, 0);

    const piecerateInvoiceDetailSalaryCalc = [...pengerjaan_upah].reduce(
      (total, itemProc) => {
        return (total +=
          pengaturan_upah.find(
            (item) => item.id === itemProc.pengaturan_upah_id
          ).nominal * itemProc.nominal);
      },
      0
    );

    const commissionInvoiceDetailSalaryCalc = [...komisi].reduce((total, item) => {
      return total += item.nominal;
    },0);

    state.invoiceDetailBrutoValue =
      mainInvoiceDetailSalaryCalc + piecerateInvoiceDetailSalaryCalc + commissionInvoiceDetailSalaryCalc;

    const dependentInvoiceDetailSalaryCalc = [...tanggungan].reduce((total, item) => {
      return total += item.nominal;
    }, 0);

    const nettoInvoiceDetailSalaryCalc =
      mainInvoiceDetailSalaryCalc +
      piecerateInvoiceDetailSalaryCalc +
      commissionInvoiceDetailSalaryCalc -
      dependentInvoiceDetailSalaryCalc;

    state.invoiceDetailNettoValue = nettoInvoiceDetailSalaryCalc;
    state.invoiceDetailInfo = keterangan;
  },
  [SET_INVOICEDETAIL_MAIN_VALUE](state, values) {
    state.invoiceDetailMainValue = values;
  },
  [SET_INVOICEDETAIL_PIECERATE_VALUE](state, values) {
    state.invoiceDetailPieceRateValue = values;
  },
  [SET_INVOICEDETAIL_COMMISSION_VALUE](state, values) {
    state.invoiceDetailCommission = values;
  },
  [SET_INVOICEDETAIL_BRUTO_VALUE](state) {
    // console.log(values);
    // const { key, value } = values;
    // let mainVal = key === 'main' ? value : 0;
    // let piecerateVal = key === 'piecerate' ? value : 0;
    // let commissionVal = key === 'commission' ? value : 0;
    // const sumBrutoInvoiceDetailIndicator =
    //   mainVal + piecerateVal + commissionVal;
      const sumBrutoInvoiceDetailIndicator =
        state.invoiceDetailMainValue +
        state.invoiceDetailPieceRateValue +
        state.invoiceDetailCommissionValue;
    state.invoiceDetailBrutoValue = sumBrutoInvoiceDetailIndicator;
  },
  [SET_INVOICEDETAIL_DEPENDENT_VALUE](state, values) {
    state.invoiceDetailDependentValue = values;
  },
  [SET_INVOICEDETAIL_NETTO_VALUE](state) {
    const sumNettoInvoiceDetailIndicator =
      state.invoiceDetailBrutoValue - state.invoiceDetailDependentValue;
    state.invoiceDetailNettoValue = sumNettoInvoiceDetailIndicator;
  },
};
