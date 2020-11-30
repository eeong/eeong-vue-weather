import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Daily from '../views/Daily.vue'
import Weekly from '../views/Weekly.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/daily/',
		name: 'daily',
		component: Daily,
	},
	{
		path: '/weekly/',
		name: 'weekly',
		component: Weekly,
	},

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	to.name != 'home' && !from.name ? next({ path: '/' }) : next()
})

export default router
