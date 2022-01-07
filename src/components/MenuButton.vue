<template>
  <div>
    <a :href="href" class="mb-0.5 inline-block">
      <div class="relative rounded-lg text-primary bg-primary-10 p-8">
        <fa-icon class="text-2xl absolute inset-center" :icon="['fas', icon]" />
        <div v-if="badge" class="rounded-full bg-red-500 text-xs p-2.5 text-white absolute top-2.5">
          <span class="absolute inset-center">{{ badge }}</span>
        </div>
      </div>
    </a>
    <p class="text-xs text-gray-600">{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
    },
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
    badge: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>

</style>
