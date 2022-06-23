var num1 = parseInt(prompt("Introduce el Numero 1: "));
var num2 = parseInt(prompt("Introduce el Numero 2: "));

while (num1 <= 0 || isNaN(num1)){
    num1 = parseInt(prompt("Introduce el Numero 1: "));
}
while (num2 <= 0 || isNaN(num2)){
    num2 = parseInt(prompt("Introduce el Numero 2: "));
}

console.log("**Ejercicio 8");

var suma = num1 + num2;
alert("la suma es " + suma);
document.write("La suma de " + num1 + " + " + num2 + " es = " + suma + "<br>"); 
console.log("La suma de " + num1 + " + " + num2 + " es = " + suma);

var resta = num1 - num2;
alert("la resta es " + resta);
document.write("La resta de " + num1 + " - " + num2 + " es = " + resta + "<br>");
console.log("La resta de " + num1 + " - " + num2 + " es = " + resta);

var multiplicar = num1 * num2;
alert("la multiplicacion es " + multiplicar);
document.write("La multiplicacion de " + num1 + " * " + num2 + " es = " + multiplicar + "<br>");
console.log("La multiplicacion de " + num1 + " * " + num2 + " es = " + multiplicar);

var dividir = num1 / num2;
alert("la division de " + dividir);
document.write("La division de " +num1 + " / " + num2 + " es = " + dividir + "<br>");
console.log("La division de " + num1 + " / " + num2 + " es = " + dividir);


