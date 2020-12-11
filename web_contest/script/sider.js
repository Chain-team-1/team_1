// const sectionSlide = document.querySelector(".l_section5__box");
const cardSlide = document.querySelectorAll(".l_section5__box");

const preBtn = document.getElementById("prev_btn");
const nextBtn = document.getElementById("next_btn");

let counter = 1; 

const size = cardSlide[0].clientWidth;

cardSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


nextBtn.addEventListener("click", function(){
    cardSlide.transition = "transform 0.4s ease-in-out";
    counter++;
    cardSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

preBtn.addEventListener("click", function(){
    cardSlide.transition = "transform 0.4s ease-in-out";
    counter--;
    cardSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});