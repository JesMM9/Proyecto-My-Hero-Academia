import { renderHeader, renderFooter } from "./components/layout.js";
import { router } from "./router.js";

const header = document.getElementById("header");
const footer = document.getElementById("footer");

renderHeader(header);
renderFooter(footer);

window.addEventListener("hashchange", router);
window.addEventListener("load", router);