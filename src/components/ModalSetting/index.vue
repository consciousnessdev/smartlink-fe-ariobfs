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
    <b-modal
      v-model="getPeriodeSalaryDlgState"
      has-modal-card
      trap-focus
      :destroy-on-hide="true"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="props">
        <periode-salary-config
          @close="props.close"
        >
        </periode-salary-config>
      </template>
    </b-modal>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PresenceDayConfig from './PresenceDayConfig';
import PeriodeSalaryConfig from './PeriodeSalaryConfig';
export default {
  name: 'Modal',
  components: {
    PresenceDayConfig,
    PeriodeSalaryConfig,
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
    getPeriodeSalaryDlgState: {
      get() {
        return this.$store.getters['salaryinvoiceStore/getPeriodeSalaryDlgState'];
      },
      set(value) {
        this.setPeriodeSalaryDlg(value);
      },
    }
  },
  methods: {
    ...mapActions('salaryinvoiceStore', ['setPresenceDlg', 'setPeriodeSalaryDlg','unsetIndexData'])
  },
  watch: {
    getPeriodeSalaryDlgState(newVal) {
      if(newVal === false) {
        this.unsetIndexData();
      }
    }
  }
};
</script>

<style></style>
