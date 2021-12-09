<template>
  <paginated :rows="tugas">
    <template v-slot:row="rowProps">
      <card :title="rowProps.item.preceptor">
        <p class="font-bold">{{ rowProps.item.judul }}</p>
        <p>{{ rowProps.item.preceptor }}</p>
        <p>Deadline: {{ getDateString(rowProps.item.deadline) }}</p>
        <jb-buttons type="justify-end">
          <jb-button
            as="a"
            :href="'/tugas/' + rowProps.item.id"
            color="info"
            label="Detail"
          />
        </jb-buttons>
      </card>
    </template>
  </paginated>
</template>

<script>
import { getDateString } from '../utils';
import Card from '../components/Card.vue';
import Paginated from '../components/Paginated.vue';
import JbButtons from '../components/JbButtons.vue';
import JbButton from '../components/JbButton.vue';

export default {
  name: 'Tugas',
  methods: {
    getDateString,
  },
  data() {
    return {
      tugas: [
        {
          id: 12,
          judul: 'Tugas Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 39,
          judul: 'Tugas Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 17,
          judul: 'Tugas Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 19,
          judul: 'Tugas Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 22,
          judul: 'Tugas Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 31,
          judul: 'Tugas Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 1,
          judul: 'Tugas Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 2,
          judul: 'Tugas Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 99,
          judul: 'Tugas Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 42,
          judul: 'Tugas Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 55,
          judul: 'Tugas Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
      ],
    };
  },
  components: {
    Card,
    Paginated,
    JbButtons,
    JbButton,
  },
};
</script>

<style>
</style>
