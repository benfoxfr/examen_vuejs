import { createApp } from "vue";
import App from "./App.vue";
import TheHeader from "./components/TheHeader.vue";
import TheItems from "./components/TheItems.vue";
import DropZone from "./components/DropZone.vue";

const app = createApp(App);

app.component("the-header", TheHeader);
app.component("the-items", TheItems);
app.component("drop-zone", DropZone);

app.mount("#app");
