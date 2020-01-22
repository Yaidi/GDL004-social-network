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
<<<<<<< HEAD
>>>>>>> 2044ef7be7e8dbd8d8bf67ba1274f6f65b67db73
=======
>>>>>>> b033bcba60c0bd62d74d63b52385ae9439904b6a
});
/*
document.querySelector("#logOut").addEventListener("click", (e) => {
  e.preventDefault();
  alert("log out")
  //logOutFn();
});

//Log in / Sign up with social media account
document.querySelector("#facebookAuth").addEventListener("click", (e) => {
<<<<<<< HEAD
=======

>>>>>>> b033bcba60c0bd62d74d63b52385ae9439904b6a
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