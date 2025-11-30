import { getAllHeroes } from '../services/api.js';

export async function Home() {
    const heroes = await getAllHeroes();
  
    let tableHeroes = `
        <table>
        <thead>
            <tr>
            <th>Imágen</th>
            <th>Nombre</th>
            <th>Nombre de Héroe</th>
            <th>Detalles</th>
            </tr>
        </thead>
        <tbody>
            ${heroes.map(heroe => `
            <tr>
                <td><img src=\"${heroe.imagen}\"></td>
                <td>${heroe.nombre}</td>
                <td>${heroe.nombre_heroe}</td>
                <td><a href=\"#/heroeDetails/${heroe.id}\"><button>Detalles</button></a></td>
            </tr>
            `).join('')}
        </tbody>
        </table>
    `;
  
    return tableHeroes;

}