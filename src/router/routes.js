import { auth } from '@/auth';

export default [
  {
    path: '/',
    beforeEnter(to, from, next) {
      if (auth.isAuthenticated()) {
        next()
      } else {
        next('/login')
      }
    },
    component: () => import(/* webpackChunkName: "Dashboard" */'@/views/Dashboard'),
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "Home" */'@/views/Home'),
        meta: { title: 'Dashboard' }
      },
      {
        path: 'users',
        name: 'users',
        component: () => import(/* webpackChunkName: "Users" */'@/views/Users'),
        meta: { title: 'Users' }
      },
      {
        path: 'user/:id(\\d+)',
        name: 'user',
        component: () => import(/* webpackChunkName: "User" */'@/views/User'),
        meta: { title: 'User' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "Login" */'@/views/Login'),
    meta: { title: 'Login' }
  },
  {
    path: '*',
    redirect: '/',
  },
]
