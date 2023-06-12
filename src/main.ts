import { createApp } from 'vue';
import {createPinia} from "pinia";
import ArcoVue from "@arco-design/web-vue";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";

import '@arco-design/web-vue/dist/arco.css';

// @ts-ignore
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.mount('#app')
