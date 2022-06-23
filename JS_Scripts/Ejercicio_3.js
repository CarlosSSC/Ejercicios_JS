'use-strict'
var num1 = parseInt(prompt("Introduce el Numero 1: "));
var num2 = parseInt(prompt("Introduce el Numero 2: "));

console.log("**Ejercicio 3")
for(var i = num1; i < num2; i++) {
    console.log("Numeros entre " + num1 + " y " + num2 + ": " + i);
}