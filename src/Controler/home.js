export { userInfo };

function userInfo (userName, userPic){
    const auth = firebase.auth();
    return auth.onAuthStateChanged((user) => {
        if (user) {
            const id = firebase.auth().currentUser.uid;
            firebase.firestore().collection('users').where("ID", "==", id).get()
            .then((querySnapshot) => {
              querySnapshot.forEach((document) => {
                console.log("Datos del documento:", document.data());
                userName.textContent = document.data().Email;
                userPic.src = document.data().Foto;
              });
            }).catch((error) => {
              console.log("Error al obtener el documento", error);
            });
        }
    })
};