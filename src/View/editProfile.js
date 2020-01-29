import { profile } from '../Controler/viewProfile.js'
export default () => {
    const editProfile = document.createElement('div');

    editProfile.innerHTML =
        `
 <section id="profile">
 <form>
   <input type="file" accept="image/*" name="photo" id="imageUser">
<label> Nombre</label> 
<input type="text" id="createNameUser">
 <br><br>
 <label> Ocupación </label>
 <input type="text" id="createProfession">
 <button type="submit" id="save">Guardar</button>
 </form>
</section>

 `
        //let selectImage = editProfile.querySelector("#imageUser");
    let nameCreate = editProfile.querySelector("#createNameUser").value;
    let ocupationCreate = editProfile.querySelector("#createProfession").value;
    let descriptionCreate = editProfile.querySelector("#descriptionCreate").value;
    //selectImage.addEventListener("change", image(selectImage));

    editProfile.querySelector("#save").addEventListener("click", (e) => {
        e.preventDefault();
        profile(nameCreate, ocupationCreate, descriptionCreate);
    });


    return editProfile;

}