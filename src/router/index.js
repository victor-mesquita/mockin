import Vue from 'vue';
import Router from 'vue-router';
import routeNames from './routes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      component: Vue.component('Layout', require('@/components/Layout').default),
      children: [
        {
          path: '/',
          name: routeNames.users,
          component: require('@/components/Users').default,
        },
        {
          path: '/routes/:msisdn',
          name: routeNames.routes,
          component: require('@/components/Routes').default,
        },
        {
          path: '/route/:id?',
          name: routeNames.routeForm,
          component: require('@/components/RouteForm').default,
        },
        {
          path: '/user/:id?',
          name: routeNames.userForm,
          component: require('@/components/UserForm').default,
        },
      ]
    },
    {
      path: '/login',
      name: routeNames.login,
      meta: { public: true },
      component: require('@/components/Login').default
    },
    {
      path: '/registration',
      name: routeNames.registration,
      meta: { public: true },
      component: require('@/components/Registration').default
    }
  ],
});
