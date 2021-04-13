<template>
  <div class="salary__invoice">
    <div class="salary__invoice-wrapper">
      <header-apps
        :title="'Faktur Gaji'"
        :personName="'Bu Adara Olivia'"
        :salaryPeriode="'01 Januari 2021 - 31 Januari 2021'"
        :presenceDay="'22'"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderApps from '@/components/HeaderApps';

export default {
  name: 'Home',
  components: {
    HeaderApps,
  },
};
</script>