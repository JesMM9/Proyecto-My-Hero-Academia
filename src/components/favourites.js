export function favourites() {

    const favouritesArray = JSON.parse(localStorage.getItem('favourites')) || [];

    let content = document.createElement('div');

    content.innerHTML = `
        <h1>Favoritos</h1>
        <small>Todavía no has seleccionado ningún favorito. Para seleccionar un favorito, ve a la página de lista de héroes, entra en los detalles del héroe que quieras y pulsas en añadir a favorito</small>
    `;

    if (favouritesArray.length > 0) {
        content.innerHTML = `
            <h1>Favoritos</h1>
            <table>
                <thead>
                    <tr>
                    <th>Imágen</th>
                    <th>Nombre</th>
                    <th>Nombre de Héroe</th>
                    <th>Detalles</th>
                    <th>Eliminar de favoritos</th>
                    </tr>
                </thead>
                <tbody>
                    ${favouritesArray.map(heroe => `
                    <tr>
                        <td><img src=\"${heroe.imagen}\"></td>
                        <td>${heroe.nombre}</td>
                        <td>${heroe.nombre_heroe}</td>
                        <td><a href=\"#/heroeDetails/${heroe.id}\"><button>Detalles</button></a></td>
                        <td><button class=\"dlt\" data-id=\"${heroe.id}\">Eliminar de favoritos</button></td>
                    </tr>
                    `).join('')}
                </tbody>
            </table>
        `;

        content.querySelectorAll('button.dlt').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const updatedFavs = favouritesArray.filter(h => h.id !== id);
                localStorage.setItem('favourites', JSON.stringify(updatedFavs));

                const view = document.getElementById("view");
                view.innerHTML = "";
                view.appendChild(favourites());
            });
        });
    }

    return content;

}