
const app = {

    init: function () {
        console.log("app.init() 🥸");
        toggleMenu.init();
    }
}

/** Dès que le DOM est chargé, on appelle la méthode init() de notre objet / module app */
document.addEventListener("DOMContentLoaded", app.init);