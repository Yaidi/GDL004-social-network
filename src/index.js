import "./firebase.js";
import { registerFn, accesUsers } from './email.js';
import { ponUp } from "./google.js";
let email = document.getElementById("registerEmail");
let password = document.getElementById("registerPassword");

document.querySelector("#register").addEventListener("click", (e) => {
    e.preventDefault();
    registerFn(email.value, password.value)
});
document.querySelector("#sigIn").addEventListener("click", (e) => {
    e.preventDefault();
    accesUsers(email.value, password.value);
});

document.querySelector('#googleLogIn').addEventListener("click", () => {
    ponUp();
})