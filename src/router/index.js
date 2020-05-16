import Vue from 'vue'
import Router from 'vue-router'
import HelloGl from '@/pages/hello_gl'
import OutIn from '@/pages/out_input'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OutIn',
      component: OutIn
    },
    {
      path: '/gl',
      name: 'HelloGl',
      component: HelloGl
    }
  ]
})
