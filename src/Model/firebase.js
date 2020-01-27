/*-------------------------FIREBASE KEY AND CONFIG-------------------------*/

var firebaseConfig = {
    apiKey: "AIzaSyDZBy9n50HCcJmEOL5-zzYyguPmUJGk3yM",
    authDomain: "red-feminista.firebaseapp.com",
    databaseURL: "https://red-feminista.firebaseio.com",
    projectId: "red-feminista",
    storageBucket: "red-feminista.appspot.com",
    messagingSenderId: "7507219044",
    appId: "1:7507219044:web:bc69a1f4bd8ea5a1218571",
    measurementId: "G-2L40V7GZPX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const dataBase = firebase.firestore();

/*------------------------------LOG IN -----------------------------*/

function logInFn(email, password){
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

//This is for view changes. We are not using it yet. 
/*firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      //window.location.assign("#/home");
      //local storage
      var user = firebase.auth().currentUser;
      
      if (user != null) {
        var email_id = user.email;
       // document.querySelector("#userID").innerHTML = "User : " + email_id;
      }
    } else {
      // No user is signed in.
     // document.querySelector("#createAccount").style.display = "block";
      //document.querySelector("#welcomeUser").style.display = "none";
    }
});*/

/*------------------------------SIGN UP -----------------------------*/

function signUpFn (email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

/*------------------------------LOG OUT-----------------------------*/

function logOutFn(){
  return firebase.auth().signOut();
}; 

/*------------------------------FACEBOOK AUTH-----------------------------*/
function facebookAuth(){
  var provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

/*------------------------------GOOGLE AUTH-----------------------------*/
function googleAuth() {
  var provider = new firebase.auth.GoogleAuthProvider();  
  return firebase.auth().signInWithPopup(provider);
};

/*------------------------------TWITTER AUTH-----------------------------*/
function twitterAuth(){
  var provider = new firebase.auth.TwitterAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

/*------------------------------CREATE USER-----------------------------*/
function createUser (id, name, email, foto) {
  return firebase.firestore().collection('users').doc(id).set({
    ID: id,
    Nombre: name,
    Email: email,
    Foto: foto,
  });
};


export { facebookAuth, googleAuth, twitterAuth, logInFn, signUpFn, logOutFn, createUser }
