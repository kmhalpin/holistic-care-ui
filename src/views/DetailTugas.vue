<template>
  <card title="Insert Tugas"/>
  <card>
    <div class="overflow-hidden">
      <p class="text-lg pb-1 truncate">{{ tugas.judul }}</p>
      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-600 truncate">{{ tugas.preceptor }}</p>
        <p class="text-xs text-yellow-600">{{ getDateString(tugas.deadline) }}</p>
      </div>
    </div>
    <div class="no-tailwindcss-base" v-html="tugas.detail"></div>
    <Form :validation-schema="schema">
      <ErrorMessage name="file" />
      <jb-buttons type="justify-end overflow-x-auto">
        <input-file v-model="fileData"
          label="Choose Files"
          :name="'file'"
          :accept="'application/pdf'"
        />
      </jb-buttons>
      <jb-buttons type="justify-end" :classAddon="'mr-3 last:mr-0 mb-3 mt-4'">
        <jb-button
          type="submit"
          color="info"
          label="Simpan"
        />
      </jb-buttons>
    </Form>
  </card>
</template>

<script>
import { Form, ErrorMessage } from 'vee-validate';

import { getDateString } from '../utils';
import Card from '../components/Card.vue';
import InputFile from '../components/InputFile.vue';
import JbButtons from '../components/JbButtons.vue';
import JbButton from '../components/JbButton.vue';

export default {
  data() {
    return {
      tugas: {
        id: 12,
        judul: 'Tugas Keperawatan Dasar',
        detail: '<h1>Heading</h1><img width="70" src="https://holisticareindonesia.com/wp-content/uploads/2021/10/logo-square.png" alt="logo"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, modi.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodiminus laborum ipsam reiciendis, qui dolores repudiandae harum molestiae neque veritatis.</p>',
        preceptor: 'dr John Doe, SpPD',
        deadline: '2021-12-08T23:23:59.000Z',
      },
      fileData: null,
    };
  },
  methods: {
    getDateString,
  },
  computed: {
    schema() {
      const { fileData } = this.$data;
      return {
        file() {
          if (typeof fileData !== 'object' || fileData === null) return 'Upload jawaban!';
          if (fileData.type !== 'application/pdf') return 'Hanya menerima file pdf!';
          return true;
        },
      };
    },
  },
  components: {
    Card,
    InputFile,
    JbButtons,
    JbButton,
    Form,
    ErrorMessage,
  },
};
</script>
