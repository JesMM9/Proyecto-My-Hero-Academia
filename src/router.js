import { Home } from "./src/components/home.js";
import { About } from "./src/components/about";
import { NewHeroe } from "./src/components/newHeroe";
import { favourites } from "./src/components/favourites";
import { HeroeDetails } from "./src/components/heroeDetails";
import { NotFound } from "./src/components/NotFound";

export async function router() {
    const view = document.getElementById("view");
    const route = location.hash.slice(1).toLowerCase() || "/";
    const parts = route.split("/");

    const routes = {
        "/": Home,
        "/about": About,
        "/newheroe": NewHeroe,
        "/favourites": favourites,
    };

    if (parts[1] === "heroedetails") {
        const result = await HeroeDetails(parts[2]);
        view.innerHTML = "";
        view.appendChild(result);
        return;
    }

    if (parts[1] === "newheroe") {
        view.innerHTML = "";
        view.appendChild(await NewHeroe());
        return;
    }

    if (parts[1] === "favourites") {
        view.innerHTML = "";
        view.appendChild(await favourites());
        return;
    }

    const screen = routes[route] || NotFound;
    view.innerHTML = await screen();
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);