<template>
  <div v-if="title || type === 'title'" class="rounded-lg
  bg-primary-10 text-primary text-lg m-4 p-4">
    <p class="flex items-center">
      <fa-icon class="text-2xl mr-2" :icon="['fas', 'list']" />
      {{ title }}
    </p>
  </div>
  <a v-else-if="assignment || type === 'assignment'" :href="assignment.href">
    <div
      class="flex rounded-lg bg-gray-100 m-4 mt-0 p-4"
    >
      <div class="relative flex-none text-primary p-7 rounded-lg bg-primary-10">
        <fa-icon class="text-2xl absolute inset-center" :icon="['fas', 'book']" />
      </div>
      <div class="flex-auto pl-2 py-1 overflow-hidden">
        <p class="text-lg pb-1 truncate">{{ assignment.judul }}</p>
        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-600 truncate">{{ assignment.preceptor }}</p>
          <p class="text-xs text-yellow-600">{{ getDateString(assignment.deadline) }}</p>
        </div>
      </div>
    </div>
  </a>
  <div v-else class="rounded-lg m-4" :class="{'p-4': !noPadding}">
    <slot />
  </div>
</template>

<script>
import { getDateString } from '../utils';

export default {
  props: {
    type: {
      type: String,
    },
    assignment: {
      type: Object,
    },
    title: {
      type: String,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getDateString,
  },
};
</script>
