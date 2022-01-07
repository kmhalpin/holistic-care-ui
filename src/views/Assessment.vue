<template>
  <card title="Assessment" />
  <paginated :rows="assessment">
    <template v-slot:row="rowProps">
      <card type="assignment" :assignment="{
        ...rowProps.item,
        href: '/assessment/' + rowProps.item.id,
      }" />
    </template>
  </paginated>
</template>

<script>
import Card from '../components/Card.vue';
import Paginated from '../components/Paginated.vue';

export default {
  name: 'Assessment',
  data() {
    return {
      assessment: [
        {
          id: 12,
          judul: 'Assessment Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 39,
          judul: 'Assessment Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 17,
          judul: 'Assessment Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 19,
          judul: 'Assessment Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 22,
          judul: 'Assessment Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 31,
          judul: 'Assessment Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 1,
          judul: 'Assessment Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 2,
          judul: 'Assessment Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 99,
          judul: 'Assessment Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 42,
          judul: 'Assessment Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
        {
          id: 55,
          judul: 'Assessment Keperawatan Dasar',
          preceptor: 'dr John Doe, SpPD',
          deadline: '2021-12-08T23:23:59.000Z',
        },
      ],
    };
  },
  components: {
    Card,
    Paginated,
  },
};
</script>
