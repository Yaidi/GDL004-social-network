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

export { logIn, signUp };