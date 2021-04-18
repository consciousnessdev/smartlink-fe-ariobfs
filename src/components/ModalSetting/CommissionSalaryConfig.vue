<template>
  <form>
    <div class="modal-card" style="width: 360px">
      <header class="modal-card-head px-4 py-4 has-background-white">
        <p
          class="modal-card-title ml-3 commissionsalary__header-text has-text-centered has-text-weight-bold"
        >
          Tambah / Ubah Komisi
        </p>
        <a
          class="button is-white px-0 py-0 commissionsalary__header-close"
          @click="$emit('close')"
        >
          <icon-components icon-name="close-icon"
            ><close-icon
          /></icon-components>
        </a>
      </header>
      <section class="modal-card-body commissionsalary__field">
        <section class="py-2 commissionsalary__nama">
          <div
            class="pb-1 commissionsalary__namalabel has-text-semifade has-font-size-14"
          >
            Nama Komisi
          </div>
          <div class="commissionsalary__namafield">
            <b-field>
              <b-input
                v-model="commissionNama"
                placeholder="Nama Komisi"
              ></b-input>
            </b-field>
          </div>
        </section>
        <section class="py-2 commissionsalary__nominal">
          <div
            class="pb-1 commissionsalary__nominallabel has-text-semifade has-font-size-14"
          >
            Nominal
          </div>
          <div class="commissionsalary__nominalfield">
            <b-field>
              <p class="control">
                <span class="button is-static">Rp</span>
              </p>
              <b-input
                class="commissionsalary__nominalfield-input"
                v-model="commissionNominal"
                @keypress.native="handleNominal($event)"
              ></b-input>
            </b-field>
          </div>
        </section>
      </section>
      <footer
        class="modal-card-foot px-4 pb-4 pt-0 has-background-white commissionsalary__footer"
      >
        <b-button
          label="Hapus"
          expanded
          type="is-danger"
          outlined
          @click="clearCommissionField"
          :disabled="commissionNama === '' || commissionNominal === 0"
        />
        <b-button
          label="Simpan"
          expanded
          type="is-primary"
          native-type="submit"
          @click.prevent="submitCommissionSalary"
          :disabled="commissionNama === '' || commissionNominal === 0 || commissionNominal === ''"
        />
      </footer>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import IconComponents from '../IconComponents';
import CloseIcon from '../IconComponents/CloseIcon';
export default {
  name: 'CommissionSalaryConfig',
  components: {
    IconComponents,
    CloseIcon,
  },
  computed: {
    ...mapGetters('salaryinvoiceStore', ['getDialogDataObj']),
  },
  data() {
    return {
      commissionDlgState: '',
      commissionNama: '',
      commissionNominal: 0,
    };
  },
  mounted() {
    this.commissionDlgState = this.getDialogDataObj?.dialog_type || 'add';
    if (this.getDialogDataObj['dialog_type'] === 'edit') {
      const { nama, nominal } = this.getDialogDataObj;
      this.commissionNama = nama;
      this.commissionNominal = nominal;
    }
  },
  filters: {
    // TODO: format currency on input
    formatCurrency(value) {
      return value;
    },
  },
  methods: {
    ...mapActions('salaryinvoiceStore', [
      'addCommissionSalaryItem',
      'setCommissionSalaryItem',
    ]),
    handleNominal(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      }
      return true;
    },
    clearCommissionField() {
      this.commissionNama = '';
      this.commissionNominal = 0;
    },
    submitCommissionSalary() {
      const { commissionNama: nama, commissionNominal } = this;
      const nominal = Number(commissionNominal);
      if (this.commissionDlgState === 'edit') {
        const {indexData : index} = this.getDialogDataObj;
        this.setCommissionSalaryItem({ index, nama, nominal });
      } else {
        this.addCommissionSalaryItem({ nama, nominal });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.commissionsalary {
  &__header {
    &-text {
      font-size: 16px;
    }
    &-close {
      height: auto;
    }
  }
  &__nominalfield {
    &-input {
      width: 100%;
    }
  }
  &__footer {
    border-top: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
