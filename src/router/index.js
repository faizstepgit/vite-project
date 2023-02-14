import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Authentication/Login.vue';
import Update from '../views/Update.vue';
import Delete from '../views/Delete.vue';
import Create from '../views/Create.vue';

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
  }
];

const router = createRouter({
  history : createWebHistory(),
  routes : routes
  // routes : 
});

export default router

