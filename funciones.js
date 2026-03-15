// ===============================
// ESPERAR QUE CARGUE EL DOCUMENTO
// ===============================
document.addEventListener("DOMContentLoaded", function(){

// ===============================
// MANEJO DE VISTAS
// ===============================

// Obtener todas las vistas
const vistas = document.querySelectorAll(".vista");

// Botones del menú principal
const botones = document.querySelectorAll(".btn[data-vista]");

// Cambiar de vista al presionar un botón
botones.forEach(function(boton){

boton.addEventListener("click", function(){

let destino = boton.getAttribute("data-vista");

// Ocultar todas las vistas
vistas.forEach(function(vista){
vista.classList.remove("activa");
});

// Mostrar la vista seleccionada
let seccion = document.getElementById("vista-" + destino);

if(seccion){
seccion.classList.add("activa");
}

});

});


// ===============================
// BOTONES VOLVER AL INICIO
// ===============================

const botonesVolver = document.querySelectorAll(".btn-volver");

botonesVolver.forEach(function(boton){

boton.addEventListener("click", function(){

// Ocultar todas las vistas
vistas.forEach(function(vista){
vista.classList.remove("activa");
});

// Mostrar vista principal
document.getElementById("vista-inicio").classList.add("activa");

});

});


// ===============================
// VALIDACIÓN DEL FORMULARIO
// ===============================

const formulario = document.getElementById("formulario");

if(formulario){

formulario.addEventListener("submit", function(event){

event.preventDefault();

let edad = document.getElementById("edad").value;
let contacto = document.getElementById("contacto").value;
let mensaje = document.getElementById("mensaje");

// Validar edad
if(edad <= 12){
mensaje.textContent="Error: la edad debe ser mayor a 12";
mensaje.style.color="red";
return;
}

// Validar número de contacto
if(contacto.length != 10){
mensaje.textContent="Error: el contacto debe tener 10 dígitos";
mensaje.style.color="red";
return;
}

// Mensaje de éxito
mensaje.textContent="Inscripción realizada correctamente";
mensaje.style.color="green";

});

}

});


// ===============================
// FUNCIONES DE CULTIVOS
// ===============================

// Mostrar información del café
function mostrarCafe(){

document.getElementById("info-cultivo").innerHTML = `

<h3>Café</h3>
<img src="img/cafe.jpg" width="300">
<img src="img/cafe1.jpg" width="300">
<img src="img/cafe2.jpg" width="300">

<p>
El café es uno de los cultivos más importantes de Colombia.
</p>

`;

}

// Mostrar información del cacao
function mostrarCacao(){

document.getElementById("info-cultivo").innerHTML = `

<h3>Cacao</h3>
<img src="img/cacao.jpg" width="300">
<img src="img/cacao1.jpg" width="300">
<img src="img/cacao2.jpg" width="300">

<p>
El cacao es el fruto del cual se obtiene el chocolate.
</p>

`;

}

// Mostrar información del plátano
function mostrarPlatano(){

document.getElementById("info-cultivo").innerHTML = `

<h3>Plátano</h3>
<img src="img/platano.jpg" width="300">
<img src="img/platano1.jpg" width="300">
<img src="img/platano2.jpg" width="300">

<p>
El plátano es un alimento básico en muchas regiones de Colombia.
</p>

`;

}

// Mostrar información del aguacate
function mostrarAguacate(){

document.getElementById("info-cultivo").innerHTML = `

<h3>Aguacate</h3>
<img src="img/aguacate.jpg" width="300">
<img src="img/aguacate1.jpg" width="300">
<img src="img/aguacate2.jpg" width="300">

<p>
El aguacate es un fruto muy nutritivo y cultivado en muchas zonas del país.
</p>

`;

}

// Mostrar información del mango
function mostrarMango(){

document.getElementById("info-cultivo").innerHTML = `

<h3>Mango</h3>
<img src="img/mango.jpg" width="300">
<img src="img/mango1.jpg" width="300">
<img src="img/mango2.jpg" width="300">

<p>
El mango es una fruta tropical muy dulce y popular en climas cálidos.
</p>

`;

}