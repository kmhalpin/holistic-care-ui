<script>
import {
  computed, ref, watch,
} from 'vue';
import JbButton from './JbButton.vue';

export default {
  components: {
    JbButton,
  },
  props: {
    modelValue: {
      type: [Object, File, Array],
      default: null,
    },
    label: {
      type: String,
      default: 'Upload',
    },
    name: {
      type: String,
      default: 'file',
    },
    icon: {
      type: String,
      default: 'mdiUpload',
    },
    accept: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: 'info',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const root = ref(null);

    const file = ref(props.modelValue);

    const modelValueProp = computed(() => props.modelValue);

    watch(modelValueProp, (value) => {
      file.value = value;

      if (!value) {
        root.value.input.value = null;
      }
    });

    const upload = (event) => {
      const [value] = event.target.files || event.dataTransfer.files;

      file.value = value;

      emit('update:modelValue', file.value);

      // Use this as an example for handling file uploads
      // let formData = new FormData()
      // formData.append('file', file.value)

      // const mediaStoreRoute = `/your-route/`

      // axios
      //   .post(mediaStoreRoute, formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     },
      //     onUploadProgress: progressEvent
      //   })
      //   .then(r => {
      //
      //   })
      //   .catch(err => {
      //
      //   })
    };

    // const uploadPercent = ref(0)
    //
    // const progressEvent = progressEvent => {
    //   uploadPercent.value = Math.round(
    //     (progressEvent.loaded * 100) / progressEvent.total
    //   )
    // }
    return { upload, file, root };
  },
};
</script>

<template>
  <div class="flex items-stretch justify-start relative">
    <div v-if="file">
      <span
        class="inline-flex
          px-4 py-2
          justify-center
          bg-gray-100
          border-gray-200
          border rounded-r">
        {{ file.name }}
      </span>
    </div>
    <label class="inline-flex">
      <jb-button
        as="a"
        :label="label"
        :icon="['fas', 'upload']"
        :color="color"
        :class="{ 'rounded-r-none': file }"
      />
      <input
        ref="root"
        type="file"
        :name="name"
        class="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1"
        :accept="accept"
        @input="upload"
      >
    </label>
  </div>
</template>
