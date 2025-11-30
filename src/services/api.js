const heroesURL = "https://692c792dc829d464006faa0e.mockapi.io/heroes/heroes";

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

export async function getHeroe(id) {

    try {
        const response = await fetch(heroesURL + "/" + id, { method: "GET" });
        if (!response.ok) throw new Error("Error en la petición");
        const heroe = await response.json();
        return heroe;
    } catch (error) {
        console.error(error);
        return null;
    }

}

export async function addHeroe(heroe) {
    
    try {
        const response = await fetch(heroesURL, {
                    method: "POST",
                    body: JSON.stringify(heroe),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
        if (!response.ok) throw new Error("Error en la petición");
        const addedHeroe = await response.json();
        return addedHeroe;
    } catch (error) {
        console.error(error);
        return null;
    }
    
}