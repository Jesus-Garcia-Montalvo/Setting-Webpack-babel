import "./style.css";

const btnHome = document.getElementById("nav_home");
const btnOurs = document.getElementById("nav_about_us");
const btnContact = document.getElementById("nav_contact");
const contMain = document.getElementById("cont_Main");

btnHome.addEventListener("click", () => {
  contMain.innerHTML = "< h1 > hola soy inicio</h1 >";
});

btnOurs.addEventListener("click", () => {
  contMain.innerHTML = "< h1 > hola soy quienes</h1 >";
});

btnContact.addEventListener("click", () => {
  contMain.innerHTML = "< h1 > hola soy contactos</h1 >";
});

//no se te olvide modularizar
