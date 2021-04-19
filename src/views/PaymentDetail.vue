<template>
  <div class="payment__detail">
    <div class="payment__detail-wrapper">
      <header-apps section="main">
        <title-header :backArrow="true" path="/">
          Detail Pembayaran
        </title-header>
        <content-header>
          <row
            :idSalary="parseRandomNum"
            page="paymentdetail"
            label="Subtotal Gaji"
            :value="getSalaryMainValue"
          />
          <row
            :idSalary="parseRandomNum"
            page="paymentdetail"
            label="Subtotal Upah"
            :value="getSalaryPieceRateValue"
          />
          <row
            :idSalary="parseRandomNum"
            page="paymentdetail"
            label="Subtotal Komisi"
            :value="getSalaryCommissionValue"
          />
          <row
            :idSalary="parseRandomNum"
            page="paymentdetail"
            label="Gaji Kotor"
            :value="getSalaryBrutoValue"
            valueColor="secondary"
          />
          <row
            :idSalary="parseRandomNum"
            page="paymentdetail"
            label="Tanggungan"
            :value="getSalaryDependentsValue"
            valueColor="fatal"
          />
        </content-header>
        <summary-header class="py-5">
          <div class="salarytotal__header-wrapper columns">
            <div
              class="column py-0 salarytotal__day has-text-primary has-text-weight-bold is-size-6"
            >
              Total Gaji Bersih
            </div>
            <div
              class="column py-0 is-flex is-justify-content-flex-end salarytotal__setting has-text-primary has-text-weight-bold is-size-6"
            >
              {{ parseNominal(getSalaryNettoValue) }}
            </div>
          </div>
        </summary-header>
      </header-apps>
      <div class="py-4 px-4 paymentdetail__field">
        <div class="py-4 paymentdetail__field-wrapper">
          <div class="mb-4 paymentfield__selectbanks">
            <div
              class="fieldselectbanks__label has-text-semifade has-font-size-14"
            >
              Bayar dari rekening
            </div>
            <div class="fieldselectbanks__input">
              <b-field>
                <!-- change select arrow color -->
                <b-tooltip
                  :label="
                    Object.keys(salaryBank).length === 0 &&
                    salaryBank.constructor === Object
                      ? 'Pilih Rekening Bank'
                      : `${salaryBank.bank}: ${salaryBank.nomor} - ${salaryBank.pemilik}`
                  "
                  position="is-top"
                >
                  <b-select
                    placeholder="Pilih Rekening Bank"
                    v-model="salaryBank"
                    expanded
                    required
                    :disabled="getSubmitPaymentDetailLoading"
                  >
                    <option
                      v-for="bankItem in getBankListData"
                      :key="bankItem.nomor"
                      :value="bankItem"
                    >
                      {{
                        `${bankItem.bank}: ${bankItem.nomor} - ${bankItem.pemilik}`
                      }}
                    </option>
                  </b-select>
                </b-tooltip>
              </b-field>
            </div>
          </div>
          <div class="mb-4 paymentfield__pickdate">
            <div
              class="fieldpickdate__label has-text-semifade has-font-size-14"
            >
              Dicatat Pada Tanggal
            </div>
            <div class="fieldpickdate__input">
              <b-field>
                <b-datepicker
                  class="datepicket__input"
                  locale="en-GB"
                  placeholder="Pilih Tanggal"
                  icon-pack="mdi"
                  icon-right="calendar-today"
                  position="is-top-right"
                  trap-focus
                  v-model="salaryDate"
                  :min-date="minDate"
                  :date-formatter="(date) => dateFormatter(date)"
                  :disabled="getSubmitPaymentDetailLoading"
                >
                </b-datepicker>
              </b-field>
            </div>
          </div>
          <div class="paymentfield__info">
            <div class="fieldinfo__label has-text-semifade has-font-size-14">
              Keterangan
            </div>
            <div class="fieldinfo__input">
              <b-field>
                <b-input
                  v-model="salaryInfo"
                  placeholder="Tambah Keterangan"
                  :disabled="getSubmitPaymentDetailLoading"
                ></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4 px-4 paymentbutton__submit">
        <b-button
          class="is-primary"
          expanded
          :disabled="
            getSubmitPaymentDetailLoading ||
            (Object.keys(salaryBank).length === 0 &&
              salaryBank.constructor === Object) ||
            salaryDate === null ||
            salaryInfo === ''
          "
          @click.prevent="submitDataPaymentDetail"
        >
          Submit Gaji
        </b-button>
        <!-- <b-button 
          class="is-primary" 
          expanded
          @click="testSnackbar"
        >
          Submit Gaji
        </b-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import dayjs from 'dayjs';
