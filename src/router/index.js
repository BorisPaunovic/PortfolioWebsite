import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkilsView from '../views/SkilsView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHashHistory(), // Use createWebHashHistory for hash mode
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/skils',
      name:'skils',
      component: SkilsView
    },
    {
      path:'/portfolio',
      name:'portfolio',
      component: PortfolioView
    },
    {
      path:'/contact',
      name:'contact',
      component: ContactView
    }
  ]
})

export default router