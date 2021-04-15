<template>
  <div class="payment__detail">
    <div class="payment__detail-wrapper">
      <header-apps section="main">
        <title-header :backArrow="true">
          Detail Pembayaran
        </title-header>
        <content-header>
          <row label="Subtotal Gaji" value="2.524.000" />
          <row label="Subtotal Upah" value="100.000" />
          <row label="Subtotal Komisi" value="200.000" />
          <row label="Gaji Kotor" value="2.824.000" valueColor="secondary" />
          <row label="Tanggungan" value="70.000" valueColor="fatal" />
        </content-header>
        <summary-header>
          <div class="salarytotal__header-wrapper columns">
            <div
              class="column py-0 salarytotal__day has-text-primary has-text-weight-bold is-size-6"
            >
              Total Gaji Bersih
            </div>
            <div
              class="column py-0 is-flex is-justify-content-flex-end salarytotal__setting has-text-primary has-text-weight-bold is-size-6"
            >
              Rp 2.124.000
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
                <b-select placeholder="Pilih Rekening Bank" required expanded>
                  <option value="flint">Flint</option>
                  <option value="silver">Silver</option>
                </b-select>
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
                <b-input v-model="salaryInfo" placeholder="Tambah Keterangan"></b-input>
              </b-field>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4 px-4 paymentbutton__submit">
        <b-button class="is-primary" expanded>Submit Gaji</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderApps from '@/components/HeaderApps';
import TitleHeader from '@/components/HeaderApps/TitleHeader';
import ContentHeader from '@/components/HeaderApps/ContentHeader';
import SummaryHeader from '@/components/HeaderApps/SummaryHeader';
import Row from '@/components/Lists/Row';
export default {
  name: 'PaymentDetail',
  components: {
    HeaderApps,
    TitleHeader,
    ContentHeader,
    SummaryHeader,
    Row,
  },
  data() {
    return {
      salaryInfo: ''
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
