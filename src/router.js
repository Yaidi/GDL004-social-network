import { changeView } from "./Controler/index.js"

const init = () => {
    changeView(window.location.hash)
    window.addEventListener("hashchange", () => changeView(window.location.hash))
};

window.addEventListener("load", init);