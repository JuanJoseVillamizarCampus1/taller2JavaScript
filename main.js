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
/*
5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo.*/

let numero1 = Number(prompt("Ingrese un numero: "));
let numero2 = Number(prompt("Ingrese otro numero: "));
let suma;

if (numero1>numero2){
    suma = numero2+numero2;
    resta = numero1-numero2;
    alert(`La suma de los dos numeros es ${suma}, y la diferencia es ${resta}`)
}
else {
    multi= numero1*numero2;
    division =numero1/2;
    alert(`La MUltiplicacion de los dos numeros es ${multi}, y la diferencia es ${division}`)
}

/*
6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres.
*/

let cantidadDeEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes"));
let mujeres=0;
let hombres=0;
let notaMasAlta;
let notaMasBaja;
for (let i = 1 ; i <= cantidadDeEstudiantes; i++){
    let name = prompt("Digite el nombre del estudiante").toUpperCase();
    let sexo = prompt("Para registrar una mujer digite la letra M y para un hombre digite la letra H ").toUpperCase();
    let notas = parseFloat(prompt("Digite la nota definitiva del estudiante"));


    if (sexo === "M"){
        mujeres++;
    }
    else if(sexo === "H"){
        hombres++;
    }
    else{
        alert("Digite un valor correcto para hombre o mujer");
    }
    if (notaMasAlta==undefined){
        notaMasAlta = { name,sexo,notas};
    }
        else if(notas>notaMasAlta.notas){
            name=notaMasAlta.name;
            sexo=notaMasAlta.sexo;
            notas=notaMasAlta.notas;
        
        }
    if (notaMasBaja==undefined){
            notaMasBaja = { name,sexo,notas};
        }
        else if(notas<notaMasBaja.notas){
                name=notaMasBaja.name;
                sexo=notaMasBaja.sexo;
                notas=notaMasBaja.notas;
            
        }    
   
}

console.log(`el total de hombres es ${hombres}`);
console.log(`el total de mujeres es ${mujeres}`);
console.log(`La nota mas alta fue ${notaMasAlta.notas}`)
console.log(`La nota mas baja fue ${notaMasBaja.notas}`)