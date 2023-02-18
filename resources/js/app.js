import './bootstrap';
import '../css/app.css';
import router from './router';

import { createApp } from 'vue';
import App from '../js/App.vue';

createApp(App).use(router).mount('#app');