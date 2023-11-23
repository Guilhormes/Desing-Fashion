// animação nav-bar
document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector("nav");

    setTimeout(function() {
        nav.classList.add("show-nav");
    }, 500);
});

// digitação animação
const textElement = document.getElementById('typing-text');
    const texts = ['front-end', 'back-end', 'full-stack'];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[index];
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 3000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
    }
}

window.onload = type;

// menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("nav");
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("click", function() {
        navList.classList.toggle("show-nav");
        menuToggle.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".nav-list li a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navList.classList.remove("show-nav");
            menuToggle.classList.remove("active");
        });
    });
});

// Função para rolagem suave
function scrollToSection(id) {
    const section = document.querySelector(id);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Adicione um evento de clique para cada link do navbar
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Evite o comportamento padrão de clicar no link
        const targetId = this.getAttribute('href');
        scrollToSection(targetId);
    });
});