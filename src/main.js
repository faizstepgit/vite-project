import { createApp } from 'vue';
import './components/center/CSS/style.css';
import App from './App.vue';
import adminlte from './components/center/layout/adminlte.vue';
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = createApp(App);

app.use(router);
app.use(VueAxios,axios);
// app.config.globalProperties.$http = axios;
// app.use(cors({
//   origin: "*",
// }));
app.component('adminlte', adminlte);
app.mount('#app');