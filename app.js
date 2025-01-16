
//Variables
let nuemroMaximoPosible = 1000;
let numeroUsuario = 0;
let numeroSecreto =  Math.floor(Math.random() *1000)+1;
console.log(`El número secreto es: ${numeroSecreto}`);
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero por favor entre 1 y ${nuemroMaximoPosible}`));

    console.log(typeof(numeroUsuario));

    //Este codigo sirve para la comparacion 
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el número es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //No acertamos, fue falsa la condicion
        alert('Lo siento, no acertaste el número')

        //Aumentamos el numero de intentos cuando no acierta
        intentos++;
        palabraVeces = 'veces';

        if(intentos > maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}









//If - else

/*
let nombre = "Lua";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeerror = "¡Error! Completa todos los campos";

alert("¡Bienvenida y Bienvenido a nuestro sitio web");
alert("¡Error! Completa todos los campos");
alert(mensajeDeerror);

nombre = prompt("Ingresa tu nombre");
edad = prompt("Ingresa tu edad");

if(edad >= 18){
    alert("¡Puedes obtener tu licencia de conducir!");
}
*/

/*
let diaSemana = prompt ("Que  día de la semana es hoy?");

if(diaSemana == 'Domingo' || diaSemana ==  'Sábado'){
    alert("¡Buen fin de semana!")
}else{
    alert("¡Buena semana!")
}
*/

/*
let numero = prompt("Ingresa un número:");

if(numero > 0 ){
    alert("El número es positivo");
} else if (numero < 0) {
    alert("El número es negativo");
} else{
    alert("El número es cero");
}
*/

/*
let puntuacion = prompt("Ingresa la puntuación");

if(puntuacion >= 100){
alert("¡Felicidades, has ganado");
}else{
    alert("Intentalo nuevamente para ganar.")
}
    */

/*
let saldoCuenta = 480;
alert(`El saldo de tu cuenta es de: ${saldoCuenta} MXN`);
*/

/*
nombreUsuario = prompt("Ingresa tu nombre de usuario");
console.log(typeof nombreUsuario);
alert(`Bienvenido: ${nombreUsuario}`);
*/


/*
//loops

let contador = 1;
let contadorDos = 10;
let contadorTres = prompt("Ingresa un numero para iniciar la cuenta regresiva...")
let contadorCuatro = prompt("Ingresa un numero para cuenta progresiva...");
let contadorCinco = 0;
while (contador <= 10){
    console.log(contador);
    contador++;
}

while(contadorDos >= 0){
    console.log(contadorDos);
    contadorDos--;
}

while(contadorTres >= 0){
    console.log(contadorTres);
    contadorTres--;
}

while(contadorCinco <= contadorCuatro){
    console.log(contadorCinco);
    contadorCinco++;
}
*/

let nombre = 'Gabriel';
let lenguajeProgramacion = '';
let valor1 = 18;
let valor2 = 5;
let resultado = valor1 + valor2;
let edad = 0;
let numero = 0;
let contador = 1;
let numeroMaximo = 0;
let nota = 8;
let numRandom = Math.random();
let numeroRandom2 = Math.floor(Math.random()*10)+1;
let numeroRandom3 = Math.floor(Math.random()*1000)+1;

/*
console.log(`¡Hola, ${nombre}!`);
alert(`¡Hola, ${nombre}!`);  

lenguajeProgramacion = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguajeProgramacion);

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

valor1 = 21;
valor2 = 25;
resultado = valor1 - valor2;

console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`);

edad = prompt("Ingresa tu edad");

if (edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

numero = prompt("Ingresa un número");

if( numero == 0){
    console.log("El número es cero");
}else if(numero > 0){
    console.log("El número es positivo");
}else if(numero < 0){
    console.log("El número es negativo");
}

while(contador <= 10){
console.log(contador);
contador++;
}


if (nota >= 7){
    console.log("Aprobaste la materia");
}else{
    console.log("Reprobaste la materia");
}

console.log(numRandom);
console.log(numeroRandom2);
console.log(numeroRandom3);

*/