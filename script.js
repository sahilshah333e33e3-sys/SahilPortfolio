const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
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

sr.reveal('.service-card',{
    origin:'bottom',
    interval:200
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.portfolio-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        projectCards.forEach(card => {
            const techList = card.dataset.tech ? card.dataset.tech.split(' ') : [];
            const matches = filter === 'all' || techList.includes(filter);
            card.classList.toggle('filtered-out', !matches);
        });
    });
});

sr.reveal('.portfolio-box',{
    origin:'bottom',
    interval:200
});

sr.reveal('.experience-card',{
    origin:'bottom',
    interval:200
});

sr.reveal('.blog-card',{
    origin:'bottom',
    interval:200
});

sr.reveal('.testimonial-card',{
    origin:'bottom',
    interval:200
});

sr.reveal('.certificate-card',{
    origin:'bottom',
    interval:200
});

sr.reveal('.faq-item',{
    origin:'bottom',
    interval:150
});

sr.reveal('.hire-card',{
    origin:'bottom',
    interval:150
});

sr.reveal('.contact-card',{
    origin:'top',
    interval:150
});

sr.reveal('.contact form',{
    origin:'bottom'
});
const themeBtn = document.getElementById("theme-btn");

function applyTheme(theme) {
    const light = theme === 'light';
    document.body.classList.toggle('light-mode', light);
    themeBtn.innerHTML = light ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    themeBtn.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
}

themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

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
const scrollTopBtn = document.querySelector('.scroll-top-btn');


function updateScrollTopVisibility() {
    if (!scrollTopBtn) return;
    scrollTopBtn.classList.toggle('visible', window.scrollY > 450);
}

window.addEventListener("scroll", () => {

    let scroll = document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scroll / height) * 100;

    progressBar.style.width = progress + "%";
    updateScrollTopVisibility();

});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

window.addEventListener('load', () => {
    const pageLoader = document.getElementById('page-loader');
    if (pageLoader) {
        pageLoader.classList.add('loaded');
        pageLoader.setAttribute('aria-hidden', 'true');
    }
    document.body.classList.remove('page-loading');
    updateScrollTopVisibility();
});

const statsSection = document.querySelector('.counter');
const counterValues = document.querySelectorAll('.counter-value');
let hasCounted = false;

function animateCounters(){
    counterValues.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 1500;
        const stepTime = Math.max(Math.floor(duration / target), 20);
        let current = 0;

        const counterInterval = setInterval(() => {
            current += 1;
            counter.innerText = current;
            if(current >= target){
                counter.innerText = target;
                clearInterval(counterInterval);
            }
        }, stepTime);
    });
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting && !hasCounted){
            hasCounted = true;
            animateCounters();
            statsObserver.unobserve(statsSection);
        }
    });
}, { threshold: 0.5 });

if(statsSection){
    statsObserver.observe(statsSection);
}

const contactForm = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');
const submitButton = document.querySelector('.submit-btn');

const EMAILJS_SERVICE_ID = 'service_2azbvls';
const EMAILJS_TEMPLATE_ID = 'template_6383f6i';
const EMAILJS_PUBLIC_KEY = 'Thw09a1dhcZii5M0A';

if (window.emailjs && EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

function showFormStatus(message, type){
    if(!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';
}

function resetFormStatus(){
    if(!formStatus) return;
    formStatus.textContent = '';
    formStatus.className = 'form-status';
    formStatus.style.display = 'none';
}

function setLoading(isLoading){
    if(!submitButton) return;
    submitButton.disabled = isLoading;
    submitButton.classList.toggle('loading', isLoading);
}

function validateField(field){
    if(!field) return false;
    const value = field.value.trim();
    if(!value) return false;
    if(field.type === 'email'){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    return true;
}

if(contactForm){
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        if(!formStatus || !submitButton) return;
        resetFormStatus();

        const honeypotField = contactForm.querySelector('input[name="hp"]');
        if(honeypotField && honeypotField.value.trim() !== ''){
            showFormStatus('Spam detected. Please try again.', 'error');
            return;
        }

        const nameField = contactForm.querySelector('#name');
        const emailField = contactForm.querySelector('#email');
        const subjectField = contactForm.querySelector('#subject');
        const messageField = contactForm.querySelector('#message');

        [nameField, emailField, subjectField, messageField].forEach(field => {
            if(field){
                field.setAttribute('aria-invalid', 'false');
            }
        });

        let valid = true;

        if(!validateField(nameField)){
            valid = false;
            nameField.setAttribute('aria-invalid', 'true');
        }
        if(!validateField(emailField)){
            valid = false;
            emailField.setAttribute('aria-invalid', 'true');
        }
        if(!validateField(subjectField)){
            valid = false;
            subjectField.setAttribute('aria-invalid', 'true');
        }
        if(!validateField(messageField)){
            valid = false;
            messageField.setAttribute('aria-invalid', 'true');
        }

        if(!valid){
            showFormStatus('Please complete all required fields with valid information.', 'error');
            return;
        }

        if (!window.emailjs || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            showFormStatus('Email service is not configured yet. Please contact me directly.', 'error');
            return;
        }

        setLoading(true);
        showFormStatus('Sending message…', 'success');

        const templateParams = {
            name: nameField.value.trim(),
            email: emailField.value.trim(),
            subject: subjectField.value.trim(),
            message: messageField.value.trim(),
            reply_to: emailField.value.trim()
        };

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
            showFormStatus('Your message has been sent successfully. I will reply shortly.', 'success');
            contactForm.reset();
        } catch (error) {
            showFormStatus('Unable to send message. Please try again later.', 'error');
        } finally {
            setLoading(false);
        }
    });
}

