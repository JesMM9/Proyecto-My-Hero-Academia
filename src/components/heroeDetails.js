import { getHeroe } from "../services/api.js";

export async function HeroeDetails(id) {
  const heroe = await getHeroe(id);
  const dones = heroe.dones.join(", ");

  const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  const isFavourite = favourites.some(fav => fav.id === heroe.id);

  const content = document.createElement('div');

  if (isFavourite) {
    content.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Imágen</th>
            <th>Nombre</th>
            <th>Nombre de Héroe</th>
            <th>Dones</th>
            <th>Descripción</th>
            <th>Personalidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="${heroe.imagen}"></td>
            <td>${heroe.nombre}</td>
            <td>${heroe.nombre_heroe}</td>
            <td>${dones}</td>
            <td>${heroe.descripcion}</td>
            <td>${heroe.personalidad}</td>
          </tr>
        </tbody>
      </table>
      <small>Ya está añadido a favoritos</small>
    `;
  } else {
    content.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Imágen</th>
            <th>Nombre</th>
            <th>Nombre de Héroe</th>
            <th>Dones</th>
            <th>Descripción</th>
            <th>Personalidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="${heroe.imagen}"></td>
            <td>${heroe.nombre}</td>
            <td>${heroe.nombre_heroe}</td>
            <td>${dones}</td>
            <td>${heroe.descripcion}</td>
            <td>${heroe.personalidad}</td>
          </tr>
        </tbody>
      </table>
      <button id="addFavourite">Añadir a favorito</button>
    `;

    content.querySelector('#addFavourite').addEventListener('click', () => {
      const currentFavs = JSON.parse(localStorage.getItem('favourites')) || [];
      currentFavs.push(heroe);
      localStorage.setItem('favourites', JSON.stringify(currentFavs));

      content.innerHTML = `
        <table>
            <thead>
            <tr>
                <th>Imágen</th>
                <th>Nombre</th>
                <th>Nombre de Héroe</th>
                <th>Dones</th>
                <th>Descripción</th>
                <th>Personalidad</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><img src="${heroe.imagen}"></td>
                <td>${heroe.nombre}</td>
                <td>${heroe.nombre_heroe}</td>
                <td>${dones}</td>
                <td>${heroe.descripcion}</td>
                <td>${heroe.personalidad}</td>
            </tr>
            </tbody>
        </table>
        <small>Ya está añadido a favoritos</small>
      `;
    });
  }
  return content;
}