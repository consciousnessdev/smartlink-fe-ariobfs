<template>
  <div class="salary__invoice">
    <div v-if="getSalaryInvoiceLoading">
      <loading-spinners
        :isFullPage="true"
        :loadingState="getSalaryInvoiceLoading"
      />
    </div>
    <div v-else class="salary__invoice-wrapper">
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
            <div class="column presence__day has-text-semifade">
              Masuk {{getDataChecker('getSalaryEmployeeData', 'total_kehadiran')}} Hari
            </div>
            <div
              class="column is-flex is-justify-content-flex-end presence__setting has-text-primary"
            >
              Ubah Kehadiran
            </div>
          </div>
        </summary-header>
      </header-apps>
      <salary-section
        section="main"
        title="Gaji"
        :dataSalary="getSalaryMainSettingData"
        subtotalLabel="Gaji"
      />
      <!-- <piece-rate 
        section="main" 
        title="Upah Borongan" 
        :dataWageSetting="getSalaryWageSettingData"
        :dataWageProcessing="getSalaryWageProcessingSettingData"
        subtotalLabel="Upah"
      /> -->
      <!-- conditional if has no komisi -->
      <!-- <template v-if="komisi.length > 0"> -->
      <!-- <commission-section
        section="main"
        title="Komisi"
        subtotalLabel="Komisi"
      /> -->
      <!-- </template> -->

      <!-- conditional if has no tanggungan -->
      <!-- <template v-if="tanggungan.length > 0"> -->
      <!-- <dependent-section
        section="main"
        title="Tanggungan"
        subtitle="Karyawan ini memiliki tanggungan Rp 570.000"
        dependentTotalLabel="Tanggungan Dibayar"
      /> -->
      <!-- </template> -->
      <!-- <summary-salary /> -->
    </div>
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
import DependentSection from '@/components/DependentSection';
import SummarySalary from '@/components/SummarySalary';
import LoadingSpinners from '@/components/LoadingSpinners';

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
    DependentSection,
    SummarySalary,
    LoadingSpinners,
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters('salaryinvoiceStore', [
      'getSalaryInvoiceLoading',
      'getSalaryEmployeeData',
      'getSalaryMainSettingData',
      'getSalaryWageSettingData',
      'getSalaryWageProcessingSettingData',
      'getSalaryCommissionData',
      'getSalaryDependentsData',
      'getSalaryInvoiceStatus',
      'getSalaryInvoiceMessage',
    ]),
  },
  methods: {
    ...mapActions('salaryinvoiceStore', ['getSalaryInvoice']),
    getDataChecker(key, prop) {
      if (!this[key] || !this[key].hasOwnProperty(prop)) {
        return '-';
      }
      return this[key][prop];
    },
  },
  mounted() {
    this.getSalaryInvoice().then(() => {
    });
  },
};
</script>
