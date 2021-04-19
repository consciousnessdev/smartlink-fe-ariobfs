<template>
  <div class="nettosalary__section">
    <div class="py-4 px-4 nettosalarysection__labelvalueinfo">
      <div class="columns mb-0 nettosalarysection__labelvalue">
        <div
          class="column is-7 nettosalarysection__label has-text-primary has-text-weight-bold is-size-6"
        >
          Total Gaji Bersih
          <icon-components icon-name="edit-icon"
            ><check-fill-icon
          /></icon-components>
        </div>

        <div
          class="column nettosalarysection__value has-text-primary has-text-weight-bold is-size-6 has-text-right"
        >
          Rp. {{ parseNominal(value) }}
        </div>
      </div>
      <div class="nettosalarysection__info is-size-7 has-text-semifade">
        Nominal akhir yang diterima karyawan setelah ditambah komisi dikurangi
        pembayaran tanggungan (jika ada).
      </div>
    </div>
    <div v-if="section === 'summary'" class="py-4 px-4 nettosalarysection__keterangan top--tickborder">
      <div class="has-text-semifade is-size-7">Keterangan</div>
      <div class="has-text-black">{{ getInvoiceDetailInfo }}</div>
    </div>
    <div class="pb-4 pt-0 px-4 nettosalarysection__button">
      <b-button v-if="section === 'summary'" class="is-secondary" expanded
        >Cetak</b-button
      >
      <b-button v-else class="is-primary" expanded @click="gotoPaymentDetail"
        >Berikutnya</b-button
      >
    </div>
  </div>
</template>

<script>
import IconComponents from '../IconComponents';
import CheckFillIcon from '../IconComponents/CheckFillIcon';
import kursRupiahUtil from '../../utils/kursRupiahUtil';
import { mapGetters } from 'vuex';
export default {
  name: 'NettoSalarySection',
  components: {
    IconComponents,
    CheckFillIcon,
  },
  props: {
    section: {
      type: String,
      required: false,
      default: '',
    },
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters('invoicedetailStore', ['getInvoiceDetailInfo'])
  },
  methods: {
    parseNominal(val) {
      if (val > 0) {
        return kursRupiahUtil(val, '');
      }
      return 0;
    },
    gotoPaymentDetail() {
      this.$router.push({ path: '/paymentdetail' });
    },
  },
};
</script>

<style></style>
