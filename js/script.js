// Seleção de elementos

const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

// Funções

// Eventos
menuBtn.addEventListener("click", (e) => {

  menu.classList.toggle("#active");

})