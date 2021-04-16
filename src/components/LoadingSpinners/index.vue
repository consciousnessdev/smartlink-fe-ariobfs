<template>
  <b-loading :is-full-page="isFullPage" v-model="loadingState"></b-loading>
</template>

<script>
export default {
  name: 'LoadingSpinners',
  props: {
    isFullPage: {
      type: Boolean,
      required: true,
      default: true,
    },
    loadingState: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
};
</script>

<style></style>
