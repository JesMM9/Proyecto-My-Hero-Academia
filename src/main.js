import './style.css'
import { renderHeader, renderFooter } from './components/layout.js';
import { getAllHeroes } from './services/api.js';

const header = document.getElementById('header');
const footer = document.getElementById('footer');

async function init() {
  const heroes = await getAllHeroes();
  
  renderHeader(header);
  
  let tableHTML = `
    <table>
      <thead>
        <tr>
          <th>Imágen</th>
          <th>Nombre</th>
          <th>Nombre de Héroe</th>
        </tr>
      </thead>
      <tbody>
        ${heroes.map(heroe => `
          <tr>
            <td><img src=\"${heroe.imagen}\"></td>
            <td>${heroe.nombre}</td>
            <td>${heroe.nombre_heroe}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  document.querySelector('#app').innerHTML += tableHTML;
  
  renderFooter(footer);
}

init();