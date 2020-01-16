/*firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.querySelector("#createAccount").style.display = "none";
      document.querySelector("#welcomeUser").style.display = "block";

      var user = firebase.auth().currentUser;
      
      if (user != null) {
        var email_id = user.email;
        document.querySelector("#userID").innerHTML = "User : " + email_id;
      }
    } else {
      // No user is signed in.
      document.querySelector("#createAccount").style.display = "block";
      document.querySelector("#welcomeUser").style.display = "none";
    }
});*/

function logInFn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("ERROR: " + errorMessage);
    });
};


function signUpFn(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
};

function logOutFn() {
    firebase.auth().signOut();
    /*.then(function() {
            // Sign-out successful.
            document.querySelector("#createAccount").style.display = "block";
            document.querySelector("#welcomeUser").style.display = "none";
          }).catch(function(error) {
            // An error happened.
        });*/
};

export { logInFn, signUpFn, logOutFn };