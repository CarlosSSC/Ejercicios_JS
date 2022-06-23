'use-strict'

var num1 = parseInt(prompt("Introduce el Numero 1: "));
var num2 = parseInt(prompt("Introduce el Numero 2: "));

console.log("**Ejercicio 4")
console.log("Los numeros impares entre " + num1 + " y " + num2 + " son: ")

for(var i = num1; i <= num2; i++) {

    if (i % 2 != 0){
        console.log(i)

    } 


}

