import { createApp } from 'vue';
import vSelect from 'vue-select';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBook, faTasks, faCamera, faEdit, faSignOutAlt, faUpload, faList, faHome, faChartPie, faFile,
  faCommentAlt, faFileAlt, faCheckCircle, faArrowUp, faBookReader, faUserCircle, faLock,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './assets/css/main.css';
import 'vue-select/dist/vue-select.css';

library.add(
  faBook,
  faTasks,
  faCamera,
  faEdit,
  faSignOutAlt,
  faUpload,
  faList,
  faHome,
  faChartPie,
  faFile,
  faCommentAlt,
  faFileAlt,
  faCheckCircle,
  faArrowUp,
  faBookReader,
  faUserCircle,
  faLock,
  faSignInAlt,
);

createApp(App)
  .component('v-select', vSelect)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app');
