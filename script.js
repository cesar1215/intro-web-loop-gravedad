/* Ejercicio 1. 
1. Crea una variable bird con el valor del elemento con clase .bird
2. Crea una variable gravedad que tenga el valor del numero 2
3. Crea una variable birdBottom que tenga el valor del numero 100
*/
let bird = document.querySelector(".bird")
let gravedad = 2
let birdBottom = 100
/* Ejercicio 2.
Crea la función efectoGravedad(). Cuando se llame a la función:
- El valor de la variable birdBottom debe disminuir por el valor de la variable gravedad
- El valor de la propiedad bottom de bird debe ser el nuevo valor de birdBottom + "px"
*/
function efectoGravedad(){
    birdBottom -= gravedad
    bird.style.bottom = birdBottom + 'px'
}


/* Ejercicio 3.
Crea la función loop(). Cuando se llame a la función:
- Se debe dellamar a la función efectoGravedad()
*/
function loop(){
    efectoGravedad()
}


// Ejercicio 4. Crea una variable timerId con valor de: setInterval(loop, 20)
let timerId = setInterval(loop, 20)

// funcionalidad para que bird se mueva hacia arriba al pulsar una tecla
function birdMueveArriba() {
    birdBottom += 40
    bird.style.bottom = birdBottom + "px"

}

document.addEventListener("keyup", birdMueveArriba)
