<template>
  <div class="md:rounded
  block
  bg-white
  border border-gray-100
  m-4">
    <header class="flex items-stretch border-b border-gray-100">
      <p class="flex items-center py-3 flex-grow font-bold px-4">{{ title }}</p>
    </header>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style>
</style>
