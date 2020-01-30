export { userInfo, dataBase };


// Retrieve Firestore data
const dataBase = firebase.firestore();
/*dataBase.collection('users').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
  })
});*/

//Showing user info
function userInfo (userName, userPic){
    const auth = firebase.auth();
    return auth.onAuthStateChanged((user) => {
        if (user) {
            const id = firebase.auth().currentUser.uid;
            dataBase.collection('users').where("ID", "==", id).get()
            .then((querySnapshot) => {
              querySnapshot.forEach((document) => {
                userName.textContent = document.data().Email;
                userPic.src = document.data().Foto;
              });
            }).catch((error) => {
              console.log("Error al obtener el documento", error);
            });
        }
    })
};

/*
function savePost(){
  dataBase.collection('posts').add({
    post: 
  })
}*/