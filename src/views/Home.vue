<template>
  <card title="Menu Aplikasi" />
  <card noPadding
    class="grid
      grid-cols-4
      md:gap-x-4
      gap-x-0
      gap-y-4
      items-start
      text-center
      justify-items-center
      justify-between"
  >
    <menu-button href="/chart" label="Ganti Chart" icon="chart-pie" />
    <menu-button href="/panduan" label="Panduan" icon="file" />
    <menu-button href="/chat" label="Chat" icon="comment-alt" badge="99" />
    <menu-button href="/docs" label="Dokumentasi Stase" icon="file-alt" />
    <menu-button href="/verify" label="Verifikasi Stase" icon="check-circle" />
    <menu-button href="/learnout" label="Learning Outcome" icon="arrow-up" />
    <menu-button href="/kti" label="Karya Tulis Ilmiah" icon="book-reader" />
  </card>
</template>

<script>
import Card from '../components/Card.vue';
import MenuButton from '../components/MenuButton.vue';

export default {
  components: {
    Card,
    MenuButton,
  },
};
</script>

<style>

</style>
