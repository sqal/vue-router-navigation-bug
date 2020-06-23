import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || '';
})

// stop the initial route resolution
const authGuard = router.beforeEach(() => {});

export const resolveRoute = async (authenticated) => {
  // remove hook
  authGuard()

  // get pending route path
  let redirectPath = router.history.pending.fullPath;

  if (!authenticated) {
    // redirect to login page if not authenticated
    redirectPath = '/login'
  }

  try {
    await router.replace(redirectPath)
  } catch (e) {
    if (authenticated) {
      await router.replace('/');
    }
  }
};
