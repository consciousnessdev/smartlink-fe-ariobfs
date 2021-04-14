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
      <salary-section section="main" title="Gaji" :dataSalary="[]" subtotalLabel="Gaji" />
      <piece-rate section="main" title="Upah Borongan" subtotalLabel="Upah" />
      <commission-section
        section="main"
        title="Komisi"
        subtotalLabel="Komisi"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderApps from '@/components/HeaderApps';
import SalarySection from '@/components/SalarySection';
import PieceRate from '@/components/PieceRate';
import CommissionSection from '@/components/CommissionSection';

export default {
  name: 'Home',
  components: {
    HeaderApps,
    SalarySection,
    PieceRate,
    CommissionSection,
  },
};
</script>
