var num1 = parseInt(prompt("Introduce un Numero par o impar: "));

while (num1 <= 0 || isNaN(num1)){
    num1 = parseInt(prompt("Introduce un Numero par o impar: "));
}

function parOimpar(num1){
    if (num1 % 2 == 0){
    console.log("El numero " + num1 + " Es par");
    }
    else if(num1 % 2 != 0){
    console.log("El numero " + num1 + " Es impar");
    }

}

console.log("**Ejercicio 6");
parOimpar(num1);