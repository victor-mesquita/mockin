import routes from '../router/routes';

function tokenMiddleware(router) {
  router.beforeEach((to, from, next) => {
    const navigatingToAuthArea = to.name === routes.login || to.name === routes.registration;
    const userAuthenticated = window.localStorage.getItem('token') != null;

    if (navigatingToAuthArea && userAuthenticated) {
      next({ name: routes.users });
      return;
    }

    if (to.meta.public) {
      next();
      return;
    }

    if (!userAuthenticated && !navigatingToAuthArea) {
      next({ name: routes.login });
      return;
    }

    next();
  });
}

export default tokenMiddleware;
