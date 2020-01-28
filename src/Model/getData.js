function getProfile(db) {
    db.collection('users').get().then((snapshot) => {
        console.log(snapshot.docs);
    })
}




export { getProfile };