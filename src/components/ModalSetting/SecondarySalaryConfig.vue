<template>
  <form>
    <div class="modal-card" style="width: 360px">
      <header class="modal-card-head px-4 py-4 has-background-white">
        <p
          class="modal-card-title ml-3 secondarysalary__header-text has-text-centered has-text-weight-bold"
        >
          Ubah Uang Absen/Transport/Lembur
        </p>
        <a
          class="button is-white px-0 py-0 secondarysalary__header-close"
          @click="$emit('close')"
        >
          <icon-components icon-name="close-icon"
            ><close-icon
          /></icon-components>
        </a>
      </header>
      <section class="modal-card-body pb-2">
        <div class="pb-1 fieldinfo__label has-text-semifade has-font-size-14">
          Nominal
        </div>
        <div class="columns is-variable is-1 fieldinfo__input mb-0">
          <b-field class="column is-6">
            <p class="control">
              <span class="button is-static">Rp</span>
            </p>
            <b-input
              v-model="salaryNominal"
              @keypress.native="handleNominal($event)"
            ></b-input>
          </b-field>
          <b-field class="column is-1 is-flex is-align-items-center">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4.5L4 12.5"
                stroke="#6F7287"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 4.5L12 12.5"
                stroke="#6F7287"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </b-field>
          <b-field class="column">
            <p class="secondarysalary__presenceday">
              {{ getPresenceDay }} Hari
            </p>
          </b-field>
        </div>
        <div class="pb-1 fieldcalc__label pt-2 top--thindashborder">
          <div class="columns is-variable is-1">
            <div class="column has-text-left">Jumlah</div>
            <div class="column has-text-right">{{ calculateValue }}</div>
          </div>
        </div>
      </section>
      <footer
        class="modal-card-foot px-4 pb-4 pt-0 has-background-white secondarysalary__footer"
      >
        <b-button
          label="Simpan"
          expanded
          type="is-primary"
          native-type="submit"
          @click.prevent="submitSecondaySalary"
          :disabled="salaryNominal === ''"
        />
      </footer>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import IconComponents from '../IconComponents';
import CloseIcon from '../IconComponents/CloseIcon';
import kursRupiahUtil from '../../utils/kursRupiahUtil';
export default {
  name: 'SecondarySalaryConfig',
  components: {
    IconComponents,
    CloseIcon,
  },
  computed: {
    ...mapGetters('salaryinvoiceStore', ['getPresenceDay', 'getDialogDataObj']),
    calculateValue() {
      let totalMultiplier = this.salaryNominal * this.getPresenceDay;
      return kursRupiahUtil(totalMultiplier, 'Rp ');
    },
  },
  data() {
    return {
      salaryNominal: 0,
    };
  },
  mounted() {
    this.salaryNominal = this.getDialogDataObj['nominal'];
  },
  filters: {
    // TODO: format currency on input
    formatCurrency(value) {
      return value;
    },
  },
  methods: {
    ...mapActions('salaryinvoiceStore', ['setSecondarySalaryCount']),
    handleNominal(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      }
      return true;
    },
    submitSecondaySalary() {
      const { id } = this.getDialogDataObj;
      const { salaryNominal: value } = this;
      this.setSecondarySalaryCount({ id, value });
    },
  },
};
</script>

<style lang="scss" scoped>
.secondarysalary {
  &__header {
    &-text {
      font-size: 16px;
    }
    &-close {
      height: auto;
    }
  }
  &__presenceday {
    padding-bottom: calc(0.5em - 1px);
    padding-top: calc(0.5em - 1px);
  }
  &__footer {
    border-top: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.fieldcalc__label {
  font-size: 16px;
}
</style>
