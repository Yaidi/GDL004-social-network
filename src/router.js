function reloadPageWithHash() {
    let initialPage = location.pathname;
    return location.replace(window.location + initialPage);
};

console.log(reloadPageWithHash);

const htmls = (hash) => {
    if (hash === '#/register' || hash === '#/ingreso' || hash === '#/redsocial') {
        return (hash);
    }
};
console.log(window.location);

window.addEventListener('load', htmls(window.location.hash));
export { reloadPageWithHash, htmls };

Home => #/
Catalogo => #/catalogo
Accesorios => #/accesorios
Lugares => #/lugares