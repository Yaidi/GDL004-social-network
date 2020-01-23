import { components } from "../View/index.js"

const router = (route) => {
    const container = document.querySelector("#app");
    container.innerHTML = "";
    switch(route) {
        case "":
        { return container.appendChild(components.welcome()) }    
        case "#/": 
        { return container.appendChild(components.welcome()) }
        case "#/register": 
        {return container.appendChild(components.register()) }
        case "#/home":
        { return container.appendChild(components.home()) }
        default:
            break;
    }
    console.log(route)
};

export { router }