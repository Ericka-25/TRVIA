

document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el elemento donde se mostrará el nombre del jugador
    const nombreJugador = document.querySelector("#nombre-jugador");
    nombreJugador.textContent = localStorage.getItem("nombre") || "Jugador";

    // Función para redirigir a la página correspondiente
    const redirectToPage = (categoryId, url) => {
        const categoryElement = document.querySelector(`#${categoryId}`);
        if (categoryElement) {
            categoryElement.addEventListener("click", () => {
                location.href = url;
            });
        }
    };

    // Agregar event listeners para cada categoría
    redirectToPage("animada", "index.html");
    redirectToPage("terror", "indexterror.html");
    redirectToPage("series", "indexserie.html");
});

function volverAlBienvenida() {
    // Redirigimos al usuario a la página de inicio
    location.href = "Bienvenida.html";
}
