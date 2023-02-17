import { createApp } from 'vue';
import './components/center/CSS/style.css';
import App from './App.vue';
import adminlte from './components/center/layout/adminlte.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.component('adminlte', adminlte);
app.mount('#app');