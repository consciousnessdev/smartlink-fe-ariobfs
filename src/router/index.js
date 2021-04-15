import Vue from 'vue';
import VueRouter from 'vue-router';
import SalaryInvoice from '../views/SalaryInvoice.vue';
import PaymentDetail from '../views/PaymentDetail.vue';
import DetailInvoice from '../views/DetailInvoice.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Salary Invoice',
    component: SalaryInvoice,
  },
  {
    path: '/paymentdetail',
    name: 'Payment Detail',
    component: PaymentDetail,
  },
  {
    path: '/invoicedetail',
    name: 'Invoice Detail',
    component: DetailInvoice,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
