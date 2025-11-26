const heroesURL = "http://localhost:3000/uaHeroes";

export function getAllHeroes() {
    let respuesta = [];

    fetch(heroesURL, {
        method: "GET"
    })
    .then(response => response.ok? response.json(): Promise.reject(response))
    .then(heroes => {
        respuesta = heroes;
    })
    .catch(error => console.error(error));

    return respuesta;
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