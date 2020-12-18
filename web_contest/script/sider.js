// const sectionSlide = document.querySelector(".l_section5__box");
const slides = document.querySelectorAll(".c_slide");

const preBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector ("#nextBtn");
const dot = document.querySelectorAll(".c_dot li")
let counter = 0;


//navbar fixed 


window.addEventListener("scroll", function(){
    const navBar = document.querySelector("nav");
    const scrollHeight = window.pageYOffset;
    const navbarHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight >navbarHeight){
        navBar.classList.add('c_sticky');

    }else{
        navBar.classList.remove("c_sticky")
    }
});



slides.forEach(function(slide, index){
    slide.style.left= `${index*100}%`;
});

// setIndex is for dot point 
function setIndex (){
    document.querySelector(".c_dot .selected").classList.remove("selected");
    slides.forEach(function(slide){
        slide.style.transform= `translateX(-${counter*100}%)`;
    });
}
// dot point function 
dot.forEach(function(indicator,index){
    indicator.addEventListener('click',function(){
        counter =index;
        indicator.classList.add("selected");
        setIndex(counter);
    });
   
});

// function for swipe 

function carousel(){
    if (counter === slides.length){
        counter = 0;
    }
    if (counter < 0 ){
        counter = slides.length -1 ;
    }

    slides.forEach(function(slide){
        slide.style.transform= `translateX(-${counter*100}%)`;
    });

    // setIndex(index);
   
}

// auto slide function 

function autoslide(){
    counter++;
    carousel();
    setTimeout(autoslide, 5000);

}

autoslide();

// btn add event listener for swipe card 
nextBtn.addEventListener("click" ,function(){
    counter++;
    carousel();


});
preBtn.addEventListener("click" ,function(){
    counter--;
    carousel();
});
