function registerFn(email, password) {

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert('Tu contraseña p tu correo está mal');

    });
}

function accesUsers(email, password) {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Tu contraseña p tu correo está mal');
        // ...
    });
    email - password.html
}

export { registerFn, accesUsers };