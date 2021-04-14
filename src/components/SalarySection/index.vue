<template>
  <section class="section py-0 px-0 salary__section bottom--tickborder">
    <div class="py-4 px-4 salary__list">
      <div class="has-text-weight-bold py-4 salarylist__header">{{title}}</div>
      <div class="salarylist__item">
        <row
          label="Gaji Pokok"
          totalUnit="1"
          unit="periode"
          value="8000"
          :multiplier="true"
          showIcon
          iconType="edit"
        />
        <row
          label="Uang Makan"
          totalUnit="22"
          unit="kehadiran"
          value="10000"
          :multiplier="true"
          showIcon
          iconType="edit"
        />
        <row
          label="Uang Absen"
          totalUnit="22"
          unit="kehadiran"
          value="12000"
          :multiplier="true"
          showIcon
          iconType="edit"
        />
        <row
          label="Uang Transport"
          totalUnit="22"
          unit="kehadiran"
          value="15000"
          :multiplier="true"
          showIcon
          iconType="edit"
        />
        <row
          label="Uang Snack"
          totalUnit="22"
          unit="kehadiran"
          value="5000"
          :multiplier="true"
          showIcon
          iconType="edit"
        />
      </div>
    </div>
    <div class="pt-0 pb-4 px-4 salary__subtotal">
      <div class="top--thindashborder mb-4"></div>
      <div class="columns salary__subtotal-wrapper">
        <div class="column has-text-weight-bold">
          Subtotal {{ subtotalLabel }}
        </div>
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
  props: {
    section: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtotalLabel: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.nominal__value {
  align-items: center;
  justify-content: flex-end;
}

.action {
  align-items: center;
}
</style>
