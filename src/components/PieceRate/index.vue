<template>
  <section class="section py-0 px-0 piece__rate bottom--tickborder">
    <div
      class="has-text-weight-bold py-4 px-4 piecerate__header bottom--thinborder"
    >
      {{ title }}
    </div>

    <!-- list -->
    <div class="py-4 px-4 piecerate__list">
      <div class="pieceratelist__item">
        <row
          label="Mencuci"
          totalUnit="100"
          unit="KG"
          value="20000"
          showIcon
          iconType="disabled"
        />
        <row
          label="Menyetrika"
          totalUnit="50"
          unit="KG"
          value="80000"
          showIcon
          iconType="disabled"
        />
      </div>
    </div>

    <div class="pt-0 pb-4 px-4 piecerate__subtotal">
      <div class="top--thindashborder mb-4"></div>
      <div class="columns piecerate__subtotal-wrapper">
        <div class="column has-text-weight-bold">Subtotal Upah</div>
        <div class="column has-text-weight-bold has-text-right">
          Rp {{ '100.000' }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Row from '../../components/Lists/Row';
export default {
  name: 'PieceRate',
  props: {
    section: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    Row,
  },
};
</script>

<style lang="scss">
.nominal__value {
  align-items: flex-start;
  justify-content: flex-end;
}

.action {
  align-items: flex-start;
}
</style>
