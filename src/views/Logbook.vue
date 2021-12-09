<template>
  <card title="Insert Logbook">
    <form>
      <Field label="Kompetensi">
        <v-select v-model="isKompetensi" :options="['Ya', 'Tidak']"> </v-select>
      </Field>
      <input type="hidden" v-model="isKompetensi" name="isKompetensi" />
      <Field label="Logbook" v-if="isKompetensi === 'Tidak'">
        <Input name="logbook" type="textarea" />
      </Field>
      <Field label="List Kompetensi" v-if="isKompetensi === 'Ya'">
        <v-select v-model="kompetensi" :options="listKompetensi"> </v-select>
      </Field>
      <input type="hidden" v-model="kompetensi" name="kompetensi" />
      <Field label="Tipe" v-if="isKompetensi === 'Ya'">
        <input-check
          v-model="tipeKompetensi"
          name="tipeKompetensi"
          type="radio"
          column
          :options="{ 1: 'Observasi', 2: 'Asistensi', 3: 'Mandiri' }"
        />
      </Field>
      <Field label="Keterangan" v-if="isKompetensi === 'Ya'">
        <Input name="keterangan" type="textarea" />
      </Field>
      <jb-buttons type="justify-end">
        <jb-button
          type="submit"
          color="bg-blue-500 text-white hover:bg-blue-600"
          label="Simpan"
        />
      </jb-buttons>
    </form>
  </card>
  <card title="Logbook">
    <paginated table :rows="logbooks">
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
        <td>{{ rowProps.item.kompetensi ? "Y" : "N" }}</td>
      </template>
    </paginated>
  </card>
</template>

<script>
import Card from '../components/Card.vue';
import Paginated from '../components/Paginated.vue';
import Field from '../components/Field.vue';
import Input from '../components/Input.vue';
import JbButtons from '../components/JbButtons.vue';
import JbButton from '../components/JbButton.vue';
import InputCheck from '../components/InputCheck.vue';

export default {
  name: 'Logbook',
  data() {
    return {
      isKompetensi: 'Ya',
      listKompetensi: [
        'Memasang Infus Pasien',
        'Memberi Obat Pasien',
        'Memberi Makan Pasien',
        'Memberi Minum Pasien',
      ],
      kompetensi: '',
      tipeKompetensi: '',
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
    Card,
    Paginated,
    Field,
    Input,
    InputCheck,
    JbButtons,
    JbButton,
  },
};
</script>
