import { getProfile } from '../Controler/viewProfile.js';
export default () => {
    const tmpView = document.createElement('div');
    tmpView.addEventListener('load', getProfile);
    tmpView.innerHTML =
        `
     <section id='perfil'>
        <img id='imagePreview'>
        <label id='nameUser'></label>
        <label id='ocupation'></label>
        <label id='description'></label>
        <a href='#/edit'> <button id='showEdit'> Editar Perfil </button></a> 
     </section>
     <footer>
     <a href='#/home'><p>home</></a>
     </footer>
     `
    let imagePreview = tmpView.querySelector('#imagePreview');

    //image(selectImage, imagePreview);
    return tmpView;

}