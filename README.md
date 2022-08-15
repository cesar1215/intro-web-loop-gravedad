# Lab: Loops para Crear Efecto Gravedad

## Objetivos
- Crear funciones
- Seleccionar elementos utilizando `.querySelector()`
- Cambiar el estilo de un elemento utilizando `.style`

## Introducción
Hemos aprendido que en la programación muchas veces necesitamos que nuestro código realice una tarea especifica varias veces. Por ejemplo, para crear un efecto de "graveded" podemos mover un elemento 2 pixeles hacia abajo cada 2 segundos de tal forma que parezca que el elemento se esta cayendo. En lugar de reescribir el mismo código varias veces, podemos crear una función y llamarla cada determinado tiempo. 

Es hora de poner en práctica nuestros aprendizajes. 

### Funcionalidad del Código

En éste lab crearás un efecto de gravedad sobre `bird`, de tal manera que se mueva 2 pixeles hacia abajo cada 2 segundos y parezca que `bird` esta cayendo al suelo.

## Instrucciones
Bifurca (fork) y clona (clone) este lab en tu entorno local. Navega a su directorio en la terminal, luego ejecuta el comando `code .` para abrir sus archivos en Visual Studio Code. 

1. Creaa una variable `bird` con el valor del elemento con clase `.bird`

2. Creaa una variable `gravedad` con el valor del numero `2`

2. Creaa una variable `birdBottom` con el valor del numero `100`

3. Crea la función `efectoGravedad()`. Cuando se llame a la función `efectoGravedad()`:
- El valor de la variable `birdBottom` debe disminuir por el valor de la variable `gravedad`
- El valor de la propiedad `bottom` de `bird` debe ser el nuevo valor de `birdBottom + "px"`


4. Crea la función `loop()`. Cuando se llame a la función `loop()`:
- Se debe de llamar a la función `efectoGravedad()`

5. Crea una variable `timerId` con valor de: `setInterval(loop, 20)`



