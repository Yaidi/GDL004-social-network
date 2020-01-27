import { facebookAuth, googleAuth, twitterAuth, logInFn, createUser } from "../Model/firebase.js";

//Log in / Sign up with email
function logIn(email, password, errorMsg) {
 logInFn(email, password)
  .then(() => {
    window.location.hash = "#/home"
  })
  .catch((error) => {
    console.log(error);
    const errorCode = error.code;
    const errorMessage = error.message;
    switch (errorCode) {
      case 'auth/user-not-found':
        errorMsg.innerHTML = '*Usuario no registrado';
        break;
      case 'auth/wrong-password':
        errorMsg.innerHTML = '*Contraseña incorrecta';
        break;
      case 'auth/invalid-email':
        errorMsg.innerHTML = '*Formato de correo no válido';
        break;
      default:
        errorMsg.innerHTML = '*Algo salió mal. Inténtalo de nuevo';
    }
  });
};

//Log in / Sign up with facebook
/*function facebookSignIn(){
  facebookAuth()
    .then((result) => {
      const user = result.user;
      const token = result.credential.accesToken;
      createUser(user.uid, user.displayName, user.email, user.photoURL);
      window.location.hash ='#/home';
      console.log('auth user fb', result.user, user, token);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Ups! Algo salió mal. Error detectado: ${errorMessage}`)
      console.log('error detectado:', error);
    });
};

function googleSignIn(){
  googleAuth()
    .then((result) => {
      const user = result.user;
      const token = result.credential.accesToken;
      createUser(user.uid, user.displayName, user.email, user.photoURL);
      window.location.hash ='#/home';
      console.log('auth user google', result.user, user, token);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Ups! Algo salió mal. Error detectado: ${errorMessage}`)
      console.log('error detectado:', error);
    });
};

function twitterSignIn(){
  twitterAuth()
    .then((result) => {
      const user = result.user;
      const token = result.credential.accesToken;
      createUser(user.uid, user.displayName, user.email, user.photoURL);
      window.location.hash ='#/home';
      console.log('auth user tw', result.user, user, token);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Ups! Algo salió mal. Error detectado: ${errorMessage}`)
      console.log('error detectado:', error);
    });
};*/

export { logIn, facebookSignIn, googleSignIn, twitterSignIn };