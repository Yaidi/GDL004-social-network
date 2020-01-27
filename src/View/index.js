import Welcome from "./welcome.js";
import Register from "./register.js";
import Home from "./home.js";
import Perfil from "./perfil.js"

const components = {
    welcome: Welcome,
    register: Register,
    home: Home,
    perfil: Perfil,
};

localStorage.setItem("templates", JSON.stringify(components));

export { components };