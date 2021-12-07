<template>
  <layout>
    <card title="Insert Logbook">
      <form>

      </form>
    </card>
    <card title="Logbook">
      <Table rowPerPage="10" :rows="logbooks">
        <template v-slot:thead>
          <tr>
            <th>No</th>
            <th>Logbook</th>
            <th>Kompetensi</th>
          </tr>
        </template>
        <template v-slot:row="rowProps">
          <td>{{ rowProps.index + 1 }}</td>
          <td>{{ rowProps.item.logbook }}</td>
          <td>{{ rowProps.item.kompetensi ? 'Y' : 'N' }}</td>
        </template>
      </Table>
    </card>
  </layout>
</template>

<script>
import Card from './components/Card.vue';
import Table from './components/Table.vue';
import Layout from './layout/Layout.vue';

export default {
  name: 'App',
  data() {
    return {
      logbooks: [
        {
          id: 0,
          logbook: 'Absensi',
          kompetensi: false,
        },
        {
          id: 1,
          logbook: 'Upacara',
          kompetensi: false,
        },
        {
          id: 2,
          logbook: 'Memasang Infus Pasien A',
          kompetensi: true,
        },
        {
          id: 3,
          logbook: 'Memberi Obat Pasien',
          kompetensi: true,
        },
        {
          id: 11,
          logbook: 'Memberi Obat Pasien',
          kompetensi: true,
        },
        {
          id: 22,
          logbook: 'Memberi Obat Pasien',
          kompetensi: true,
        },
        {
          id: 23,
          logbook: 'Memberi Obat Pasien',
          kompetensi: true,
        },
        {
          id: 13,
          logbook: 'Memberi Obat Pasien',
          kompetensi: true,
        },
        {
          id: 17,
          logbook: 'Memberi Obat Pasien',
          kompetensi: true,
        },
        {
          id: 2231,
          logbook: 'Memberi Obat Pasien',
          kompetensi: true,
        },
        {
          id: 112,
          logbook: 'Memberi Obat Pasien',
          kompetensi: true,
        },
      ],
    };
  },
  components: {
    Layout,
    Card,
    Table,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
