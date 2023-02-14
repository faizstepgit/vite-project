import { createApp } from 'vue';
import './components/center/CSS/style.css';
import App from './App.vue';
import adminlte from './components/center/layout/adminlte.vue';
import { createRouter, createWebHistory } from 'vue-router';
// import Vue from 'vue'
// import VueRouter from 'vue-router'
const routes = [
  {
    path : '/',
    name : 'login',
    component: () => import('./components/page/Authentication/login.vue'),
  },
  {
    path : '/home',
    name : 'Home',
    component: () => import('./components/page/Home.vue'),
  },
  {
    path : '/update',
    name : 'Update',
    component : () => import('./components/page/Update.vue'),
  },
  {
    path : '/delete',
    name : 'Delete',
    component : () => import('./components/page/Delete.vue'),
  },
  {
    path : '/create',
    name : 'Create',
    component : () => import('./components/page/Create.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

const app = createApp(App);
app.use(router);
app.component('adminlte', adminlte);
app.mount('#app');

// Vue.use(VueRouter)
// createApp(App).mount('#app')
