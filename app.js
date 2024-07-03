let numMaxRan = 0;
let NumUsuario = 0;
let contador = 1;
let maxCiclos = 0;

alert ("¡Bienvenido y bienvenida a nuestro sitio web!");//funcion que emite un mensaje de alerta

//en esta linea pido al usuario informacion y la almaceno en una variable tipo let
let Nombre2 = prompt ("indica tu nombre por favor: ");
//pido al usuario un valor y lo transformo caracter a entero antes de almacenarlo en la variable
maxCiclos = parseInt (prompt ("indique cuantos intentos quieres: "));
numMaxRan = parseInt (prompt ("indique el rango del numero para adivinar, de 1 a ¿? :"));

//variable para crear un numero pseudoaleatorio decimal y con el math.floor se pasa a entero
let NumSecreto = Math.floor(Math.random()*numMaxRan)+1;
//imprimo valor de la variable en consola
console.log (NumSecreto); 

while (NumUsuario != NumSecreto){

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

}





/*

let MayorEdad = 18;
let nombre = "luna";
let Dia1 = "sabado";
let Dia2 = "domingo";
let NumBucle = 1;
let BucleUsu;


let Edad2 = prompt ("ingresa tu edad: ");
//Condicional para edad de admision
if (Edad2 >= MayorEdad) {
    //agregando el + variable + me deja imprimir una variable en pantalla
    alert ("¡Felicidades " + Nombre2 +  " Puedes obterner tu licencia de conducir!");
} else {
    alert ("No cumples con la edad necesaria");
}


let DiaUsu = prompt ("Que dia de la semana es: ");
//Condicional para preguntar el dia de la semana
if (Dia1 == DiaUsu || Dia2 == DiaUsu){
    alert ("Buen fin de semana " + Nombre2 +".");
} else {
    alert ("Buena semana " + Nombre2 +".")
}



let NumUsuario = prompt ("indique un numero entre 1 y 10: ");
//Condicional para numero secreto
if (NumUsuario == NumSecreto) {
    alert ("Acertaste, el numero secreto era " + NumSecreto + ".");
//con esto imprimo un mensaje en pantalla no como una alerta
    document.write ("El valor secreto era " + NumSecreto + ".");
} else {
//con comillas invertidas (``) puedo hacer algo llamado template string e imprimir la variable de esta forma
alert (`Incorrecto, tu valor ingresado fue ${NumUsuario}`);
}


BucleUsu = prompt ("indique los ciclos del bucle: ");

while (NumBucle <= BucleUsu) {
    alert ("ciclo numero "+ NumBucle +".");
    NumBucle++;
}

*/