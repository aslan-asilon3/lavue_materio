require("./bootstrap");

import { createApp } from "vue";
import App from "./src/views/App";
import router from "./src/router/index.js";

createApp(App).use(router).mount("#app");
