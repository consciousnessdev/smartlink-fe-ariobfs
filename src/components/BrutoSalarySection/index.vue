<template>
  <div class="py-3 px-4 bruto__salary topbottom--tickborder">
    <div class="columns bruto__salary-wrapper has-text-secondary">
      <div class="column is-5 has-text-weight-bold">Total Gaji Kotor</div>
      <div class="column has-text-weight-bold has-text-right">
        Rp {{ parseNominal(value) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import kursRupiahUtil from '../../utils/kursRupiahUtil';
export default {
  name: 'BrutoSalarySection',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  mounted(){
  },
  methods: {
    ...mapActions('salaryinvoiceStore', ['setNettoSalaryValue']),
    parseNominal(val) {
      if (val > 0) {
        return kursRupiahUtil(val, '');
      }
      return 0;
    },
  },
  watch: {
    value() {
      this.setNettoSalaryValue();
    }
  }
};
</script>

<style></style>
