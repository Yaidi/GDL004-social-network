import { upProfile } from '../Controler/editProfile.js';
export default () => {
    const editProfile = document.createElement('div');

    editProfile.innerHTML =
        `
 <section id="profile">
 <form>
   <input type="file" accept="image/*" name="photo" id="imageUser">
   <br>
<label> Nombre</label> 
<input type="text" id="createNameUser">
 <br><br>
 <label> Ocupación </label>
 <br>
 <input type="text" id="createProfession">
 <br>
 <label> Descripción </label>
 <br>
 <input type='text' id= 'createUserDescription'>
 <br>
 <a href="#/profile"><button id="save">Guardar</button></a>
 </form>
</section>

 `;
    let selectImage = editProfile.querySelector("#imageUser");
    let nameCreate = editProfile.querySelector("#createNameUser");
    let ocupationCreate = editProfile.querySelector("#createProfession");
    let descriptionCreate = editProfile.querySelector('#descriptionCreate');
    //selectImage.addEventListener("change", image(selectImage));

    editProfile.querySelector("#save").addEventListener("click", (e) => {
        e.preventDefault();
        upProfile(nameCreate.value, ocupationCreate.value, descriptionCreate.value);
    });

    return editProfile;

};