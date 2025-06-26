import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@saofeng-design/components/dist/index.css";
import Sui from "@saofeng-design/components";

const app = createApp(App);
app.use(Sui);

app.mount("#app");
