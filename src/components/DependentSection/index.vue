<template>
  <section class="section py-0 px-0 dependent__section bottom--tickborder">
    <div
      class="has-text-weight-bold py-4 px-4 dependentsection__header bottom--thinborder"
    >
      {{ title }}
      <div
        v-if="getSalaryDependentTotalValue > 0"
        class="subtitle has-text-semifade is-size-7"
      >
        {{
          `Karyawan ini memiliki tanggungan Rp ${getSalaryDependentTotalValue}`
        }}
      </div>
    </div>
    <!-- Add dependent Button-->
    <div
      v-if="section === 'main'"
      class="pt-4 pb-0 px-4 dependentsection__button"
    >
      <div 
        class="is-flex dependentsection__add"
        :class="getSalaryDependentsData.length === 0 ? 'pb-4':''"
        >
        <a
          class="button is-text py-0 px-0 dependentsection__addbutton"
          @click="showDialogDependent"
        >
          <span class="pr-2 dependentsection__addicon">
            <icon-components icon-name="add-icon">
              <add-icon />
            </icon-components>
          </span>
          <span
            class="dependentsection__addlabel has-text-primary has-font-weight-600"
          >
            Tambah pembayaran tanggungan...
          </span>
        </a>
      </div>
    </div>
    <div 
      class="dependentsection__list"
      :class="getSalaryDependentsData.length > 0 ? 'pt-4 px-4' : ''"
    >
      <div class="dependentsectionlist__item">
        <row
          v-for="(dependent, index) in getSalaryDependentsData"
          :key="dependent.id"
          :idSalary="index"
          unit="dependent"
          :label="dependent.nama"
          :sublabel="dependent.keterangan"
          :value="dependent.nominal"
          valueColor="danger"
          :showIcon="section === 'main'"
          iconType="edit"
          iconColor="danger"
        />
      </div>
    </div>
    <div class="pt-0 pb-4 px-4 dependentsection__subtotal bottom--thickborder">
      <div class="top--thindashborder mb-4"></div>
      <div class="columns dependentsection__subtotal-wrapper">
        <div class="column is-7 has-text-weight-bold">
          {{ dependentTotalLabel }}
        </div>
        <div
          class="column is-5 has-text-weight-bold has-text-right has-text-danger"
        >
          (-) Rp {{ getSalaryDependentTotalValue }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Row from '../Lists/Row';
import IconComponents from '../IconComponents';
import AddIcon from '../IconComponents/AddIcon';

import kursRupiahUtil from '../../utils/kursRupiahUtil';
export default {
  name: 'DependentSection',
  props: {
    section: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    dependentTotalLabel: {
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
    ...mapGetters('salaryinvoiceStore', ['getSalaryDependentsData']),
    getSalaryDependentTotalValue() {
      if (this.getSalaryDependentsData.length > 0) {
        let subTotalVal = this.getSalaryDependentsData.reduce((total, item) => {
          total += item.nominal;
          return total;
        }, 0);
        return kursRupiahUtil(subTotalVal, '');
      }
      return 0;
    },
  },
  methods: {
    ...mapActions('salaryinvoiceStore', [
      'setDependentSalaryDlg',
      'setDependentsSalaryValue',
    ]),
    showDialogDependent() {
      this.setDependentSalaryDlg(true);
    },
  },
};
</script>

<style lang="scss" scoped>
.dependentsection__subtotal-wrapper {
  font-size: 18px;
}
.dependentsection__addbutton {
  text-decoration: none !important;
  height: auto;
}
</style>
