let digitosHEX = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let rojoHEX = document.getElementById("rojo");
let verdeHEX = document.getElementById("verde");
let azulHEX = document.getElementById("azul");

let rgb = document.querySelector("#rgb");
let colorDiv = document.querySelector("#colorDiv");

function crearElRGB(textoColorHEX) {
    /* 
        Primero: Verificar si no hay campos vacios
        Hemos creado una variable nuevoHEX para almacenar el codigo HEX final
        con la condición de abajo
        Se añadiran tantos ceros para rellenar 2 caracteres

        El trim() quita los espacios iniciales
        Por ejemplo:
        "    hola  ".trim() = "hola"
    */
    let HEX = textoColorHEX.value; // HEX = "3F"

    if(textoColorHEX.value.trim().length !== 2) {
        HEX = textoColorHEX.value.padEnd(2, "0"); // HEX = "3F"
        textoColorHEX.value = HEX // "3F"
    }

    // Segundo: Separar los digitos del HEX y convertirlos a número
    let primerDigito = digitosHEX.indexOf(HEX[0]); // digitosHEX.indexOf("3") = 3
    let segundoDigito = digitosHEX.indexOf(HEX[1]); // digitosHEX.indexOf("F") = 15

    // Tercero: Crear el RGB con la fórmula
    let rgbResultado = (primerDigito * 16) + segundoDigito; // (3 * 16) + 15

    return rgbResultado // 63
}

// Función final
function mostrarElRGB() {
    let rojoRGB = crearElRGB(rojoHEX); // Numero del 0 a 255
    let verdeRGB = crearElRGB(verdeHEX); // Numero del 0 a 255
    let azulRGB = crearElRGB(azulHEX); // Numero del 0 a 255
    rgb.innerHTML = `rgb(${rojoRGB},${verdeRGB},${azulRGB})`; 
    colorDiv.style.backgroundColor = `rgb(${rojoRGB},${verdeRGB},${azulRGB})`;
}

function solo2Digitos(textoColorHEX) {
    if(2 < textoColorHEX.value.length) {
        textoColorHEX.value = "FF"
    }
}