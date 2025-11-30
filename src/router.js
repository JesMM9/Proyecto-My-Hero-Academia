import { Home } from "./components/home.js";
import { About } from "./components/about.js";
import { NewHeroe } from "./components/newHeroe.js";
import { favourites } from "./components/favourites.js";
import { HeroeDetails } from "./components/heroeDetails.js";
import { NotFound } from "./components/NotFound.js";

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
        view.appendChild(favourites());
        return;
    }

    const screen = routes[route] || NotFound;
    view.innerHTML = await screen();
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);