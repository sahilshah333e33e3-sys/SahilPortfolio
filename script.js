const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 50);

});

const typing = document.getElementById("typing");
const words = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "React Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){
    let currentWord = words[wordIndex];
    if(!isDeleting){
        typing.textContent = currentWord.substring(0, charIndex++);
        if(charIndex > currentWord.length){
            isDeleting = true;
            setTimeout(typeEffect,1200);
            return;
        }

    }else{
        typing.textContent = currentWord.substring(0, charIndex--);
        if(charIndex < 0){
            isDeleting = false;
            wordIndex++;
            if(wordIndex >= words.length){
                wordIndex = 0;
            }
        }
    }
    setTimeout(typeEffect,isDeleting ? 70 : 120);
}
typeEffect();
const sr = ScrollReveal({
    distance: '80px',
    duration: 1800,
    delay: 200,
    reset: false
});

sr.reveal('.home-content',{
    origin:'left'
});

sr.reveal('.hero-image',{
    origin:'right'
});

sr.reveal('.about-img',{
    origin:'left'
});

sr.reveal('.about-content',{
    origin:'right'
});

sr.reveal('.service-box',{
    origin:'bottom',
    interval:200
});

sr.reveal('.portfolio-box',{
    origin:'bottom',
    interval:200
});

sr.reveal('.contact-card',{
    origin:'top',
    interval:150
});

sr.reveal('.contact form',{
    origin:'bottom'
});
const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    let scroll = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";

});