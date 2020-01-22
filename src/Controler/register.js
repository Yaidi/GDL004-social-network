import { facebookAuth, googleAuth, twitterAuth, logInFn, signUpFn, logOutFn } from "../Model/firebase.js";

//Log in / Sign up with email
function logIn(e) {
    e.preventDefault();
    logInFn(userEmail.value, userPassword.value);
};

function signUp(e) {
  e.preventDefault();
  signUpFn(userEmail.value, userPassword.value);
};
/*
document.querySelector("#register").addEventListener("click", (e) => {
  e.preventDefault();
  //signUpFn(userEmail.value, userPassword.value);
  alert("register");
});
/*
document.querySelector("#logOut").addEventListener("click", (e) => {
  e.preventDefault();
  alert("log out")
  //logOutFn();
});

//Log in / Sign up with social media account
document.querySelector("#facebookAuth").addEventListener("click", (e) => {

  e.preventDefault();
  console.log("facebook");
  //facebookAuth();
});

document.querySelector('#googleAuth').addEventListener("click", () => {
  alert("k rollo");
  //googleAuth();
});

document.querySelector('#twitterAuth').addEventListener("click", () => {
  alert("k pex");
  //twitterAuth();
});
*/

export { logIn, signUp };

