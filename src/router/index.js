import Vue from 'vue'
import Router from 'vue-router'
import Classify from '../components/main/classify/Classify.vue'
import All from '../components/main/all/All.vue'
import Login from '../components/main/login/Login.vue'
import Cart from '../components/main/shopping/Cart.vue'

Vue.use(Router)

export default new Router({
	mode :"history",
  routes: [
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
    	path: '/all',
    	name: 'All',
    	component: All
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
    	path: '/cart',
    	name: 'Cart',
    	component: Cart
    }
  ]
})