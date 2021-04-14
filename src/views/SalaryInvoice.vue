<template>
  <div class="salary__invoice">
    <div class="salary__invoice-wrapper">
      <header-apps
        section="main"
        title="Faktur Gaji"
        :personName="'Bu Adara Olivia'"
        :salaryPeriode="'01 Januari 2021 - 31 Januari 2021'"
        :presenceDay="'22'"
      />
      <salary-section
        section="main"
        title="Gaji"
        :dataSalary="[]"
        subtotalLabel="Gaji"
      />
      <piece-rate section="main" title="Upah Borongan" subtotalLabel="Upah" />
      <!-- conditional if has no komisi -->
      <!-- <template v-if="komisi.length > 0"> -->
      <commission-section
        section="main"
        title="Komisi"
        subtotalLabel="Komisi"
      />
      <!-- </template> -->

      <!-- conditional if has no tanggungan -->
      <!-- <template v-if="tanggungan.length > 0"> -->
      <dependent-section
        section="main"
        title="Tanggungan"
        subtitle="Karyawan ini memiliki tanggungan Rp 570.000"
        dependentTotalLabel="Tanggungan Dibayar"
      />
      <!-- </template> -->
      <summary-salary />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderApps from '@/components/HeaderApps';
import SalarySection from '@/components/SalarySection';
import PieceRate from '@/components/PieceRate';
import CommissionSection from '@/components/CommissionSection';
import DependentSection from '@/components/DependentSection';
import SummarySalary from '@/components/SummarySalary';

export default {
  name: 'Home',
  components: {
    HeaderApps,
    SalarySection,
    PieceRate,
    CommissionSection,
    DependentSection,
    SummarySalary
  },
};
</script>
