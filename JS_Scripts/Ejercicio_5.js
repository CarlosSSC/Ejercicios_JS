'use-strict'

var numero = parseInt(prompt("Introduce el Numero a dividir: "));

console.log("**Ejercicio 5")
console.log("Los numeros divisores de " + numero + " son: ")

for(var i = 0; i <= numero; i++) {

    if (numero % i == 0){
        console.log(i)

    } 


}

