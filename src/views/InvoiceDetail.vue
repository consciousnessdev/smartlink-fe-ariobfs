<template>
  <div class="detail__invoice">
    <div class="detail__invoice-wrapper">
      <header-apps>
        <title-header> DETAIL FAKTUR </title-header>
        <content-header>
          <div class="invoicedetail__id has-text-weight-bold">
            {{ getDataChecker('getInvoiceDetailEmployeeData', 'id_karyawan') }}
          </div>
          <div
            class="invoicedetail__publishdate has-font-size-14 has-text-semifade"
          >
            Dicatat : {{ getDataChecker('getInvoiceDetailEmployeeData', 'tanggal_catat') }}
          </div>
        </content-header>
        <summary-header class="pt-1 pb-3">
          <div class="invoicedetail__person-wrapper">
            <div class="has-text-weight-bold invoicedetail__personname">
              {{ getDataChecker('getInvoiceDetailEmployeeData', 'nama_karyawan') }}
            </div>
            <div
              class="person__salaryperiode has-text-weight-normal has-font-size-14 has-text-semifade"
            >
              Periode {{ getDataChecker('getInvoiceDetailEmployeeData', 'periode') }}
            </div>
          </div>
        </summary-header>
      </header-apps>
      <salary-section
        section="detail"
        title="Gaji"
        :dataSalary="getInvoiceDetailMainSettingData"
        subtotalLabel="Gaji"
      />
      <piece-rate 
        section="detail" 
        title="Upah Borongan"
        :dataWageSetting="getInvoiceDetailWageSettingData"
        :dataWageProcessing="getInvoiceDetailWageProcessingSettingData"
        subtotalLabel="Upah"
      />

      <commission-section
        section="detail"
        title="Komisi"
        subtotalLabel="Komisi"
      />

      <bruto-salary-section :value="getInvoiceDetailBrutoValue" />

      <dependent-section
        section="detail"
        title="Tanggungan"
        dependentTotalLabel="Tanggungan Dibayar"
      />
      <netto-salary-section section="summary" :value="getInvoiceDetailNettoValue"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderApps from '../components/HeaderApps';
import ContentHeader from '../components/HeaderApps/ContentHeader.vue';
import SummaryHeader from '../components/HeaderApps/SummaryHeader.vue';
import TitleHeader from '../components/HeaderApps/TitleHeader';
import SalarySection from '../components/SalarySection';
import PieceRate from '../components/PieceRate';
import CommissionSection from '@/components/CommissionSection';
import BrutoSalarySection from '@/components/BrutoSalarySection';
import DependentSection from '@/components/DependentSection';
import NettoSalarySection from '@/components/NettoSalarySection';


export default {
  name: 'InvoiceDetail',
  props: {},
  components: {
    HeaderApps,
    TitleHeader,
    ContentHeader,
    SummaryHeader,
    SalarySection,
    PieceRate,
    CommissionSection,
    BrutoSalarySection,
    DependentSection,
    NettoSalarySection,
  },
  computed: {
    ...mapGetters('invoicedetailStore', [
      'getFetchedInvoiceDetailPayment',
      'getInvoiceDetailEmployeeData',
      'getInvoiceDetailMainSettingData',
      'getInvoiceDetailWageSettingData',
      'getInvoiceDetailWageProcessingSettingData',
      'getInvoiceDetailCommissionData',
      'getInvoiceDetailDependentsData',
      'getInvoiceDetailMainValue',
      'getInvoiceDetailCommissionValue',
      'getInvoiceDetailPieceRateValue',
      'getInvoiceDetailBrutoValue',
      'getInvoiceDetailDependentsValue',
      'getInvoiceDetailNettoValue',
      'getInvoiceDetailInfo',
    ])
  },
  methods: {
    getDataChecker(key, prop) {
      if (!this[key] || !this[key].hasOwnProperty(prop)) {
        return '-';
      }
      return this[key][prop];
    },
  }
};
</script>

<style lang="scss" scoped>
.invoicedetail {
  &__id,
  &__personname {
    font-size: 18px;
  }
}
</style>
