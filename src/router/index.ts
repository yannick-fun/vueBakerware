import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'list',
    component: () => import('../views/ListView.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateView.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/DetailView.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/EditView.vue')
  },
  {
    path: '/delete/:id',
    name: 'delete',
    component: () => import('../views/DeleteView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
