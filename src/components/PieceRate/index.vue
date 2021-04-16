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
          v-for="(wageSetting, i) in dataWageSetting"
          :key="wageSetting.id"
          :label="wageSetting.nama"
          :totalUnit="dataWageProcessing[i].nominal"
          :unit="dataWageProcessing[i].satuan"
          :value="dataWageProcessing[i].nominal * wageSetting.nominal"
          :showIcon="section === 'main'"
          iconType="disabled"
        />
        <!-- <row
          label="Menyetrika"
          totalUnit="50"
          unit="KG"
          value="80000"
          :showIcon="section === 'main'"
          iconType="disabled"
        /> -->
      </div>
    </div>

    <div class="pt-0 pb-4 px-4 piecerate__subtotal">
      <div class="top--thindashborder mb-4"></div>
      <div class="columns piecerate__subtotal-wrapper">
        <div class="column has-text-weight-bold">
          Subtotal {{ subtotalLabel }}
        </div>
        <div class="column has-text-weight-bold has-text-right">
          Rp {{ subTotalUpah }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Row from '../../components/Lists/Row';
import kursRupiahUtil from '../../utils/kursRupiahUtil';
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
    subtotalLabel: {
      type: String,
      required: true,
    },
    dataWageSetting: {
      type: Array,
      required: true,
      default: [],
    },
    dataWageProcessing: {
      type: Array,
      required: true,
      default: [],
    },
  },
  components: {
    Row,
  },
  data() {
    return {};
  },
  computed: {
    subTotalUpah() {
      if ((this.dataWageSetting.length > 0 && this.dataWageProcessing.length > 0)) {
        let subTotalVal = this.dataWageSetting.reduce((total, item, i) => {
          return (total += item.nominal * this.dataWageProcessing[i].nominal);
        }, 0);
        return kursRupiahUtil(subTotalVal, '');
      }
      return 0;
    },
  },
  methods: {
    multiplierVal(multi, value) {
      return kursRupiahUtil(multi * value , '');
    },
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
