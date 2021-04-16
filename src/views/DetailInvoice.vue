<template>
  <div class="detail__invoice">
    <div class="detail__invoice-wrapper">
      <header-apps>
        <title-header> DETAIL FAKTUR </title-header>
        <content-header>
          <div class="detailinvoice__id has-text-weight-bold">
            GJI200121280129001
          </div>
          <div
            class="detailinvoice__publishdate has-font-size-14 has-text-semifade"
          >
            Dicatat : 31 Januari 2021
          </div>
        </content-header>
        <summary-header class="pt-1 pb-3">
          <div class="detailinvoice__person-wrapper">
            <div class="has-text-weight-bold detailinvoice__personname">
              Bu Adara Olivia
            </div>
            <div
              class="person__salaryperiode has-text-weight-normal has-font-size-14 has-text-semifade"
            >
              Periode 01 Januari 2021 - 31 Januari 2021
            </div>
          </div>
        </summary-header>
      </header-apps>
      <salary-section
        section="detail"
        title="Gaji"
        :dataSalary="[]"
        subtotalLabel="Gaji"
      />
      <piece-rate section="detail" title="Upah Borongan" subtotalLabel="Upah" />
      <!-- conditional if has no komisi -->
      <!-- <template v-if="komisi.length > 0"> -->
      <commission-section
        section="detail"
        title="Komisi"
        subtotalLabel="Komisi"
      />
      <!-- </template> -->

      <!-- conditional if has no tanggungan -->
      <!-- <template v-if="tanggungan.length > 0"> -->
      <dependent-section
        section="detail"
        title="Tanggungan"
        subtitle="Karyawan ini memiliki tanggungan Rp 570.000"
        dependentTotalLabel="Tanggungan Dibayar"
      />
      <!-- </template> -->
      <netto-salary-section section="summary"/>
    </div>
  </div>
</template>

<script>
import HeaderApps from '../components/HeaderApps';
import ContentHeader from '../components/HeaderApps/ContentHeader.vue';
import SummaryHeader from '../components/HeaderApps/SummaryHeader.vue';
import TitleHeader from '../components/HeaderApps/TitleHeader';
import SalarySection from '../components/SalarySection';
import PieceRate from '../components/PieceRate';
import CommissionSection from '@/components/CommissionSection';
import DependentSection from '@/components/DependentSection';
import NettoSalarySection from '@/components/NettoSalarySection';
export default {
  name: 'DetailInvoice',
  props: {},
  components: {
    HeaderApps,
    TitleHeader,
    ContentHeader,
    SummaryHeader,
    SalarySection,
    PieceRate,
    CommissionSection,
    DependentSection,
    NettoSalarySection,
  },
};
</script>

<style lang="scss" scoped>
.detailinvoice {
  &__id,
  &__personname {
    font-size: 18px;
  }
}
</style>
