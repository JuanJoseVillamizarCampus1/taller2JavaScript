// /*1. Construir el algoritmo para un programa que ingrese tres
// notas de un alumno, si el promedio es menor o igual a 3.9
// mostrar un mensaje "Estudie“, de lo contrario un mensaje que
// diga "becado"
// */
// alert("Programa para calificar almuno segun sus notas de 0 a 5")   

// let nota1 = parseFloat(prompt("Ingrese la nota 1"));
// let nota2 = parseFloat(prompt("Ingrese la nota 2"));
// let nota3 = parseFloat(prompt("Ingrese la nota 3"));

// let promedio = (nota1+ nota2 + nota3)/3;

// if (promedio <= 3.9 ){
//     alert("Estudie")
// }
// else if (promedio > 3.9 && promedio<=5){
//     alert("Becado mijo siga asi")
// }
// else{
//     alert("Ingrese valores de notas entre 0 y 5")
// }

// /*2. Dado un número indicar si es par o impar y si es mayor de 10.*/

// let number = 75;

// if (number%2==0){
//     console.log("El numero es par");
//     console.log(number);

// }
// else {
//     console.log("El numero es impar")
// }


// /*
// 3. Construir el algoritmo para determinar el voltaje de un
// circuito a partir de la resistencia y la intensidad de corriente.*/

// let i = 0.58;
// let r = 330;
// let v;
// v = i*r

// console.log(`EL VOLTAJE ES ${v.toFixed(2)}`);

// /*
// 4. Construir el algoritmo que solicite el nombre y edad de 3
// personas y determine el nombre de la persona con mayor edad.*/

// name1 = prompt("Indique el nombre de la primer persona")
// edad1 = parseInt(prompt("Indique la EDAD de la primera persona"))
// name2 = prompt("Indique el nombre de la segunda persona")
// edad2 = parseInt(prompt("Indique la EDAD de la segunda persona"))
// name3 = prompt("Indique el nombre de la tercera persona")
// edad3 = parseInt(prompt("Indique la EDAD de la tercera persona"))

// if (edad1>edad2&&edad1>edad3){
//     alert(`La persona de mayor edad es: ${name1}`)
// }

// else if (edad2>edad3&&edad2>edad1){
//     alert(`La persona de mayor edad es: ${name2}`)
// }
// else{
//     alert(`La persona de mayor edad es: ${name3}`)
// }
// /*
// 5. Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.*/

// let numero1 = Number(prompt("Ingrese un numero: "));
// let numero2 = Number(prompt("Ingrese otro numero: "));
// let suma;

// if (numero1>numero2){
//     suma = numero2+numero2;
//     resta = numero1-numero2;
//     alert(`La suma de los dos numeros es ${suma}, y la diferencia es ${resta}`)
// }
// else {
//     multi= numero1*numero2;
//     division =numero1/2;
//     alert(`La MUltiplicacion de los dos numeros es ${multi}, y la diferencia es ${division}`)
// }

/*
6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres.
*/

// let cantidadDeEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes"));
// let mujeres=0;
// let hombres=0;
// let notaMasAlta = -1;
// let notaMasBaja= 101;
// let nombreMax="";
// let nombreMin="";

// for (let i = 1 ; i <= cantidadDeEstudiantes; i++){
//     let name = prompt("Digite el nombre del estudiante").toUpperCase();
//     let sexo = prompt("Para registrar una mujer digite la letra M y para un hombre digite la letra H ").toUpperCase();
//     let notas = parseFloat(prompt("Digite la nota definitiva del estudiante"));
    


//     if (sexo === "M"){
//         mujeres++;
//     }
//     else if(sexo === "H"){
//         hombres++;
//     }
//     else{
//         alert("Digite un valor correcto para hombre o mujer");
//     }
    
    
//     if (notas > notaMasAlta){
//         notaMasAlta = notas;
//         name=nombreMax;
//     }
      
        
//     if (notas < notaMasBaja){
//             notaMasBaja = notas};
//             name=nombreMin;
        
//     }
    


// console.log(`el total de hombres es ${hombres}`);
// console.log(`el total de mujeres es ${mujeres}`);
// console.log(`La nota mas alta fue de ${nombreMax} con  ${notaMasAlta}`)
// console.log(`La nota mas baja fue de ${nombreMin} con ${notaMasBaja}`)


/*
7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura.*/


// let nombreProducto =prompt("Ingrese el nombre del producto");
// let cantidad = parseInt(prompt(`Ingrese la cantide de ${nombreProducto} que desea llevar`));
// let precio = parseFloat(prompt("Ingrese el precio del producto"))

// let total = cantidad*precio;

// console.log(`El total a pagar por llevar ${cantidad} ${nombreProducto} es : ${total}`);

/*8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo*/

// ladoCuadrado=parseFloat(prompt("Ingrese el valor del lado de un cuadrado"));
// perimetroCuadrado= ladoCuadrado*4;

// baseTriangulo=parseFloat(prompt("Ingrese el valor de la base del triangulo:"));
// altura=parseFloat(prompt("Ingrese la altura del triangulo"));

// areaTriangulo = (baseTriangulo*altura)/2;

// console.log(`El perimetro de cuadrado es ${perimetroCuadrado} y el area del triangulo es ${areaTriangulo}`);


/*
9. N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros.*/

let nAtletas = parseInt(prompt("DIgite la cantidad de atletas en finales"));
let nameAtletaMax="";
let record=15.50;
let marcaMax=-1;
let nuevoRecord;


for(let z =1 ;z<=nAtletas;z++){
    let nameAtleta=prompt("DIgite el nombre de la atleta")
    marca=parseFloat(prompt("Digite la marca registrada por la atleta"))

    if(marca>marcaMax){
        marcaMax=marca;
        nameAtleta=nameAtletaMax;
        
    }
    if(marcaMax>15.50){
          nuevoRecord = marcaMax;
            console.log(`La atleta ${nameAtletaMax} rompio el record con ${nuevoRecord}`);
        }

     else {
        console.log(`La atleta no rompio el record y la marca mas alta fue ${marcaMax}`);
     }   
    }
 ``