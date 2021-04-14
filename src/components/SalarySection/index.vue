<template>
  <section class="section py-0 px-0 salary__section">
    <div class="py-4 px-4 salary__list">
      <div class="has-text-weight-bold py-4 salarylist__header">Gaji</div>
      <div class="salarylist__item">
        <row label="Gaji Pokok" totalUnit="1" unit="periode" value="8000" showIcon />
        <row label="Uang Makan" totalUnit="22" unit="kehadiran" value="10000" showIcon />
        <row label="Uang Absen" totalUnit="22" unit="kehadiran" value="12000" showIcon />
        <row label="Uang Transport" totalUnit="22" unit="kehadiran" value="15000" showIcon />
        <row label="Uang Snack" totalUnit="22" unit="kehadiran" value="5000" showIcon />
      </div>
    </div>
    <div class="pt-0 pb-4 px-4 salary__subtotal">
      <div class="divider mb-4"></div>
      <div class="columns salary__subtotal-wrapper">
        <div class="column has-text-weight-bold">Subtotal Gaji</div>
        <div class="column has-text-weight-bold has-text-right">
          Rp {{ '2.524.000' }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Row from '../Lists/Row';
export default {
  name: 'SalarySection',
  components: {
    Row,
  },
};
</script>

<style lang="scss" scoped>
// Mixin
@import '../../assets/styles/mixins.scss';
.salary {
  &__section {
      @include border(bottom, 12px, solid, #eee);
  }
  &__subtotal {
    .divider {
      @include border(top, 2px, dashed, rgba(229, 229, 229, 0.5));
    }
  }
}
</style>
