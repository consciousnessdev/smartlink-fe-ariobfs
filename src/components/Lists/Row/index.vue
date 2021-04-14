<template>
  <div class="row columns is-variable is-2">
    <div class="column is-8 label__value">
      <div class="labelvalue__header has-text-weight-bold">{{ label }}</div>
      <div class="labelvalue__content has-text-semifade">
        {{ `${value} x ${totalUnit} ${unit}` }}
      </div>
    </div>
    <div
      class="column is-2 is-flex is-align-items-center nominal__value has-text-weight-bold"
    >
      {{ getSummaryUnitCalc }}
    </div>
    <div
      class="column is-flex is-auto is-align-items-center is-justify-content-flex-end action"
      v-if="showIcon"
    >
      <icon-components icon-name="edit-icon"
        ><edit-icon :icon-stroke="iconColor"
      /></icon-components>
    </div>
  </div>
</template>

<script>
import IconComponents from '../../IconComponents';
import EditIcon from '../../IconComponents/EditIcon';
export default {
  name: 'RowListItem',
  components: {
    IconComponents,
    EditIcon,
  },
  props: {
    label: {
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
      type: String,
      required: false,
      default: '',
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    showIcon: {
      type: Boolean,
      default: false,
      required: false,
    },
    iconColor: {
      type: String,
      required: false,
    },
  },
  computed: {
    getSummaryUnitCalc() {
      if (this.value && this.totalUnit) {
        return Number(this.value) * Number(this.totalUnit);
      } else {
        return '';
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
</style>
