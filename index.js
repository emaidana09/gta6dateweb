

//movimiento del gardiente
/*
const em_h1 = document.getElementById("em_h1"); // esto guarda el elemento en un a variable para poder modificarlo.

let rosa = { r: 221, g: 109, b: 206 };
let naranja = { r: 255, g: 134, b: 64 };

window.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth * 100; // poscicion del mouse en X y de el Ancho de la ventana
    const y = event.clientY / window.innerHeight * 100; // poscicion del mouse en Y y de el Largo de la ventana
    em_h1.style.backgroundPosition = `${x}% ${y}%`

}); */  // esto detecta el movimiento del mouse

//funcion de contador fecha
function actualizarContador(){
const fechaObjetivo = new Date(2026, 10, 19); // se asigna la fecha objetivo
const fechaActual = new Date(); // se determina la fecha actual

const em_counter = document.getElementById("em_counter"); // guardamos el elemento en una variable para modificarlo con la funcion

const diferencia = fechaObjetivo - fechaActual; // restamos la fecha objetivo con la actual y esto nos da la "diferencia" en ms

const segundosT = Math.floor(diferencia / 1000); // calculamos los segundos totales
const dias = Math.floor(segundosT / 86400); // calculamos los dias
const horas = Math.floor((segundosT % 86400) / 3600); // calculamos las horas
const minutos = Math.floor((segundosT % 3600) / 60); // calculamos los minutos

const segundos = segundosT % 60; // y esto nos da los segundos

console.log(dias, horas, minutos, segundos);
console.log(diferencia)
   
em_counter.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`
}

setInterval(actualizarContador, 1000); // ponemos un untervalo para que se actualice cada 1 segundo 1000ms

const themeToggle = document.getElementById("theme"); // definimos el boton

themeToggle.addEventListener("click",() => {         //hacemos que se cambie la clase del body por la de light y viceversa
 document.body.classList.toggle("light-theme");

 if (document.body.classList.contains("light-theme")) {
    themeToggle.textContent = "☀️";
 } else {
    themeToggle.textContent = "🌙";
 } 
});


//background: linear-gradient(180deg, rgb(178, 42, 206), rgb(226, 137, 137)); 
