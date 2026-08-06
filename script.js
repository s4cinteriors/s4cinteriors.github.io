// S4C Interiors Website

console.log("Welcome to S4C Interiors!");

document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector(".hero-slider");

    hero.style.opacity = "0";

    setTimeout(() => {
        hero.style.transition = "opacity 1.5s";
        hero.style.opacity = "1";
    }, 300);
});
function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}
let slideIndex = 0;
showSlides();
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});
function showSlides(){

let slides = document.getElementsByClassName("slides");

for(let i=0;i<slides.length;i++){
slides[i].style.display="none";
}

slideIndex++;

if(slideIndex>slides.length){
slideIndex=1;
}

slides[slideIndex-1].style.display="block";

setTimeout(showSlides,3000);

}
window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").classList.add("loader-hide");
    }, 1800);
});
