<template>
  <div
    class="has-text-centered has-text-weight-bold py-4 px-4 salaryinvoice__header bottom--thinborder"
  >
    <div v-if="backArrow===true" class="columns">
      <div class="column is-3 has-text-left">
        <icon-components icon-name="leftarrow-icon"
          ><left-arrow />
        </icon-components>
      </div>
      <div class="column has-text-left">
        <slot> </slot>
      </div>
    </div>
    <template v-else>
      <slot> </slot>
    </template>
  </div>
</template>

<script>
import IconComponents from '../IconComponents';
import LeftArrow from '../IconComponents/LeftArrow';
export default {
  name: 'TitleHeader',
  props: {
    backArrow: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    IconComponents,
    LeftArrow,
  },
};
</script>

<style></style>
