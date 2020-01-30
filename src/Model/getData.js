const db = firebase.firestore()
let user = firebase.auth().currentUser;

function getProfile() {
    if (user) {
        // User is signed in.
        db.collection('profiles').where("ID", "==", user).get().then((snapshot) => {
            snapshot.forEach((document) => {
                userName.textContent = document.data().userName;
                userPhoto.src = document.data().photo;
                userDesc.textContent = document.data().description;
                userOcup.textContent = document.data().ocupation;
            });
        })
    } else {
        // No user is signed in.
        alert('no se encontraron tus datos');
    }

    return getProfile
}

export { getProfile };