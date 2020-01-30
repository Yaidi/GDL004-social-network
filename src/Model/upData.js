const db = firebase.firestore();

function upProfile(nameCreate, ocupationCreate, descriptionCreate) {
    db.collection('profiles').add({
        name: nameCreate,
        country: country,
        description: descriptionCreate,
        occupation: ocupationCreate,
        photo: photoUser,
    }).then(ref => {
        console.log('Added document with ID: ', ref.id);
    });
    return upProfile
}

export { upProfile };