/*1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"
*/
alert("Programa para calificar almuno segun sus notas de 0 a 5")   

let nota1 = parseFloat(prompt("Ingrese la nota 1"));
let nota2 = parseFloat(prompt("Ingrese la nota 2"));
let nota3 = parseFloat(prompt("Ingrese la nota 3"));

let promedio = (nota1+ nota2 + nota3)/3;

if (promedio <= 3.9 ){
    alert("Estudie")
}
else if (promedio > 3.9 && promedio<=5){
    alert("Becado mijo siga asi")
}
else{
    alert("Ingrese valores de notas entre 0 y 5")
}

/*2. Dado un número indicar si es par o impar y si es mayor de 10.*/

let number = 75;

if (number%2==0){
    console.log("El numero es par");
    console.log(number);

}
else {
    console.log("El numero es impar")
}


/*
3. Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente.*/

let i = 0.58;
let r = 330;
let v;
v = i*r

console.log(`EL VOLTAJE ES ${v.toFixed(2)}`);

/*
4. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad.*/

name1 = prompt("Indique el nombre de la primer persona")
edad1 = parseInt(prompt("Indique la EDAD de la primera persona"))
name2 = prompt("Indique el nombre de la segunda persona")
edad2 = parseInt(prompt("Indique la EDAD de la segunda persona"))
name3 = prompt("Indique el nombre de la tercera persona")
edad3 = parseInt(prompt("Indique la EDAD de la tercera persona"))

if (edad1>edad2&&edad1>edad3){
    alert(`La persona de mayor edad es: ${name1}`)
}

else if (edad2>edad3&&edad2>edad1){
    alert(`La persona de mayor edad es: ${name2}`)
}
else{
    alert(`La persona de mayor edad es: ${name3}`)
}
