<template>
  <section>
    <b-modal
      v-model="getPresenceDlgState"
      has-modal-card
      trap-focus
      :destroy-on-hide="true"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="props">
        <presence-day-config
          :presenceDay="getPresenceDay"
          @close="props.close"
        ></presence-day-config>
      </template>
    </b-modal>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PresenceDayConfig from './PresenceDayConfig';
export default {
  name: 'Modal',
  components: {
    PresenceDayConfig,
  },
  props: {
    type: {
      type: String,
      required: true,
    }
  },
  computed: {
    ...mapGetters('salaryinvoiceStore', ['getPresenceDay']),
    getPresenceDlgState: {
      get() {
        return this.$store.getters['salaryinvoiceStore/getPresenceDlgState'];
      },
      set(value) {
        this.setPresenceDlg(value);
      },
    },
  },
  methods: {
    ...mapActions('salaryinvoiceStore', ['setPresenceDlg'])
  },
  data() {
    return {
      presenceDay: 0
    };
  },
};
</script>

<style></style>
