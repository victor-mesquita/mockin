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
      path: '/route-detail/:routeId/',
      name: 'route-detail',
      component: require('@/components/RouteDetailForm').default,
    },
    {
      path: '/kps-editor',
      name: 'kpsEditor',
      component: require('@/components/KpsEditor').default,
    },
    {
      path: '/clone/',
      name: 'cloneUser',
      component: require('@/components/CloneUser').default,
    },
    {
      path: '/user/:id?',
      name: 'user',
      component: require('@/components/UserForm').default,
    },
  ],
});
