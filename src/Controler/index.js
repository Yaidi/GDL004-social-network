import { components } from "../View/index.js"

const changeView = (route) => {
    const container = document.querySelector("#app");
    container.innerHTML = "";
    switch (route) {
        case "":
            { return container.appendChild(components.welcome()) }
            break
        case "#/":
            { return container.appendChild(components.welcome()) }
            break
        case "#/register":
            { return container.appendChild(components.register()) }
            break
        case "#/home":
            { return container.appendChild(components.home()) }
            break
    }
    console.log(route)
};


export { changeView }