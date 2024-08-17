// Cargamos en un arreglo las imágenes de las series. Este será el orden que se mostrarán
let banderas = ["TWD.jpg", "silicon.jpg", "mrRobot.jpg", "sthing.jpg", "teotfw.jpg"];

// Arreglo que guardará la opción correcta
let correcta = [2, 1, 0, 1, 2];

// Arreglo que guardará las opciones a mostrar en cada jugada
let opciones = [];
// Cargamos en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["FROM", "THE LAST OF US", "THE WALKING DEAD"]);
opciones.push(["LOS INFORMATICOS", "SILICON VALLEY", "BETAS"]);
opciones.push(["MR ROBOT", "UPLOAD", "BLACK MIRROR"]);
opciones.push(["DARK", "STRANGER THINGS", "SENSE 8"]);
opciones.push(["I AM NOT OKAY WITH THIS", "LOS 100", "THE END OF THE FUCKING WORLD"]);

// Variable que guarda la posición actual
let posActual = 0;
// Variable que guarda la cantidad acertadas hasta el momento
let cantidadAcertadas = 0;

// Variable para el temporizador
let tiempoRestante = 30;
let interval;

// Esta función se llama cuando el juego comienza
function comenzarJuego() {
    // Reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    // Activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();
}

// Función que carga la siguiente bandera y sus opciones
function cargarBandera() {
    // Controlamos si se acabaron las banderas
    if (banderas.length <= posActual) {
        terminarJuego();
    } else { // Cargamos las opciones
        // Limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgSerie").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];

        // Reiniciamos y comenzamos el temporizador
        iniciarTemporizador(30);
    }
}

function limpiarOpciones() {
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida) {
    // Detenemos el temporizador
    clearInterval(interval);
    if (opElegida == correcta[posActual]) { // Acertó
        // Agregamos las clases para colocar el color verde a la opción elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else { // No acertó
        // Agregamos las clases para colocar en rojo la opción elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        // Opción que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    // Esperamos 1 segundo y pasamos a mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera, 1000);
}

function terminarJuego() {
    // Ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    // Agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}

function volverAlInicio() {
    // Redirigimos al usuario a la página de inicio
    location.href = "menu.html";
}

function iniciarTemporizador(segundos) {
    tiempoRestante = segundos;
    document.getElementById("time").textContent = tiempoRestante;

    interval = setInterval(() => {
        tiempoRestante--;
        document.getElementById("time").textContent = tiempoRestante;
        if (tiempoRestante <= 0) {
            clearInterval(interval);
            // Si el tiempo se acaba, pasamos a la siguiente bandera
            posActual++;
            setTimeout(cargarBandera, 1000);
        }
    }, 1000);
}
