<template>
  <div class="row columns mb-0 is-variable is-2">
    <!-- left side -->
    <template>
      <div class="column is-7 label__value" v-if="sublabel === ''">
        <div
          class="labelvalue__header"
          :class="!multiplier && totalUnit === '' ? '' : 'has-text-weight-bold'"
        >
          {{ label }}
        </div>
        <div
          v-if="unit !== 'commission' || unit !== 'commission'"
          class="labelvalue__content has-text-semifade"
        >
          {{
            multiplier
              ? `${parseNominal('', value, '')} x ${totalUnit} ${unit}`
              : `${totalUnit}${unit}`
          }}
        </div>
      </div>
      <div class="column is-7 label__value" v-else>
        <div class="labelvalue__header">
          {{ label }}
        </div>
        <div class="labelvalue__content has-text-semifade">
          {{ sublabel }}
        </div>
      </div>
    </template>

    <!-- right side -->
    <template>
      <div
        class="column is-flex nominal__value"
        :class="[
          !multiplier && totalUnit === '' ? '' : 'has-text-weight-bold',
          !showIcon ? 'is-5 has-text-weight-bold' : 'is-4',
        ]"
        v-if="!multiplier"
      >
        <span :class="valueColor ? textColorSetter(valueColor) : ''">
          {{ page === 'paymentdetail' ? 'Rp ' : '' }}
          {{ parseNominal('', value, '') }}
        </span>
      </div>
      <div
        class="column is-flex nominal__value"
        :class="
          !showIcon ? 'is-5 has-text-weight-bold' : 'is-4 has-text-weight-bold'
        "
        v-else
      >
        {{ parseNominal('', getSummaryUnitCalc, '') }}
      </div>
    </template>
    <div
      class="column is-flex is-auto action is-align-items-center"
      v-if="showIcon"
    >
      <a
        v-if="iconType === 'edit'"
        class="button is-text px-0 py-0 salaryedit__icon"
        @click="showDialogBySalaryUnit(unit, idSalary)"
      >
        <icon-components icon-name="edit-icon">
          <edit-icon :icon-stroke="iconColor" />
        </icon-components>
      </a>
      <icon-components
        v-else-if="iconType === 'disabled'"
        icon-name="disabled-icon"
        ><disabled-icon
      /></icon-components>
    </div>
  </div>
</template>

<script>
import IconComponents from '../../IconComponents';
import EditIcon from '../../IconComponents/EditIcon';
import DisabledIcon from '../../IconComponents/DisabledIcon';
import kursRupiahUtil from '../../../utils/kursRupiahUtil';
import { mapActions } from 'vuex';
export default {
  name: 'RowListItem',
  components: {
    IconComponents,
    EditIcon,
    DisabledIcon,
  },
  props: {
    idSalary: {
      type: Number,
      required: true,
      default: 0,
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    sublabel: {
      type: String,
      required: false,
      default: '',
    },
    unit: {
      type: String,
      required: false,
      default: '',
    },
    totalUnit: {
      required: false,
      default: '',
    },
    value: {
      type: Number,
      required: false,
      default: '',
    },
    valueColor: {
      type: String,
      required: false,
      default: '',
    },
    page: {
      type: String,
      required: false,
      default: '',
    },
    multiplier: {
      type: Boolean,
      required: false,
      default: false,
    },
    showIcon: {
      type: Boolean,
      default: false,
      required: false,
    },
    iconType: {
      type: String,
      default: '',
      required: false,
    },
    iconColor: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      colorTable: ['primary', 'secondary', 'danger', 'fatal'],
    };
  },
  computed: {
    getSummaryUnitCalc() {
      if (this.value && this.totalUnit) {
        return Number(this.value) * Number(this.totalUnit);
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions('salaryinvoiceStore', [
      'setPeriodeSalaryDlg',
      'setSecondarySalaryDlg',
      'setCommissionSalaryDlg',
      'setDependentSalaryDlg',
      'setIndexData',
    ]),
    textColorSetter(colorStr) {
      if (this.colorTable.indexOf(colorStr) !== -1) {
        return `has-text-${colorStr}`;
      } else {
        return '';
      }
    },
    parseNominal(type, value, cur) {
      // todo parse nominal such as : type(tanggungan whic use '(-)'), currency label(Rp ) & parse digit separator
      if (type === 'dependent') {
        return `(-) ${kursRupiahUtil(value, cur)}`;
      }
      return kursRupiahUtil(value, '');
    },
    showDialogBySalaryUnit(unitType, index) {
      const salaryUnitObj = {
        keyData: 'salaryMainSettingData',
        indexData: index,
      };
      switch (unitType) {
        case 'periode':
          this.setIndexData(salaryUnitObj);
          this.setPeriodeSalaryDlg(true);
          break;
        case 'kehadiran':
          this.setIndexData(salaryUnitObj);
          this.setSecondarySalaryDlg(true);
          break;
        case 'commission':
          const commissionUnitObj = {
            dialog_type: 'edit',
            keyData: 'salaryCommissionData',
            indexData: index,
          };
          this.setIndexData(commissionUnitObj);
          this.setCommissionSalaryDlg(true);
          break;
        case 'dependent':
          const dependentUnitObj = {
            dialog_type: 'edit',
            keyData: 'salaryDependentsData',
            indexData: index
          }
          this.setIndexData(dependentUnitObj);
          this.setDependentSalaryDlg(true);
          break;
        default:
          return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.label__value {
  .labelvalue {
    &__header {
      font-size: 14px;
    }
    &__content {
      font-size: 12px;
    }
  }
}
.salaryedit__icon {
  height: auto;
}
</style>
