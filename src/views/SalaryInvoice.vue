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
        :dataSalary="[]"
      />
      <piece-rate section="main" title="Upah Borongan"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderApps from '@/components/HeaderApps';
import SalarySection from '@/components/SalarySection';
import PieceRate from '@/components/PieceRate';

export default {
  name: 'Home',
  components: {
    HeaderApps,
    SalarySection,
    PieceRate
  },
};
</script>