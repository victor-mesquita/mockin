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
      path: '/routes/:msisdn',
      name: 'routes',
      component: require('@/components/Routes').default,
    },
    {
      path: '/route/:id?',
      name: 'route',
      component: require('@/components/RouteForm').default,
    },
    {
      path: '/manage-routes/',
      name: 'manage-routes',
      component: require('@/components/ManageRoute').default,
    },
    {
      path: '/manage-routes/:id?',
      name: 'manage-routes',
      component: require('@/components/ManageRouteForm').default,
    },
    {
      path: '/user/:id?',
      name: 'user',
      component: require('@/components/UserForm').default,
    },
  ],
});
