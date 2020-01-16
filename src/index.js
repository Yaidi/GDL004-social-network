import { logInFn, signUpFn } from './account.js';
import { facebook } from './facebook.js';

let userEmail = document.querySelector("#emailField");
let userPassword = document.querySelector ("#passwordField");

document.querySelector("#logIn").addEventListener("click", (e) => {
  e.preventDefault();
  logInFn(userEmail.value, userPassword.value);
});

document.querySelector("#signUp").addEventListener("click", (e) => {
  e.preventDefault();
  signUpFn(userEmail.value, userPassword.value);
});

document.querySelector("#logOut").addEventListener("click", (e) => {
  e.preventDefault();
  logOutFn();
});

document.querySelector("#facebook").addEventListener("click", (e) => {
  e.preventDefault();
  //alert("k p2");
  facebook();
});