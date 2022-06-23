'use-strict'

var num1 = parseInt(prompt("Introduce el Numero 1: "));
var num2 = parseInt(prompt("Introduce el Numero 2: "));

while (num1 <= 0 || isNaN(num1)){
    num1 = parseInt(prompt("Introduce el Numero 1: "));
}

while (num2 <= 0 || isNaN(num2)){
    num2 = parseInt(prompt("Introduce el Numero 2: "));
}


//comparacion
function comparacion(num1, num2){
    if (num1 == num2){
        console.log("Los numeros son iguales");
    }
    else if(num1 > num2){
        console.log("El numero 1 es mayor que el numero 2");
    }
    else if(num1 < num2){
        console.log("El numero 1 es menor que el numero 2");
    }
}

console.log("**Ejercicio 1");
comparacion(num1,num2);