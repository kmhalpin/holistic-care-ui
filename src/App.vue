<template>
  <layout>
    <DetailTugas />
  </layout>
</template>

<script>
import Layout from './layout/Layout.vue';
// import Absensi from './views/Absensi.vue';
// import Logbook from './views/Logbook.vue';
// import Tugas from './views/Tugas.vue';
import DetailTugas from './views/DetailTugas.vue';

export default {
  name: 'App',
  components: {
    DetailTugas,
    Layout,
  },
};
</script>
