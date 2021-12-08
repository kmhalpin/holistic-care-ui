<script>
import { computed } from 'vue';

export default {
  props: {
    label: {
      type: [String, Number],
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: 'bg-white text-black hover:bg-gray-50',
    },
    small: Boolean,
    active: Boolean,
    disabled: Boolean,
  },
  setup(props) {
    const computedType = computed(() => props.type ?? 'button');

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
        props.active ? 'ring ring-black' : 'ring-blue-700',
        props.small ? 'p-1' : 'p-2',
        props.color,
      ];

      if (props.disabled) {
        base.push('cursor-not-allowed', 'opacity-70');
      }

      return base;
    });
    return { computedType, componentClass };
  },
};

</script>

<template>
  <button
    :class="componentClass"
    :type="computedType"
    :disabled="disabled"
  >
    <span
      v-if="label"
    >{{ label }}</span>
  </button>
</template>
