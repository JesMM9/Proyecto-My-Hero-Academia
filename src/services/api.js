const heroesURL = "http://localhost:3000/uaHeroes";

export async function getAllHeroes() {
    try {
        const response = await fetch(heroesURL, { method: "GET" });
        if (!response.ok) throw new Error("Error en la petición");
        const heroes = await response.json();
        return heroes;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export function getHeroe(id) {
    let respuesta = {};

    fetch(heroesURL + "/" + id, {
        method: "GET"
    })
    .then(response => response.ok? response.json(): Promise.reject(response))
    .then(heroe => {
        respuesta = heroe;
    })
    .catch(error => console.error(error));

    return respuesta;
}

export function addHeroe(heroe) {
    let respuesta = 0;

    fetch(heroesURL, {
        method: "POST",
        body: JSON.stringify(heroe),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.ok? response.json(): Promise.reject(response))
    .then(heroeAdded => {
        respuesta = heroeAdded;
    })
    .catch(error => console.error(error));

    return respuesta;
}