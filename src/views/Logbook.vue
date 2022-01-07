<template>
  <card title="Insert Logbook" />
  <card>
    <form>
      <field label="Kompetensi">
        <v-select v-model="isKompetensi" :options="['Ya', 'Tidak']"> </v-select>
      </field>
      <input type="hidden" v-model="isKompetensi" name="isKompetensi" />
      <div v-if="isKompetensi === 'Tidak'">
        <field label="Logbook">
          <Input name="logbook" type="textarea" />
        </field>
      </div>
      <div v-if="isKompetensi === 'Ya'">
        <field label="List Kompetensi">
          <v-select v-model="kompetensi" :options="listKompetensi"> </v-select>
        </field>
        <input type="hidden" v-model="kompetensi" name="kompetensi" />
        <field label="Tipe">
          <input-check
            v-model="tipeKompetensi"
            name="tipeKompetensi"
            type="radio"
            :options="{ 1: 'Observasi', 2: 'Asistensi', 3: 'Mandiri' }"
          />
        </field>
        <field label="Keterangan">
          <Input name="keterangan" type="textarea" />
        </field>
      </div>
      <jb-buttons type="justify-end">
        <jb-button
          type="submit"
          color="info"
          label="Simpan"
        />
      </jb-buttons>
    </form>
  </card>
  <card title="Logbook" />
  <card noPadding>
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
