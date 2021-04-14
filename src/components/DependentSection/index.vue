<template>
  <section class="section py-0 px-0 dependent__section bottom--tickborder">
    <div
      class="has-text-weight-bold py-4 px-4 dependentsection__header bottom--thinborder"
    >
      {{ title }}
      <div class="subtitle has-text-semifade is-size-7">
        {{ subtitle }}
      </div>
    </div>
    <!-- Add dependent Button-->
    <div class="pt-4 pb-0 px-4 dependentsection__button">
      <div class="is-flex dependentsection__add">
        <div class="pr-2 dependentsection__addicon">
          <icon-components icon-name="add-icon">
            <add-icon />
          </icon-components>
        </div>
        <div
          class="dependentsection__addlabel has-text-primary has-font-weight-600"
        >
          Tambah pembayaran tanggungan...
        </div>
      </div>
    </div>
    <div class="py-4 px-4 dependentsection__list">
      <div class="dependentsectionlist__item">
        <row
          label="Ganti Barang Hilang"
          sublabel="Baju yang hilang warna merah"
          value="50.000"
          valueColor="danger"
          showIcon
          iconType="edit"
          iconColor="danger"
        />
        <row
          label="Denda Keterlambatan"
          sublabel="karena terlambat 3 hari berturut - turut "
          value="20.000"
          valueColor="danger"
          showIcon
          iconType="edit"
          iconColor="danger"
        />
      </div>
    </div>
    <div
      class="pt-0 pb-4 px-4 dependentsection__subtotal bottom--thickborder"
    >
      <div class="top--thindashborder mb-4"></div>
      <div class="columns dependentsection__subtotal-wrapper">
        <div class="column is-7 has-text-weight-bold">
          {{ dependentTotalLabel }}
        </div>
        <div
          class="column is-5 has-text-weight-bold has-text-right has-text-danger"
        >
          (-) Rp {{ '70.000' }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Row from '../Lists/Row';
import IconComponents from '../IconComponents';
import AddIcon from '../IconComponents/AddIcon';
export default {
  name: 'DependentSection',
  props: {
    section: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    dependentTotalLabel: {
      type: String,
      required: true,
    },
  },
  components: {
    Row,
    IconComponents,
    AddIcon,
  },
};
</script>

<style lang="scss" scoped>
.dependentsection__subtotal-wrapper {
  font-size: 18px;
}
</style>
