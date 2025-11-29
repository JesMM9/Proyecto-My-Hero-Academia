import '../style.css'
import { getHeroe } from "../services/api.js";
import { renderHeader, renderFooter } from './layout.js';

const detalleContent = document.getElementById("detalle");
const header = document.getElementById("header");
const footer = document.getElementById("footer");

const heroeId = window.location.href.split("?")[1];

async function init() {

    renderHeader(header);

    const heroe = await getHeroe(heroeId);

    let dones = "";

    heroe.dones.forEach(don => {
        dones += don + ", ";
    });

    detalleContent.innerHTML = `
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
                    <td><img src=\"${heroe.imagen}\"></td>
                    <td>${heroe.nombre}</td>
                    <td>${heroe.nombre_heroe}</td>
                    <td>${dones}</td>
                    <td>${heroe.descripcion}</td>
                    <td>${heroe.personalidad}</td>
                </tr>
            </tbody>
        </table>
    `;

    renderFooter(footer);

}

init();