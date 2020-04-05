import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import home from '../components/home/home'
import welcome from '../components/page/welcome'
import users from '../components/page/user/users'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      component: login
    }, {
      path: '/home',
      component: home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: welcome },
        { path: '/users', component: users }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token') // 获取登录时的token
  if (!token) return next('/login')
  next()
})

export default router
