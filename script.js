const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

function validateForm() {
    let isValid = true;

    // Name Validation
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) { // Allow letters and spaces only
        document.getElementById("nameError").textContent = "Name must contain only letters and spaces";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email Validation
    let email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Message Validation
    let message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required";
        isValid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    return isValid;
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault(); 
    }
});

//  resume download 

function downloadResume() {
    
    const resumePath = './Image/RAHUL BARIK Resume...pdf';

    
    const link = document.createElement('a');

  
    link.href = resumePath;

   
    link.download = 'RahulBarik_Resume.pdf';

   
    document.body.appendChild(link);

   
    link.click();

   
    document.body.removeChild(link);
}

//  dark mode and light mode 

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});

//  animation 

function revealOnScroll() {
    const animatedElements = document.querySelectorAll(".animated");

    for (let i = 0; i < animatedElements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = animatedElements[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            animatedElements[i].classList.add("show");
        } else {
           
        }
    }
}

window.addEventListener("scroll", revealOnScroll);

// Initial call to reveal elements that are already in the viewport on page load
revealOnScroll();