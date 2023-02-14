<template>
  <div>
    <router-view></router-view>
  </div>

</template>
<script>
  import { onBeforeMount, onMounted } from 'vue'
  // require('../node_modules/admin-lte/dist/css/adminlte.min.css');
  import "../node_modules/admin-lte/dist/css/adminlte.min.css";
  import "../node_modules/jquery/dist/jquery.min.js";
  import "../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
  import "../node_modules/admin-lte/dist/js/adminlte.js?v=3.2.0";
export default {
  // name : 'App',
  // components : {},
};
</script>
