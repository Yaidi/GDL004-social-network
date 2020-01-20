import { facebook, ponUp, logInFn, signUpFn, logOutFn } from "../Model/firebase.js";

document.querySelector('#googleAuth').addEventListener("click", () => {
    ponUp();
});

let userEmail = document.querySelector("#emailField");
let userPassword = document.querySelector("#passwordField");

document.querySelector("#logIn").addEventListener("click", (e) => {
    e.preventDefault();
    logInFn(userEmail.value, userPassword.value);
});

document.querySelector("#register").addEventListener("click", (e) => {
    e.preventDefault();
    signUpFn(userEmail.value, userPassword.value);
});

document.querySelector("#logOut").addEventListener("click", (e) => {
    e.preventDefault();
    logOutFn();
});

document.querySelector("#facebookAuth").addEventListener("click", (e) => {
    e.preventDefault();
    //alert("k p2");
    facebook();
});