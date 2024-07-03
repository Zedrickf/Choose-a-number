let numMaxRan = 0;
let NumUsuario = 0;
let contador = 1;
let maxCiclos = 0;
let repita = 1;
let Nombre2 = 0;
let NumSecreto = 0;

alert ("¡Bienvenido y bienvenida a nuestro sitio web!");//funcion que emite un mensaje de alerta

//en esta linea pido al usuario informacion y la almaceno en una variable tipo let
Nombre2 = prompt ("indica tu nombre por favor: ");

//imprimo valor de la variable en consola
console.log (NumSecreto); 

do {
    //pido al usuario un valor y lo transformo caracter a entero antes de almacenarlo en la variable
    numMaxRan = parseInt (prompt ("indique el rango del numero para adivinar, entre 1 y ¿? :"));
    maxCiclos = parseInt (prompt ("indique cuantos intentos quieres: "));
    //variable para crear un numero pseudoaleatorio decimal y con el math.floor se pasa a entero
    NumSecreto = Math.floor(Math.random()*numMaxRan)+1;
    
    do{
    
        NumUsuario = prompt (`indique un numero entre 1 y ${numMaxRan}: `);
    
        if (NumUsuario == NumSecreto) {
            alert (`Acertaste, ${Nombre2} tu numero de intentos fue ${contador} ${contador == 1 ? 'vez' : 'veces'} y el numero secreto fue ${NumSecreto}`);
        } else {
            if (NumUsuario > NumSecreto) {
                alert ("El numero secreto es menor");
            } else {
                alert ("El numero secreto es mayor");
            }
            contador ++;
        }
    
        if (contador > maxCiclos) {
            alert (`numero de ${maxCiclos} intentos alcanzados. El numero secreto era ${NumSecreto}`);
            break;
        }
    
    }while (NumUsuario != NumSecreto)

    repita = parseInt (prompt (`¿Deseas intentarlo nuevamente ${Nombre2}? 1 = SI / 2 = NO`));

} while (repita == 1)


