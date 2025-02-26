document.addEventListener("DOMContentLoaded", function() {
    alert("Bienvenido a la Anotación Actual!");
});

const menuLateral = document.querySelector(".menu-lateral");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    menuLateral.classList.toggle("visible");
});

window.addEventListener("click", (event) => {
    if (!menuLateral.contains(event.target) && !menuToggle.contains(event.target) ) {
        menuLateral.classList.remove("visible");
    }
});