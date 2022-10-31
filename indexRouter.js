import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPage from '../views/DashboardPage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import TeamPage from '../views/TeamPage.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashboardPage',
    component: DashboardPage
  },
  {
    path: '/ProjectsPage',
    name: 'ProjectsPage',
    component: ProjectsPage
  },
  {
    path: '/TeamPage',
    name: 'TeamPage',
    component: TeamPage
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: LoginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
