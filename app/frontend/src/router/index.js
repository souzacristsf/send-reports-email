import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
// import beforeEach from './beforeEach'
import Signin from '../application/auth/components/Signin.vue'
import Signup from '../application/auth/components/Signup.vue'

// Containers
import Full from '@/containers/Full'

// Views
// import Dashboard from '@/app/dashboard/components/Main'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/auth/signin', name: 'Signin', component: Signin, meta: { requiresAuth: false } },
    { path: '/auth/signup', name: 'Signup', component: Signup, meta: { requiresAuth: false } },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: routes
    }
  ]
})

// router.beforeEach(beforeEach)

export default router
