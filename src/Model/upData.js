const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);
let db = admin.firestore();

function profile(nameCreate, ocupationCreate, descriptionCreate) {
    db.collection('userProfile').add({
        name: nameCreate,
        country: country,
        description: descriptionCreate,
        occupation: ocupationCreate,
    }).then(ref => {
        console.log('Added document with ID: ', ref.id);
    });
}

export { profile };