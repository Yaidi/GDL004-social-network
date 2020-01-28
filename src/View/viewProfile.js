//import { nameCreate, ocupationCreate, descriptionCreate } from "../Controler/viewProfile.js";
export default () => {

    const tmpView = document.createElement('div');

    tmpView.innerHTML =
        `

     <section id="perfil">
        <img id="imagePreview">
        <label id="nameUser">${nameCreate}</label>
        <label id="ocupación">${ocupationCreate}</label>
        <label id="description">${descriptionCreate}</label>
            <button id="showEdit"> Editar Perfil </button>

     </section>
     `


    return tmpView;
    let imagePreview = tmpView.querySelector("#imagePreview");
}