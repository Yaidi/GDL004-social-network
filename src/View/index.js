import Welcome from "./welcome.js";
import Register from "./register.js";
import Home from "./home.js";
import { profileEdit } from "./editProfile";
import { viewProfile } from "./viewProfile.js";

const components = {
    welcome: Welcome,
    register: Register,
    home: Home,
    edit: profileEdit,
    profile: viewProfile,
};

localStorage.setItem("templates", JSON.stringify(components));

export { components };