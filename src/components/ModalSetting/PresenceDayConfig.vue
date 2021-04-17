<template>
  <form>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head px-4 py-4 has-background-white">
        <p
          class="modal-card-title ml-3 presenceday__header-text has-text-centered has-text-weight-bold"
        >
          Ubah Kehadiran
        </p>
        <!-- <button type="button" class="delete" /> -->
        <a
          class="button is-white px-0 py-0 presenceday__header-close"
          @click="$emit('close')"
        >
          <icon-components icon-name="close-icon"
            ><close-icon
          /></icon-components>
        </a>
      </header>
      <section class="modal-card-body">
        <div class="pb-1 fieldinfo__label has-text-semifade has-font-size-14">
          Durasi Keterlambatan
        </div>
        <div class="fieldinfo__input">
          <b-field>
            <b-numberinput
              controls-position="compact"
              type="is-normal"
              class="control__presence"
              min="1"
              v-model="presenceDayQty"
              placeholder="Hari"
              @input.native="handleNominal"
            ></b-numberinput>
          </b-field>
        </div>
      </section>
      <footer
        class="modal-card-foot px-4 pb-4 pt-0 has-background-white presenceday__footer"
      >
        <b-button
          label="Hapus"
          expanded
          type="is-danger"
          outlined
          @click="presenceDayQty = 1"
        />
        <b-button
          label="Simpan"
          expanded
          type="is-primary"
          native-type="submit"
          @click.prevent="submitPresence"
        />
      </footer>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import IconComponents from '../IconComponents';
import CloseIcon from '../IconComponents/CloseIcon';
export default {
  name: 'PresenceDayConfig',
  props: ['presenceDay'],
  components: {
    IconComponents,
    CloseIcon,
  },
  data() {
    return {
      presenceDayQty: 1,
    };
  },
  methods: {
    ...mapActions('salaryinvoiceStore', ['setPresenceDayCount']),
    handleNominal(event) {
      event.target.value = event.target.value.replace(/[^0-9]+/g, '');
    },
    submitPresence() {
      this.setPresenceDayCount(this.presenceDayQty);
    },
  },
  mounted() {
    this.presenceDayQty = this.presenceDay;
  },
};
</script>

<style lang="scss" scoped>
.presenceday {
  &__header {
    &-text {
      font-size: 16px;
    }
    &-close {
      height: auto;
    }
  }
  &__footer {
    border-top: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
