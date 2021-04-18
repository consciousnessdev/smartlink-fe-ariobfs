<template>
  <section class="section py-0 px-0 salary__section bottom--tickborder">
    <div class="py-4 px-4 salary__list">
      <div class="has-text-weight-bold py-4 salarylist__header">
        {{ title }}
      </div>
      <div class="salarylist__item">
        <row
          v-for="salary in dataSalary"
          :key="salary.id"
          :idSalary="salary.id"
          :label="salary.nama"
          :totalUnit="setMultiplierType(salary.jenis)"
          :unit="salary.jenis"
          :value="salary.nominal"
          :multiplier="true"
          :showIcon="section === 'main'"
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
          Rp {{ subTotalGaji }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Row from '../Lists/Row';
import kursRupiahUtil from '../../utils/kursRupiahUtil';
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
    dataSalary: {
      type: Array,
      required: true,
      default: [],
    },
  },
  computed: {
    ...mapGetters('salaryinvoiceStore', ['getPeriod', 'getPresenceDay']),
    subTotalGaji() {
      if(this.dataSalary.length > 0) {
        let subTotalVal = this.dataSalary.reduce((total, item) => {
          return total += item.jenis === 'periode' ? item.nominal * this.getPeriod : item.nominal * this.getPresenceDay
        }, 0)
        this.setMainSalaryValue(subTotalVal);
        return kursRupiahUtil(subTotalVal, '');
      }
      return 0;
    },
  },
  methods: {
    ...mapActions('salaryinvoiceStore', ['setMainSalaryValue']),
    setMultiplierType(currentType) {
      if (currentType === 'periode') {
        return this.getPeriod;
      }
      return this.getPresenceDay;
    },
  },
  watch: {
    subTotalGaji() {
      // console.log(newVal);
      // if(this.getSalaryBrutoValue !== 0) {
      //   if(this.getSalaryBrutoValue >= oldVal) {
      //     const newSalaryValue = (this.getSalaryBrutoValue - oldVal) + newVal;
      //     this.setBrutoSalaryValue(newSalaryValue);  
      //   }
      // }else{
      //   this.setBrutoSalaryValue(newVal);
      // }
    }
  }
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
