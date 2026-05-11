// PRELOADER

window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
});

// NAVBAR CHANGE

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".custom-navbar");

    if(window.scrollY > 50){
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

});

// SCROLL TOP BUTTON

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// REVEAL ANIMATION

function revealSections(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            reveal.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();