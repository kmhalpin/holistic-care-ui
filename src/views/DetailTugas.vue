<template>
  <card title="Insert Tugas">
    <form>
      <jb-buttons type="justify-end overflow-x-auto">
        <input-file v-model="fileData" label="Choose Files" />
      </jb-buttons>
    </form>
  </card>
</template>

<script>
import Card from '../components/Card.vue';
import InputFile from '../components/InputFile.vue';
import JbButtons from '../components/JbButtons.vue';

export default {
  data() {
    return {
      fileData: null,
    };
  },
  components: {
    Card,
    InputFile,
    JbButtons,
  },
};
</script>

<style>
</style>
