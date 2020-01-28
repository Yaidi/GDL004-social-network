import { components } from "../View/index.js"

const router = (route) => {
    const container = document.querySelector("#app");
    container.innerHTML = "";
    switch (route) {
        case "":
            { return container.appendChild(components.welcome()) }
        case "#/":
            { return container.appendChild(components.welcome()) }
        case "#/register":
            { return container.appendChild(components.register()) }
        case "#/home":
            { return container.appendChild(components.home()) }
        case "#/profile":
            { return container.appendChild(components.profile()) }
        case "#/edit":
            { return container.appendChild(components.edit()) }
        default:
            break;
    }
    console.log(route)
};

export { router }