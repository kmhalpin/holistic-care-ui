<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayout from './AppLayout.vue';
import BlankLayout from './BlankLayout.vue';

export default {
  props: {
    layout: {
      type: String,
      default: 'app-layout',
    },
  },
  components: {
    AppLayout,
    BlankLayout,
  },
};
</script>

<style>

</style>
