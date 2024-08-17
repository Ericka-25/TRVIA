
// tomo los elementos del html
const nombre = document.querySelector("#nombre");
const btnComenzar = document.querySelector("#comenzar");

// Asegurarse que existe valor en localStorage antes de asignarlo
if (localStorage.getItem("nombre")) {
    nombre.value = localStorage.getItem("nombre");
}

// Agrego un event listener clic al botón comenzar
btnComenzar.addEventListener("click", () => {
    // seteo los valores del local storage que serán necesarios en las otras páginas
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("puntaje-total", 0);
    localStorage.removeItem("categorias-jugadas");

  

    // redirijo a la parte del menú
    location.href = "menu.html";
});

