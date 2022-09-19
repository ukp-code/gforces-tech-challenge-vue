import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import HomePage from './components/HomePage.vue';
import BookView from './components/BookView.vue';
import DetailsPage from './components/DetailsPage.vue';

import './assets/css/style.css';
import './assets/css/bootstrap.min.css';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/books',
      component: BookView,
    },
    {
      path: '/book/:id',
      name: 'details',
      component: DetailsPage,
      props: true,
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
