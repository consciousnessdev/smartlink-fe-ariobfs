<template>
  <div class="salary__invoice">
    <div v-if="getSalaryInvoiceLoading">
      <loading-spinners
        :isFullPage="true"
        :loadingState="getSalaryInvoiceLoading"
      />
    </div>
    <div v-else class="salary__invoice-wrapper">
      <!-- START Header : Information about name, periode & also presence day setting  -->
      <header-apps>
        <title-header> Faktur Gaji </title-header>
        <content-header>
          <div class="person__header-wrapper">
            <div class="has-text-weight-bold person__name">
              {{ getDataChecker('getSalaryEmployeeData', 'nama_karyawan') }}
            </div>
            <div
              class="person__salaryperiode has-font-size-14 has-text-semifade"
            >
              {{ getDataChecker('getSalaryEmployeeData', 'periode') }}
            </div>
          </div>
        </content-header>
        <summary-header class="py-5">
          <div class="presence__header-wrapper columns">
            <div class="column is-flex py-0 is-align-items-center presence__day has-text-semifade">
              Masuk
              {{ getDataChecker('getSalaryEmployeeData', 'total_kehadiran') }}
              Hari
            </div>
            <div
              class="column is-flex py-0 is-justify-content-flex-end presence__setting"
            >
              <b-button
                type="is-text"
                class="has-text-primary py-0 px-0 presenceday__dlgbutton"
                @click="setPresenceDlg(true)"
              >
                Ubah Kehadiran
              </b-button>
            </div>
          </div>
        </summary-header>
      </header-apps>
      <!-- END Header : Information about name, periode & also presence day setting  -->

      <!-- START Salary List : Information about salary & each setting  -->
      <salary-section
        section="main"
        title="Gaji"
        :dataSalary="getSalaryMainSettingData"
        subtotalLabel="Gaji"
      />
      <!-- END Salary List : Information about salary & each setting  -->

      <!-- START Piece Rate List : Information about piece rate & ? dialog  -->
      <piece-rate
        section="main"
        title="Upah Borongan"
        :dataWageSetting="getSalaryWageSettingData"
        :dataWageProcessing="getSalaryWageProcessingSettingData"
        subtotalLabel="Upah"
      />
      <!-- END Piece Rate List : Information about piece rate & ? dialog  -->

      <!-- START Commission Section : Information about commission list & add/edit dialog  -->
      <commission-section
        section="main"
        title="Komisi"
        subtotalLabel="Komisi"
      />
      <!-- END Commission Section : Information about commission list & add/edit dialog  -->

      <!-- START Bruto Salary Section : Information about bruto salary  -->
      <bruto-salary-section :value="getSalaryBrutoValue" />
      <!-- END Bruto Salary Section : Information about bruto salary  -->
      
      <!-- START Dependent Section : Information about dependent list & add/edit dialog  -->
      <dependent-section
        section="main"
        title="Tanggungan"
        dependentTotalLabel="Tanggungan Dibayar"
      />
      <!-- END Dependent Section : Information about dependent list & add/edit dialog  -->
      <!-- START Netto Salary Section : Information about netto salary  -->
      <netto-salary-section :value="getSalaryNettoValue" />
      <!-- END Netto Salary Section : Information about netto salary  -->
    </div>
    <!-- modal component -->
    <modal-setting />
    <!-- modal component -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

// @ is an alias to /src
import HeaderApps from '@/components/HeaderApps';
import TitleHeader from '@/components/HeaderApps/TitleHeader';
import ContentHeader from '@/components/HeaderApps/ContentHeader';
import SummaryHeader from '@/components/HeaderApps/SummaryHeader';
import SalarySection from '@/components/SalarySection';
import PieceRate from '@/components/PieceRate';
import CommissionSection from '@/components/CommissionSection';
import BrutoSalarySection from '@/components/BrutoSalarySection';
import DependentSection from '@/components/DependentSection';
import NettoSalarySection from '@/components/NettoSalarySection';
import LoadingSpinners from '@/components/LoadingSpinners';
import ModalSetting from '@/components/ModalSetting';

export default {
  name: 'Home',
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
    LoadingSpinners,
    ModalSetting,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters('salaryinvoiceStore', [
      'getFetchState',
      'getSalaryInvoiceLoading',
      'getSalaryEmployeeData',
      'getSalaryMainSettingData',
      'getSalaryWageSettingData',
      'getSalaryWageProcessingSettingData',
      'getSalaryCommissionData',
      'getSalaryDependentsData',
      'getSalaryMainValue',
      'getSalaryCommissionValue',
      'getSalaryPieceRateValue',
      'getSalaryBrutoValue',
      'getSalaryNettoValue',
      'getSalaryInvoiceStatus',
      'getSalaryInvoiceMessage',
    ]),
  },
  methods: {
    ...mapActions('salaryinvoiceStore', ['getSalaryInvoice', 'setPresenceDlg']),
    getDataChecker(key, prop) {
      if (!this[key] || !this[key].hasOwnProperty(prop)) {
        return '-';
      }
      return this[key][prop];
    },
  },
  mounted() {
    this.getSalaryInvoice(this.getFetchState);
  },
};
</script>

<style lang="scss" scoped>
.presenceday__dlgbutton {
  height: auto;
  widows: auto;
}
</style>