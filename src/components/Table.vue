<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <slot name="thead" />
      </thead>
      <tbody>
        <tr v-for="(item, index) in itemsPaginated" :key="item.id">
          <slot name="row" :item="item" :index="index + (rowPerPage * currentPage)"></slot>
        </tr>
      </tbody>
    </table>
    <div class="table-pagination">
      <level>
        <jb-buttons>
          <jb-button
            v-for="page in pagesList"
            :key="page"
            :active="page === currentPage"
            :label="page + 1"
            small
            @click="currentPage = page"
          />
        </jb-buttons>
        <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
      </level>
    </div>
  </div>
</template>

<script>
import { ref, computed, toRefs } from 'vue';
import Level from './Level.vue';
import JbButton from './JbButton.vue';
import JbButtons from './JbButtons.vue';

export default {
  components: { Level, JbButtons, JbButton },
  props: ['rowPerPage', 'rows'],
  setup(props) {
    const { rows } = toRefs(props);

    const perPage = ref(props.rowPerPage);

    const currentPage = ref(0);

    const itemsPaginated = computed(
      () => rows.value
        .slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1)),
    );

    const numPages = computed(() => Math.ceil(rows.value.length / perPage.value));

    const currentPageHuman = computed(() => currentPage.value + 1);

    const pagesList = computed(() => [...Array(numPages.value).keys()]);

    return {
      perPage,
      currentPage,
      itemsPaginated,
      numPages,
      currentPageHuman,
      pagesList,
    };
  },
};
</script>

<style>
.table-wrapper {
  @apply overflow-x-auto w-full;
}

table {
  @apply w-full;
}

thead {
  @apply table-header-group;
}

tr {
  @apply max-w-full block relative border-b-4 border-gray-100
    table-row border-b-0;
}

tr:last-child {
  @apply border-b-0;
}

th {
  @apply text-left py-2 px-3;
}

td {
  @apply table-cell text-left py-2 px-3 align-middle border-b-0;
}

tr:nth-child(odd) td {
  @apply bg-gray-50;
}

td:last-child {
  @apply border-b-0;
}

tbody tr:hover td {
  @apply bg-gray-100;
}

.table-pagination {
  @apply px-6 py-3 border-t border-gray-100;
}
</style>
