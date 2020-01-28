//import { selectImage, nameCreate, ocupationCreate, descriptionCreate } from "../View/editProfile.js";
import { image } from "../Model/viewProfile.js";
//import { imagePreview } from "../View/viewProfile.js";
import { getProfile } from "../Model/getData.js";
import { upProfileUser, db } from "../Model/upData.js";




function seeImage() {
    selectImage.addEventListener("change", image(selectImage, imagePreview));
}
//templateProfileEdit.querySelector("#save").addEventListener("click", (e) => {
//  e.preventDefault();

//});
window.addEventListener('load', getProfile(db));

let user = firebase.auth().currentUser;

if (user) {
    // User is signed in.
    /* Va a poder editar su perfil */
} else {
    // No user is signed in.
    /* No va a poder editar su perfil */
}