export default () => {
    const viewHome = document.createElement('div');
    viewHome.innerHTML= `
    <div id="menu">
        <p>FemmeApp</p>
        <div class="nav">
            <a href="#/home"><img class="navBtns" src="./images/home.png"></a>
            <a href="#/profile"><img class="navBtns" src="./images/avatar.png"></a>
            <a href="#/"><img class="navBtns" src="./images/logout.png"></a>
        </div>
    </div>
    <div id='header'>
        <h1>Welcome User</h1>
        <div id="userID">
    </div>
    <div id='newPost'>
        <input type='text' placeholder='¿Qué estás pensando?'>
        <img src='../images/add-picture.png' >
        <img src='../images/add-file.png' >
        <button type='submit'>Publicar</button>
    </div>`
    
    
    const userId = viewHome.querySelector("#userID");

    return viewHome;
};