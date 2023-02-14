import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Authentication/Login.vue';
import Update from '../views/Update.vue';
import Delete from '../views/Delete.vue';
import Create from '../views/Create.vue';
import error from '../components/center/layout/404.vue';

const routes = [
  {
    path : '/',
    name : 'login',
    component : Login,
  },
  {
    path : '/Home',
    name : 'Home',
    component : Home,
  },
  {
    path : '/Update',
    name : 'Update',
    component : Update,
  },
  {
    path : '/Delete',
    name : 'Delete',
    component : Delete,
  },
  {
    path : '/Create',
    name : 'Create',
    component : Create,
  },
  {
    path : '/:catchAll(.*)',
    name : 'error',
    component : error,
  }
];

const router = createRouter({
  history : createWebHistory(),
  routes
  // routes : 
});

export default router

