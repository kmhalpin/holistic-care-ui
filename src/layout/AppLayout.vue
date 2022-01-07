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
      <card class="bg-primary text-white flex gap-10 justify-between items-center">
        <div>
          <p class="text-lg font-bold pb-3">Abdul Aziz Zulfikar</p>
          <p class="text-xs">STIKes Muhammadiyah Palembang</p>
        </div>
        <div>
          <a href="/logout">
            <fa-icon class="text-2xl" :icon="['fas', 'sign-out-alt']" />
          </a>
        </div>
      </card>
      <slot />
    </div>
  </main>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Card from '../components/Card.vue';

export default {
  name: 'AppLayout',
  components: { NavBar, Card },
};
</script>
