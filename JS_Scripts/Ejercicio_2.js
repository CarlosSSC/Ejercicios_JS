'use-strict'

var suma = 0;
var recuento = 0;
var numero = 0;
    
console.log("**Ejercicio 2");

while (numero >= 0){
    numero = parseInt(prompt("Introduce un numero: "));
    console.log(numero);

    recuento++;
    suma += numero;
}


console.log("La Suma es: " + suma);

var media = (suma - numero) / (recuento-1);
console.log("La Media es: " + media);