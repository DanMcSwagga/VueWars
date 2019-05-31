import Vue from 'vue'
import Router from 'vue-router'
import MovieList from './views/MovieList.vue'
import MovieShow from './views/MovieShow.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'movie-list',
      component: MovieList,
      alias: '/list'
    },
    {
      path: '/movie/:id',
      name: 'movie-show',
      component: MovieShow,
      props: true // params are received as props
    }
  ]
})
