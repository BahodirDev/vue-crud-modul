import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePageView.vue'
import AddForm from '../views/AddFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      
      path:"/",
      name:"home",
      component:HomeView
    },
    {
      path:"/add-form",
      name:"form",
      component:AddForm
    },
  ]
})

export default router
