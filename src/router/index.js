import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/views/Home'
import Board from '@/components/views/Board'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/board/:id',
      name: 'board',
      component: Board,
      props: true
    }
  ]
})
