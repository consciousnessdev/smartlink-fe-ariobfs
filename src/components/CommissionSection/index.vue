<template>
  <section class="section py-0 px-0 commission__section bottom--tickborder">
    <div
      class="has-text-weight-bold py-4 px-4 commissionsection__header bottom--thinborder"
    >
      {{ title }}
    </div>
    <!-- Add commission Button-->
    <div
      v-if="section === 'main'"
      class="pt-4 pb-0 px-4 commissionsection__button"
    >
      <div class="is-flex commissionsection__add">
        <div class="pr-2 commissionsection__addicon">
          <icon-components icon-name="add-icon">
            <add-icon />
          </icon-components>
        </div>
        <div
          class="commissionsection__addlabel has-text-primary has-font-weight-600"
        >
          Tambah komisi lain...
        </div>
      </div>
    </div>
    <!-- commission List-->
    <div class="py-4 px-4 commissionsection__list">
      <div class="commissionsectionlist__item">
        <row
          v-for="(commission) in getSalaryCommissionData"
          :key="commission.id"
          :label="commission.nama"
          :value="commission.nominal"
          :showIcon="section === 'main'"
          iconType="edit"
        />
      </div>
    </div>
    <div
      class="pt-0 pb-4 px-4 commissionsection__subtotal"
    >
      <div class="top--thindashborder mb-4"></div>
      <div class="columns commissionsection__subtotal-wrapper">
        <div class="column has-text-weight-bold">
          Subtotal {{ subtotalLabel }}
        </div>
        <div class="column has-text-weight-bold has-text-right">
          Rp {{ subTotalKomisi }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Row from '../Lists/Row';
import IconComponents from '../IconComponents';
import AddIcon from '../IconComponents/AddIcon';

import kursRupiahUtil from '../../utils/kursRupiahUtil';
export default {
  name: 'CommissionSection',
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
  components: {
    Row,
    IconComponents,
    AddIcon,
  },
  computed: {
    ...mapGetters('salaryinvoiceStore', [
      'getSalaryCommissionData',
    ]),
    subTotalKomisi() {
      if(this.getSalaryCommissionData.length > 0) {
        let subTotalVal = this.getSalaryCommissionData.reduce((total, item) => {
          return total += item.nominal;
        }, 0)
        return kursRupiahUtil(subTotalVal, '');
      }
      return 0;
    },
  },
};
</script>

<style lang="scss">
.nominal__value {
  align-items: flex-start;
  justify-content: flex-end;
}

.action {
  align-items: flex-start;
}
</style>
