export default () => {
    const viewHome = `
        <h1>Welcome User</h1>
        <div id="userID"></div>
        <button type="submit" id="logOut">salir</button>`
    
    const divElmnt = document.createElement("div")
    divElmnt.innerHTML = viewHome;

    return divElmnt;
};