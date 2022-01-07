<template>
  <card title="Absensi" />
  <div class="flex justify-center items-center h-screen">
    <div v-if="!isMobile()" class="p-12 text-center">
      <p>Harap membuka aplikasi melalui smartphone untuk melakukan absensi</p>
    </div>
    <div v-else class="p-12">
      <qrcode-stream
        class="border border-gray-100"
        @decode="onDecode"
        :camera="camera"
        @init="onInit">
      </qrcode-stream>
      <div class="text-center">
        <jb-button
          @click="switchCamera"
          small
          label="switch camera"
        />
        <p>Arahkan kamera ke QR Code</p>
      </div>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader';
import Card from '../components/Card.vue';
import JbButton from '../components/JbButton.vue';

export default {
  data() {
    return {
      error: '',
      camera: 'rear',
    };
  },
  components: {
    QrcodeStream,
    JbButton,
    Card,
  },
  methods: {
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      }
      return false;
    },
    switchCamera() {
      switch (this.camera) {
        case 'front':
          this.camera = 'rear';
          break;
        case 'rear':
          this.camera = 'front';
          break;
        default:
          this.camera = 'auto';
          break;
      }
    },
    onDecode(result) {
      console.log(result);
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = 'ERROR: you need to grant camera access permission';
        } else if (error.name === 'NotFoundError') {
          this.error = 'ERROR: no camera on this device';
        } else if (error.name === 'NotSupportedError') {
          this.error = 'ERROR: secure context required (HTTPS, localhost)';
        } else if (error.name === 'NotReadableError') {
          this.error = 'ERROR: is the camera already in use?';
        } else if (error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable';
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = 'ERROR: Stream API is not supported in this browser';
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }

        console.error(this.error);
      }
    },
  },
};
</script>
