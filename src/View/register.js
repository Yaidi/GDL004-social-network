export default () => {
    const viewRegister = `
    <div class="register"> 
        <h2>Bienvenida</h2>
            <form id="form">
                <input type="email" name="email" id="emailField" placeholder="correo"></br>
                <input type="password" name="password" id="passwordField" placeholder="contraseña"></br>
                <button type="submit" id="logIn">ingresa</button></br>
                <button type="submit" id="register">regístrate</button></br>
            </form>
        <p>Ó inicia sesión con</p>
        <div id="socialAuth">
            <img src="./images/facebook.png" alt="facebook" id="facebookAuth" class="socialMedia">
            <img src="./images/google.png" alt="Google" id="googleAuth" class="socialMedia">
            <img src="./images/twitter (1).png" alt="Twitter" id="twitterAuth" class="socialMedia"></img>
        </div>
    </div>`

    const divElmnt = document.createElement("div")
    divElmnt.innerHTML = viewRegister;

    return divElmnt;
};