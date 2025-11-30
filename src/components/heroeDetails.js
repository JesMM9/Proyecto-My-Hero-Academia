import '../style.css'
import { getHeroe } from "../services/api.js";

export async function HeroeDetails(id) {

    const heroe = await getHeroe(id);

    let dones = "";

    heroe.dones.forEach(don => {
        dones += don + ", ";
    });

    return `
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

}