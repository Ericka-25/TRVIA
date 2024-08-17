
//cargo en un arreglo las imganes. Este sera el orden que se mostrarán
let banderas = ["castillo.jpg", "BIGhero.jpg", "Caroline.jpg", "Nausicaae.jpg", "Nicky.jpg"];

//arreglo que guardara la opcion correcta
let correcta = [2,2,1,1,0];

//arreglo que guardara los paises a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push([" EL CASTILLO", "CASTILLO EN EL CIELLO", "CASTILLO AMBULANTE"]);
opciones.push(["HERO BLANCA", "BIG HERO ", "BIG HERO 6"]);
opciones.push(["KAROLINE", "CAROLINE", "KAROLIINA"]);
opciones.push(["NAUSICA", "NAUSICAA DEL VALLE DEL VIENTO ", "MADAGASCAR"]);
opciones.push([ "NICKY, LA APRENDIZ DE BRUJA", "ETIOPIA", "LA PEQUEÑA BRUJA ",]);
//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

//ojo
// Variable para el temporizador.
let tiempoRestante = 30;
let interval;

function comenzarJuego() {
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();

}


//funcion que carga la siguienteImageny sus opciones
function cargarBandera() {
    //controlo sis se acabaron las img
    if (banderas.length <= posActual) {
        terminarJuego();
    }
    else {//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgSerie").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        //ojo
        // Reiniciamos y comenzamos el temporizador.
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
    // Detenemos el temporizador.
    clearInterval(interval);
    if (opElegida == correcta[posActual]) {//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else {//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones
    setTimeout(cargarBandera, 1000);
}
function terminarJuego() {
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
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
            // Si el tiempo se acaba, pasamos a la siguiente bandera.
            posActual++;
            setTimeout(cargarBandera, 1000);
        }
    }, 1000);
}