<template>
  <layout layout="blank-layout">
    <Login />
  </layout>
</template>

<script>
import Layout from './layout/Layout.vue';
// import Absensi from './views/Absensi.vue';
// import Logbook from './views/Logbook.vue';
// import Tugas from './views/Tugas.vue';
// import DetailTugas from './views/DetailTugas.vue';
// import Assessment from './views/Assessment.vue';
// import Home from './views/Home.vue';
import Login from './views/Login.vue';

export default {
  name: 'App',
  components: {
    Login,
    Layout,
  },
};
</script>
