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
let slideIndex = 0;
showSlides();

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
