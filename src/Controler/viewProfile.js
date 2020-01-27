import { profileEdit } from "../View/editProfile";
import { userProfile, image } from "../Model/viewProfile";
import { tmplView, viewProfile } from "../View/viewProfile";


// VARIABLES PARA LA FUNCION MOSTRAR IMAGEN
let selectImage = profileEdit.tmpProfile.querySelector("#imageUser");
let imagePreview = tmplView.querySelector("#imagePreview");

function seeImage() {
    selectImage.addEventListener("change", image(selectImage, imagePreview));
}
templateProfileEdit.querySelector("#save").addEventListener("click", (e) => {
    e.preventDefault();
    userProfile;
});

//VARIABLES SACADO DE EDITPROFILE PARA VIEW PROFILE