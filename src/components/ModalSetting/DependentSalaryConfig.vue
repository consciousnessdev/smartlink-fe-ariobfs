<template>
  <form>
    <div class="modal-card" style="width: 360px">
      <header class="modal-card-head px-4 py-4 has-background-white">
        <p
          class="modal-card-title ml-3 dependentsalary__header-text has-text-centered has-text-weight-bold"
        >
          Bayar Tanggungan / Denda
        </p>
        <a
          class="button is-white px-0 py-0 dependentsalary__header-close"
          @click="$emit('close')"
        >
          <icon-components icon-name="close-icon"
            ><close-icon
          /></icon-components>
        </a>
      </header>
      <section class="modal-card-body py-4 dependentsalary__field">
          <section class="pb-2 dependentsalary__nama">
          <div
            class="pb-1 dependentsalary__namalabel has-text-semifade has-font-size-14"
          >
            Nama Tanggungan
          </div>
          <div class="dependentsalary__namafield">
            <b-field>
              <b-input
                v-model="dependentNama"
                placeholder="Nama Komisi"
              ></b-input>
            </b-field>
          </div>
        </section>
        <section class="pb-2 dependentsalary__nominal">
          <div
            class="pb-1 dependentsalary__nominallabel has-text-semifade has-font-size-14"
          >
            Nominal Pembayaran
          </div>
          <div class="dependentsalary__nominalfield">
            <b-field>
              <p class="control">
                <span class="button is-static">Rp</span>
              </p>
              <b-input
                class="is-default dependentsalary__nominalfield-input"
                v-model="dependentNominal"
                @keypress.native="handleNominal($event)"
              ></b-input>
            </b-field>
          </div>
        </section>


        <section class="pb-2 dependentsalary__info">
          <div
            class="pb-1 dependentsalary__infolabel has-text-semifade has-font-size-14"
          >
            Keterangan
          </div>
          <div class="dependentsalary__infofield">
            <b-field>
              <b-input
                class="dependentsalary__infofield-input"
                v-model="dependentInfo"
                placeholder="Contoh : Baju yang hilang warna merah"
              ></b-input>
            </b-field>
          </div>
        </section>
      </section>
      <footer
        class="modal-card-foot px-4 pb-4 pt-0 has-background-white dependentsalary__footer"
      >
        <b-button
          label="Hapus"
          expanded
          type="is-danger"
          outlined
          @click="clearDependentField"
          :disabled="dependentNama === '' || dependentNominal === 0 || dependentInfo === ''"
        />
        <b-button
          label="Simpan"
          expanded
          type="is-primary"
          native-type="submit"
          @click.prevent="submitDependentSalary"
          :disabled="dependentNama === '' || dependentNominal === 0 || dependentNominal === '' || dependentInfo === ''"
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
  name: 'DependentSalaryConfig',
  components: {
    IconComponents,
    CloseIcon,
  },
  computed: {
    ...mapGetters('salaryinvoiceStore', ['getDialogDataObj']),
  },
  data() {
    return {
      dependentDlgState: '',
      dependentNama: '',
      dependentNominal: 0,
      dependentInfo: '',
    };
  },
  mounted() {
    this.dependentDlgState = this.getDialogDataObj?.dialog_type || 'add';
    if (this.getDialogDataObj['dialog_type'] === 'edit') {
      const { nama, nominal, keterangan } = this.getDialogDataObj;
      this.dependentNama = nama;
      this.dependentNominal = nominal;
      this.dependentInfo = keterangan;
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
      'addDependentSalaryItem',
      'setDependentSalaryItem',
    ]),
    handleNominal(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      }
      return true;
    },
    clearDependentField() {
      this.dependentNama = '';
      this.dependentNominal = 0;
      this.dependentInfo = '';
    },
    submitDependentSalary() {
      const {
        dependentNama: nama,
        dependentNominal,
        dependentInfo: keterangan,
      } = this;
      const nominal = Number(dependentNominal);
      if (this.dependentDlgState === 'edit') {
        const { indexData: index } = this.getDialogDataObj;
        this.setDependentSalaryItem({ index, nama, nominal, keterangan });
      } else {
        this.addDependentSalaryItem({ nama, nominal, keterangan });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dependentsalary {
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
