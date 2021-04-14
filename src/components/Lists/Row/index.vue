<template>
  <div class="row columns is-variable is-2">
    <template>
      <div class="column is-7 label__value" v-if="sublabel === ''">
        <div
          class="labelvalue__header"
          :class="!multiplier && totalUnit === '' ? '' : 'has-text-weight-bold'"
        >
          {{ label }}
        </div>
        <div class="labelvalue__content has-text-semifade">
          {{
            multiplier
              ? `${value} x ${totalUnit} ${unit}`
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

    <template>
      <div
        class="column is-4 is-flex nominal__value"
        :class="!multiplier && totalUnit === '' ? '' : 'has-text-weight-bold'"
        v-if="!multiplier"
      >
        <span :class="valueColor === 'danger' ? 'has-text-danger' : ''">{{ value }}</span>
      </div>
      <div
        class="column is-4 is-flex nominal__value has-text-weight-bold"
        v-else
      >
        {{ getSummaryUnitCalc }}
      </div>
    </template>
    <div class="column is-flex is-auto action" v-if="showIcon">
      <icon-components v-if="iconType === 'edit'" icon-name="edit-icon"
        ><edit-icon :icon-stroke="iconColor"
      /></icon-components>
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
export default {
  name: 'RowListItem',
  components: {
    IconComponents,
    EditIcon,
    DisabledIcon,
  },
  props: {
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
      type: String,
      required: false,
      default: '',
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    valueColor: {
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
