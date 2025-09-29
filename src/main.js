import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

const app = createApp(App);

app.use(router);
app.mount("#app");

import { reactive } from 'vue'

export const state = reactive({
    message: "Valeur par défaut"
})
