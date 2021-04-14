<template>
  <section class="section py-0 px-0 header__apps">
    <div
      class="has-text-centered has-text-weight-bold py-4 salaryinvoice__header"
    >
      {{ title }}
    </div>
    <div
      class="py-4 px-4 person__header"
      :class="section === 'detail' ? 'dash--bordertop' : ''"
    >
      <div class="person__header-wrapper">
        <div class="has-text-weight-bold person__name">{{ personName }}</div>
        <div class="person__salaryperiode has-text-semifade">
          {{ salaryPeriode }}
        </div>
      </div>
    </div>
    <div
      v-if="presenceDay && getStringLength(presenceDay)"
      class="py-5 px-4 presence__header dash--bordertop"
    >
      <div class="presence__header-wrapper columns">
        <div class="column presence__day has-text-semifade">
          Masuk {{ presenceDay }} Hari
        </div>
        <div
          class="column is-flex is-justify-content-flex-end presence__setting has-text-primary"
        >
          Ubah Kehadiran
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderApps',
  props: {
    section: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    personName: {
      type: String,
      required: true,
    },
    salaryPeriode: {
      type: String,
      required: true,
    },
    invoiceCode: {
      type: String,
      required: false,
    },
    invoicePeriode: {
      type: String,
      required: false,
    },
    presenceDay: {
      type: String,
      required: false,
    },
  },
  methods: {
    getStringLength(str) {
      if (str.length > 0) return true;
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
// Mixin
@import '../../assets/styles/mixins.scss';

.header__apps {
  @include border(bottom, 12px, solid, #F2F5F7);
}

.salaryinvoice__header {
  // border mixin
  @include border(bottom, 2px, solid, #F2F5F7);
}

.person {
  &__salaryperiode {
    font-size: 14px;
  }
}

.presence {
  &__header {
    font-weight: 600;
    font-size: 14px;
  }
}

.dash--bordertop {
  @include border(top, 2px, dashed, rgba(229, 229, 229, 0.5));
}
</style>