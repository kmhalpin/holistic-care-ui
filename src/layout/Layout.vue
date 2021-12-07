<template>
  <nav-bar />
  <main class="mb-16 md:mb-0 md:grid md:grid-cols-3">
    <div
      class="hidden md:col-span-2 md:block min-h-screen"
      style='background-image: url("https://app.holisticareindonesia.com/images/bg-login.jpg");
        background-size: contain;
        background-attachment: fixed;'>
    </div>
    <div class="md:col-span-1">
      <slot />
    </div>
  </main>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>

<style>
</style>
