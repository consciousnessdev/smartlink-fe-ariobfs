<template>
  <div
    class="has-text-centered has-text-weight-bold py-4 px-4 salaryinvoice__header bottom--thinborder"
  >
    <div v-if="backArrow===true" class="columns">
      <div class="column is-3 has-text-left">
      <a
        class="button is-text px-0 py-0 paymentdetail__back"
        @click="navBack"
      >
        <icon-components icon-name="leftarrow-icon"
          ><left-arrow />
        </icon-components>
      </a>
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
    path: {
      type: String,
      required: false,
      default: '/'
    }
  },
  components: {
    IconComponents,
    LeftArrow,
  },
  methods: {
    navBack() {
      const {path} = this;
      this.$router.push({path});
    }
  }
};
</script>

<style lang="scss" scoped>
.paymentdetail__back {
  height: auto;
}
</style>
