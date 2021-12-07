<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  label: {
    type: [String, Number],
    default: null,
  },
  small: Boolean,
  active: Boolean,
  disabled: Boolean,
});

const componentClass = computed(() => {
  const base = [
    'inline-flex',
    'cursor-pointer',
    'justify-center',
    'items-center',
    'whitespace-nowrap',
    'focus:outline-none',
    'transition-colors',
    'focus:ring',
    'duration-150',
    'border',
    'rounded',
    props.active ? 'ring ring-black dark:ring-white' : 'ring-blue-700',
    props.small ? 'p-1' : 'p-2',
  ];

  if (props.disabled) {
    base.push('cursor-not-allowed', 'opacity-70');
  }

  return base;
});
</script>

<template>
  <button
    :class="componentClass"
    :disabled="disabled"
  >
    <span
      v-if="label"
    >{{ label }}</span>
  </button>
</template>
