import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './assets/tailwind.css';
import './assets/styles.css';

const app = createApp(App);

app.use(store);
app.mount('#app');
