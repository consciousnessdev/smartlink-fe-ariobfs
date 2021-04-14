<template>
  <div class="summary__salary">
    <div class="py-4 px-4 summarysalary__labelvalueinfo">
      <div class="columns mb-0 summarysalary__labelvalue">
        <div
          class="column is-7 summarysalary__label has-text-primary has-text-weight-bold is-size-6"
        >
          Total Gaji Bersih
          <icon-components icon-name="edit-icon"
            ><check-fill-icon
          /></icon-components>
        </div>

        <div
          class="column summarysalary__value has-text-primary has-text-weight-bold is-size-6 has-text-right"
        >
          Rp. {{ '2.124.000' }}
        </div>
      </div>
      <div class="summarysalary__info is-size-7 has-text-semifade">
          Nominal akhir yang diterima karyawan setelah ditambah komisi dikurangi pembayaran tanggungan (jika ada).
      </div>
    </div>
    <div class="pb-4 pt-0 px-4 summarysalary__button">
      <b-button class="is-primary" expanded>Berikutnya</b-button>
    </div>
  </div>
</template>

<script>
import IconComponents from '../IconComponents';
import CheckFillIcon from '../IconComponents/CheckFillIcon';
export default {
  name: 'SummarySalary',
  components: {
    IconComponents,
    CheckFillIcon,
  },
};
</script>

<style></style>
