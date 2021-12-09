<script>
import { computed } from 'vue';

export default {
  props: {
    label: {
      type: [String, Number],
      default: null,
    },
    icon: {
      type: [String, Array],
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: 'white',
    },
    as: {
      type: String,
      default: null,
    },
    small: Boolean,
    outline: Boolean,
    active: Boolean,
    disabled: Boolean,
  },
  setup(props) {
    const is = computed(() => {
      if (props.as) {
        return props.as;
      }

      if (props.href) {
        return 'a';
      }

      return 'button';
    });

    const computedType = computed(() => {
      if (is.value === 'button') {
        return props.type ?? 'button';
      }

      return null;
    });

    const labelClass = computed(() => (props.small && props.icon ? 'px-1' : 'px-2'));

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
        props.color,
      ];

      if (props.disabled) {
        base.push('cursor-not-allowed', props.outline ? 'opacity-50' : 'opacity-70');
      }

      return base;
    });
    return {
      is, computedType, labelClass, componentClass,
    };
  },
};
</script>

<template>
  <component
    :is="is"
    :class="componentClass"
    :href="href"
    :type="computedType"
    :target="target"
    :disabled="disabled"
  >
    <fa-icon v-if="icon" :icon="icon" />
    <span
      v-if="label"
      :class="labelClass"
    >{{ label }}</span>
  </component>
</template>
