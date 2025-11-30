import { addHeroe } from '../services/api.js';

export async function NewHeroe() {

    let content = document.createElement('div');

    content.innerHTML = `
        <h1>Añadir nuevo héroe</h1>
        <form id=\"addHeroeForm\" class=\"form-container\">
            <label for=\"image\">Imágen</label>
            <input type=\"url\" name=\"image\" id=\"image\">

            <label for=\"name\">Nombre</label>
            <input type=\"text\" name=\"name\" id=\"name\" required>

            <label for=\"heroeName\">Nombre de héroe</label>
            <input type=\"text\" name=\"heroeName\" id=\"heroeName\" required>

            <label for=\"dones[]\">Dones que tiene</label>
            <div id=\"divInputsDones\">
                <input type=\"text\" name=\"dones[]\" required>
            </div>
            <button type=\"button\" id=\"addDon\">+ Añadir don</button>

            <label for=\"description\">Descripción</label>
            <textarea name=\"description\" id=\"description\"></textarea>

            <label for=\"personality\">Personalidad</label>
            <textarea name=\"personality\" id=\"personality\"></textarea>

            <button type=\"submit\">Añadir héroe</button>
        </form>
    `;

    const form = content.querySelector('form#addHeroeForm');
    const imagen = content.querySelector('input#image');
    const name = content.querySelector('input#name');
    const heroeName = content.querySelector('input#heroeName');
    const divInputsDones = content.querySelector('div#divInputsDones');
    const donesInputs = content.querySelectorAll('input[name="dones[]"]');
    const btnAddDones = content.querySelector('button#addDon');
    const description = content.querySelector('textarea#description');
    const personality = content.querySelector('textarea#personality');

    btnAddDones.addEventListener('click', function() {
        divInputsDones.insertAdjacentHTML('beforeend', `
            <input type=\"text\" name=\"dones[]\" required>
        `);
    });

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const urlImg = imagen.value  || '../assets/My_Hero_Academia_Logo.png';
        const nameValue = name.value;
        const heroeNameValue = heroeName.value;
        const dones = [...divInputsDones.querySelectorAll('input[name="dones[]"]')].map(don => don.value);
        const descriptionValue = description.value;
        const personalityValue = personality.value;

        const newHero = {
            imagen: urlImg,
            nombre: nameValue,
            nombre_heroe: heroeNameValue,
            dones: dones,
            descripcion: descriptionValue,
            personalidad: personalityValue
        };

        const heroeAdded = await addHeroe(newHero);

        alert("Héroe con id " + heroeAdded.id + " añadido correctamente");
        location.hash = "/";
    });

    return content;

}