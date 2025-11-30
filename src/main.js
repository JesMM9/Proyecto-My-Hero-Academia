import { renderHeader, renderFooter } from "./src/components/layout.js";
import { router } from "/src/router.js";

const header = document.getElementById("header");
const footer = document.getElementById("footer");

renderHeader(header);
renderFooter(footer);

window.addEventListener("hashchange", router);
window.addEventListener("load", router);