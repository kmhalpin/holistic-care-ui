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
  props: {
    rowPerPage: {
      type: Number,
      default: 10,
    },
    rows: {
      type: Array,
      default() { return []; },
    },
  },
  setup(props) {
    const { rows, rowPerPage } = toRefs(props);

    const perPage = ref(rowPerPage);

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
