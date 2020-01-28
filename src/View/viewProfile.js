//import { nameCreate, ocupationCreate, descriptionCreate } from "../Controler/viewProfile.js";
export const viewProfile = () => {
    const tmplView =
        `

     <section id="perfil">
        <img id="imagePreview">
        <label id="nameUser">${nameCreate}</label>
        <label id="ocupación">${ocupationCreate}</label>
        <label id="description">${descriptionCreate}</label>
            <button id="showEdit"> Editar Perfil </button>

     </section>
     `
    const divElmnt = document.createElement("div")
    divElmnt.innerHTML = viewHome;

    return divElmnt;


}