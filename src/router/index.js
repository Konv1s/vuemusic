import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ManageView from '@/views/ManageView';
import AboutView from '@/views/AboutView';

import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/manage-music',
    name: 'manage',
    alias: '/manage',
    component: ManageView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

router.beforeEach((to, from, next) => {
  // console.log(to.matched);

  if (!to.matched.some(record => record.meta.requiresAuth)) {
    next();
    return;
  }

  if (store.state.userLoggedIn) {
    next();
  } else {
    next({ name: 'home' });
  }

  next();
});

export default router;
