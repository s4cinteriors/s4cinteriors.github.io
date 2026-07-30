// S4C Interiors Website

console.log("Welcome to S4C Interiors!");

document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector(".hero");

    hero.style.opacity = "0";

    setTimeout(() => {
        hero.style.transition = "opacity 1.5s";
        hero.style.opacity = "1";
    }, 300);
});
function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}