import HeaderApps from '@/components/HeaderApps';
import TitleHeader from '@/components/HeaderApps/TitleHeader';
import ContentHeader from '@/components/HeaderApps/ContentHeader';
import SummaryHeader from '@/components/HeaderApps/SummaryHeader';
import Row from '@/components/Lists/Row';
import kursRupiahUtil from '../utils/kursRupiahUtil';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
dayjs.extend(isSameOrAfter);
export default {
  name: 'PaymentDetail',
  components: {
    HeaderApps,
    TitleHeader,
    ContentHeader,
    SummaryHeader,
    Row,
  },
  computed: {
    ...mapGetters('salaryinvoiceStore', [
      'getSalaryEmployeeData',
      'getSalaryMainSettingData',
      'getSalaryWageSettingData',
      'getSalaryWageProcessingSettingData',
      'getSalaryCommissionData',
      'getSalaryDependentsData',
      'getSalaryMainValue',
      'getSalaryCommissionValue',
      'getSalaryPieceRateValue',
      'getSalaryBrutoValue',
      'getSalaryDependentsValue',
      'getSalaryNettoValue',
    ]),
    ...mapGetters('paymentdetailStore', [
      'getFetchState',
      'getBankListData',
      'getSubmitPaymentDetailData',
      'getSubmitPaymentDetailLoading',
      'getSubmitPaymentDetailStatus',
      'getSubmitPaymentDetailMessage',
    ]),
    parseRandomNum() {
      return Number(Math.random().toFixed());
    },
    minDate() {
      const today = new Date();
      return new Date(today.getFullYear(), today.getMonth(), today.getDate());
    },
  },
  data() {
    return {
      salaryBank: {},
      salaryDate: null,
      salaryInfo: '',
    };
  },
  mounted() {
    this.getBankList(this.getFetchState);
  },
  methods: {
    ...mapActions('paymentdetailStore', [
      'getBankList',
      'submitPaymentDetail',
      'unsetPaymentDetailStatusMessage',
    ]),
    ...mapActions('invoicedetailStore', ['setInvoiceDetailInitData']),
    parseNominal(val) {
      return kursRupiahUtil(val, 'Rp ');
    },
    dateFormatter(val) {
      return dayjs(val).format('DD-MM-YYYY');
    },
    submitDataPaymentDetail() {
      const {
        id_karyawan,
        nama_karyawan,
        total_kehadiran,
        periode,
        total_periode,
      } = this.getSalaryEmployeeData;
      const parsePeriode = periode.split(' - ');
      const tanggal_awal = parsePeriode[0];
      const tanggal_akhir = parsePeriode[1];

      const pengaturan_gaji = [...this.getSalaryMainSettingData];
      const pengaturan_upah = [...this.getSalaryWageSettingData];
      const pengerjaan_upah = [...this.getSalaryWageProcessingSettingData];
      const komisi = [...this.getSalaryCommissionData];
      const tanggungan = [...this.getSalaryDependentsData];
      const { salaryBank: rekening, salaryDate, salaryInfo: keterangan } = this;
      const tanggal_catat = dayjs(salaryDate).format('YYYY-MM-DD');
      const paymentDetailObj = {
        id_karyawan,
        nama_karyawan,
        tanggal_awal,
        tanggal_akhir,
        total_kehadiran,
        total_periode,
        pengaturan_gaji,
        pengaturan_upah,
        pengerjaan_upah,
        komisi,
        tanggungan,
        rekening,
        tanggal_catat,
        keterangan,
      };
      this.submitPaymentDetail(paymentDetailObj);
    },
  },
  watch: {
    getSubmitPaymentDetailLoading(newState, oldState) {
      if (
        oldState !== newState &&
        newState === false &&
        this.getSubmitPaymentDetailStatus === false &&
        this.getSubmitPaymentDetailMessage !== ''
      ) {
        this.$buefy.snackbar.open({
          indefinite: true,
          message: this.getSubmitPaymentDetailMessage,
          type: 'is-danger',
          position: 'is-bottom-right',
          actionText: 'X',
          onAction: () => {
            this.unsetPaymentDetailStatusMessage();
          },
        });
      } else if (
        oldState !== newState &&
        newState === false &&
        this.getSubmitPaymentDetailStatus === true &&
        this.getSubmitPaymentDetailMessage.match('Berhasil Menyimpan Gaji')
          .length > 0
      ) {
        this.setInvoiceDetailInitData(this.getSubmitPaymentDetailData).then(() => {
          this.$router.push({ path: '/invoicedetail' });
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
