'use-strict'

var numero = parseInt(prompt("Hasta que numero quieres multiplicar?: "));

console.log("**Ejercicio 7");
console.log("Todas las multiplicaciones desde 1 hasta el numero " + numero + " son: ");

for(var a = 1; a <= numero; a++) {

    for (let b = 1; b <= numero; b++){
        multiplicacion = a*b;

        console.log(a + " * " + b + " = " + multiplicacion);
    }


}

