import { userTemplate } from './userTemplate.js';

export default () => {
    const viewHome = document.createElement('div');
    viewHome.innerHTML= `
    <div id='home'>
        <!--div id='upperMenu'>
            <p>Inicio</p>
            <a href="#/home"><img class="navBtns" src="./images/home.png"></a>
        </div-->
        <div id="dsktpMenu">
            <p>FemmeApp</p>
            <div class="nav">
                <a href="#/home"><img class="navBtns" src="./images/home.png"></a>
                <a href="#/profile"><img class="navBtns" src="./images/avatar.png"></a>
                <a href="#/"><img class="navBtns" src="./images/logout.png"></a>
            </div>
        </div>
        <div id='userTemplate'></div>
        <div id='newPost'>
            <input type='text' placeholder='¿Qué estás pensando?'></br>
            <div id='postMenu'>
                <div id='addFiles'>
                    <img src='../images/add-img.png' class='postBtns'>
                    <img src='../images/add-file.png' class='postBtns'>
                </div>
                <button type='submit'>Publicar</button>
            </div>
        </div>
        <!--div id='bottomMenu'>
            <a href="#/home"><img class="navBtns" src="./images/home.png"></a>
            <a href="#/profile"><img class="navBtns" src="./images/avatar.png"></a>
            <a href="#/"><img class="navBtns" src="./images/logout.png"></a>
        </div-->
    </div>
    `;

    const userView = viewHome.querySelector('#userTemplate');
    userView.appendChild(userTemplate());

    return viewHome;

};
