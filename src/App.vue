<template>
  <layout>
    <Logbook />
  </layout>
</template>

<script>
import Layout from './layout/Layout.vue';
// import Absensi from './views/Absensi.vue';
import Logbook from './views/Logbook.vue';
// import Tugas from './views/Tugas.vue';

export default {
  name: 'App',
  components: {
    Logbook,
    Layout,
  },
};
</script>
