import { createRouter, createWebHistory } from 'vue-router'
import Category from '@/components/Category.vue'
import Task from '@/components/Task.vue'
import AddItem from '@/components/AddItem.vue'

const routes = [
  {
    path: '/',
    component: Category
  },
  {
    path: '/category/:idx',
    name: 'category',
    component: Task,
    props: true
  },
  {
    path: '/add',
    name: 'add',
    component: AddItem,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
