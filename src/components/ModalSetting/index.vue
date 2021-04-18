<template>
  <section>
    <!-- START Presence dialog -->
    <b-modal
      v-model="getPresenceDlgState"
      has-modal-card
      trap-focus
      :destroy-on-hide="true"
      aria-role="dialog"
      aria-label="Presence Day Modal"
      aria-modal
    >
      <template #default="props">
        <presence-day-config
          :presenceDay="getPresenceDay"
          @close="props.close"
        ></presence-day-config>
      </template>
    </b-modal>
    <!-- END Presence dialog -->

    <!-- START Periode Salary dialog -->
    <b-modal
      v-model="getPeriodeSalaryDlgState"
      has-modal-card
      trap-focus
      :destroy-on-hide="true"
      aria-role="dialog"
      aria-label="Periode Salary Modal"
      aria-modal
    >
      <template #default="props">
        <periode-salary-config @close="props.close"> </periode-salary-config>
      </template>
    </b-modal>
    <!-- END Periode Salary dialog -->

    <!-- START Secondary Salary dialog -->
    <b-modal
      v-model="getSecondarySalaryDlgState"
      has-modal-card
      trap-focus
      :destroy-on-hide="true"
      aria-role="dialog"
      aria-label="Seconday Salary Modal"
      aria-modal
      :can-cancel="['x']"
    >
      <template #default="props">
        <secondary-salary-config @close="props.close">
        </secondary-salary-config>
      </template>
    </b-modal>
    <!-- END Secondary Salary dialog -->

    <!-- START Commission Salary dialog -->
    <b-modal
      v-model="getCommissionSalaryDlgState"
      has-modal-card
      trap-focus
      :destroy-on-hide="true"
      aria-role="dialog"
      aria-label="Seconday Salary Modal"
      aria-modal
      :can-cancel="['x']"
    >
      <template #default="props">
        <commission-salary-config @close="props.close">
        </commission-salary-config>
      </template>
    </b-modal>
    <!-- START Commission Salary dialog -->
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PresenceDayConfig from './PresenceDayConfig';
import PeriodeSalaryConfig from './PeriodeSalaryConfig';
import SecondarySalaryConfig from './SecondarySalaryConfig';
import CommissionSalaryConfig from './CommissionSalaryConfig';
export default {
  name: 'Modal',
  components: {
    PresenceDayConfig,
    PeriodeSalaryConfig,
    SecondarySalaryConfig,
    CommissionSalaryConfig,
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
        return this.$store.getters[
          'salaryinvoiceStore/getPeriodeSalaryDlgState'
        ];
      },
      set(value) {
        this.setPeriodeSalaryDlg(value);
      },
    },
    getSecondarySalaryDlgState: {
      get() {
        return this.$store.getters[
          'salaryinvoiceStore/getSecondarySalaryDlgState'
        ];
      },
      set(value) {
        this.setSecondarySalaryDlg(value);
      },
    },
    getCommissionSalaryDlgState: {
      get() {
        return this.$store.getters[
          'salaryinvoiceStore/getCommissionSalaryDlgState'
        ];
      },
      set(value) {
        this.setCommissionSalaryDlg(value);
      },
    },
  },
  methods: {
    ...mapActions('salaryinvoiceStore', [
      'setPresenceDlg',
      'setPeriodeSalaryDlg',
      'setSecondarySalaryDlg',
      'setCommissionSalaryDlg',
      'unsetIndexData',
    ]),
  },
  watch: {
    getPeriodeSalaryDlgState(newVal) {
      if (newVal === false) {
        this.unsetIndexData();
      }
    },
    getSecondarySalaryDlgState(newVal) {
      if (newVal === false) {
        this.unsetIndexData();
      }
    },
    getCommissionSalaryDlgState(newVal) {
      if (newVal === false) {
        this.unsetIndexData();
      }
    }
  },
};
</script>

<style></style>
