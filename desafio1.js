
alert ("¡Bienvenida y bienvenido a nuestro sitio web!.");

let nombre = "luna";

let edad = 25;

let numerodeventas = 50;

let saldoDisponible = 1000;

alert ("¡Error!Completa todos los campos");

let mensajeDeError = ("¡Error!Completa todos los campos");

alert (mensajeDeError);

let cualNombre = prompt("Cual es tu nombre?");
let cualEdad = prompt("Cual es tu edad?");

if(cualEdad >= 18 ){
    alert(cualNombre + " ¡Puedes obtener tu licencia de conducir! ");
}
else{
    alert(cualNombre + "¡No Puedes obtener tu licencia de conducir! ");

}


// Desafio 2

const diaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    
const d = new Date();
let dia = diaSemana[d.getDay()];

if(diaSemana == "Sabado" || diaSemana == "Domingo"){
    console.log(`Si es fin de semana, hoy es ${dia}`);
}
else{
    console.log(`No es fin de semana, hoy es ${dia}`)
}