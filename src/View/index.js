import Welcome from "./welcome.js";
import Register from "./register.js";
import Home from "./home.js";

const components = {
    welcome: Welcome,
    register: Register,
    home: Home
};

localStorage.setItem("templates", JSON.stringify(components));

export { components };