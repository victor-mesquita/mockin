import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: require('@/components/Users').default,
    },
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/user/:id',
      name: 'routes',
      component: require('@/components/Routes').default,
    },
    {
      path: '/route/:id',
      name: 'route',
      component: require('@/components/RouteForm').default,
    },
  ],
});
