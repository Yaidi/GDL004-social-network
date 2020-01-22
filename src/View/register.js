//import { logIn, signUp } from "../Controler/register.js";
import { facebookAuth, googleAuth, twitterAuth, logInFn, signUpFn, logOutFn } from "../Model/firebase.js";

export default () => {

const wrapperDiv = document.createElement('div');

    wrapperDiv.innerHTML = `
    <div class="register"> 
        <h2>Bienvenida</h2>
            <form id="form">
                <input type="email" name="email" id="emailField" placeholder="correo"></br>
                <input type="password" name="password" id="passwordField" placeholder="contraseña"></br>
                <button type="submit" id="logIn">ingresa</button></br>
                <button type="submit" id="register">regístrate</button></br>
            </form>
        <p>Ó inicia sesión con</p>
        <div id="socialAuth">
            <img src="./images/facebook.png" alt="facebook" id="facebookAuth" class="socialMedia">
            <img src="./images/google.png" alt="Google" id="googleAuth" class="socialMedia">
            <img src="./images/twitter (1).png" alt="Twitter" id="twitterAuth" class="socialMedia"></img>
        </div>
    </div>`

    const divElmnt = document.createElement("div")
    divElmnt.innerHTML = viewRegister;

    return divElmnt;
};
    
//Email auth btns

let userEmail = wrapperDiv.querySelector("#emailField");
let userPassword = wrapperDiv.querySelector ("#passwordField");


wrapperDiv.querySelector("#logIn").addEventListener("click", (e) => {
    e.preventDefault();
    logInFn(userEmail.value, userPassword.value);
});
wrapperDiv.querySelector("#register").addEventListener("click", (e) => {
    e.preventDefault();
    signUpFn(userEmail.value, userPassword.value);
});

//Social media auth btns

wrapperDiv.querySelector("#facebookAuth").addEventListener("click", (e) => {
    e.preventDefault();
    facebookAuth();
});
wrapperDiv.querySelector("#googleAuth").addEventListener("click", (e) => {
    e.preventDefault();
    googleAuth();
});
wrapperDiv.querySelector("#twitterAuth").addEventListener("click", (e) => {
    e.preventDefault();
    twitterAuth();
});

return wrapperDiv;

};

