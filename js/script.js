const services = [
    { name: "Research Guidance", description: "Expert advice on research methodologies.", image: "assets/image 1.jpg" },
    { name: "Thesis Writing", description: "Professional assistance in thesis writing.", image: "assets/image 2.jpg" },
    { name: "Publication Support", description: "Get your research published in journals.", image: "assets/image 3.jpg" },
    { name: "Statistical Analysis", description: "Get your Analysis Done.", image: "assets/analysis.webp" },
    { name: "Manuscript Writing", description: "Professional manuscript writing services.", image: "assets/image 3.jpg" },
    { name: "Coding and Development", description: "Custom coding and research development.", image: "assets/image 3.jpg" },
    { name: "Case Report", description: "Expert case report assistance.", image: "assets/image 3.jpg" },
    { name: "Assignment", description: "High-quality assignment support.", image: "assets/image 3.jpg" }
];

const testimonials = [
    { text: "PhD Services helped me complete my thesis!", author: "John Doe", image: "assets/client1.jpg" },
    { text: "Their publication support was excellent.", author: "Jane Smith", image: "assets/client2.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    loadTestimonials();
    initializeDropdown();
    initializePopup();
    initializeChat();
    initializeCarousel();
});

// Function to load services dynamically
function loadServices() {
    const container = document.getElementById('services-container');
    services.forEach(service => {
        container.innerHTML += `
            <div class="service">
                <img src="${service.image}" alt="${service.name}">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
            </div>
        `;
    });
}

// Function to load testimonials dynamically
function loadTestimonials() {
    const container = document.getElementById('testimonials-container');
    testimonials.forEach(testimonial => {
        container.innerHTML += `
            <div class="testimonial">
                <img src="${testimonial.image}" alt="${testimonial.author}">
                <blockquote>
                    <p>${testimonial.text}</p>
                    <footer>- ${testimonial.author}</footer>
                </blockquote>
            </div>
        `;
    });
}

// Dropdown toggle for services
function initializeDropdown() {
    const servicesLink = document.getElementById("services-link");
    const servicesDropdown = document.getElementById("services-dropdown");

    servicesLink.addEventListener("click", function (e) {
        e.preventDefault();
        servicesDropdown.style.display = servicesDropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
        if (!servicesLink.contains(e.target) && !servicesDropdown.contains(e.target)) {
            servicesDropdown.style.display = "none";
        }
    });
}

// Popup form logic
function initializePopup() {
    const popupContainer = document.querySelector(".popup-container");
    const closePopup = document.querySelector(".close-btn");
    const form = document.getElementById("contact-form");

    popupContainer.style.display = "flex";

    closePopup.addEventListener("click", () => {
        popupContainer.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === popupContainer) {
            popupContainer.style.display = "none";
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const mobile = document.getElementById("mobile").value;
        const email = document.getElementById("email").value;
        const services = document.getElementById("services").value;
        const country = document.getElementById("country").value;

        alert(`Form Submitted!\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nServices: ${services}\nCountry: ${country}`);
        popupContainer.style.display = "none";
    });
}

// Live chat functionality
function initializeChat() {
    const chatPopup = document.getElementById('chatPopup');
    const liveChatButton = document.querySelector('.live-chat');
    const closeChatButton = document.querySelector('.close-chat');
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');

    liveChatButton.addEventListener('click', (e) => {
        e.preventDefault();
        chatPopup.style.display = 'block';
    });

    closeChatButton.addEventListener('click', () => {
        chatPopup.style.display = 'none';
    });

    document.getElementById('sendMessageBtn').addEventListener('click', () => sendMessage(userInput, chatMessages));
}

function sendMessage(userInput, chatMessages) {
    const messageText = userInput.value.trim();
    if (messageText !== '') {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.textContent = `You: ${messageText}`;
        userMessageDiv.style.padding = '5px';
        userMessageDiv.style.marginBottom = '5px';
        chatMessages.appendChild(userMessageDiv);

        userInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Services carousel
function initializeCarousel() {
    const track = document.getElementById('servicesTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let index = 0;
    const serviceWidth = 270;

    nextBtn.addEventListener('click', () => {
        if (index < track.children.length - 3) {
            index++;
            track.style.transform = `translateX(-${index * serviceWidth}px)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${index * serviceWidth}px)`;
        }
    });
}

// Automatically open contact form modal
window.onload = () => {
    setTimeout(() => {
        const overlay = document.getElementById('overlay');
        const contactFormContainer = document.getElementById('contact-form-container');
        overlay.style.display = 'block';
        contactFormContainer.style.display = 'block';

        setTimeout(() => {
            overlay.style.display = 'none';
            contactFormContainer.style.display = 'none';
        }, 8000);
    }, 500);
};
const track = document.getElementById('servicesTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        let index = 0; // Starting index
        const serviceWidth = 270; // Each service box width (including margin)

        nextBtn.addEventListener('click', () => {
            if (index < track.children.length - 3) { 
                index++;
                track.style.transform = `translateX(-${index * serviceWidth}px)`;
            }
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
                track.style.transform = `translateX(-${index * serviceWidth}px)`;
            }
        });
        let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

document.getElementById("next").addEventListener("click", () => {
    changeSlide(1);
});

document.getElementById("prev").addEventListener("click", () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

// Initial display of first slide
slides[currentSlide].classList.add("active");
// Open Popup Automatically on Page Load
window.addEventListener("load", function () {
    const popup = document.querySelector(".popup-container");
    popup.classList.add("show");

    // Auto-close after 5 seconds
    setTimeout(function () {
        popup.classList.remove("show");
    }, 5000); // 5000 milliseconds = 5 seconds
});

// Close Popup on Click (Close Button)
document.querySelector(".close-btn").addEventListener("click", function () {
    document.querySelector(".popup-container").classList.remove("show");
});

// Optional: Close popup on background click
document.querySelector(".popup-container").addEventListener("click", function (e) {
    if (e.target === document.querySelector(".popup-container")) {
        document.querySelector(".popup-container").classList.remove("show");
    }
});
// Open and close chat popup
document.querySelector('.live-chat').addEventListener('click', () => {
    document.getElementById('chatPopup').style.display = 'block';
});

document.querySelector('.close-chat').addEventListener('click', () => {
    document.getElementById('chatPopup').style.display = 'none';
});

// Send message functionality
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatMessages = document.getElementById('chatMessages');

    if (userInput.trim()) {
        // Add the user's message to the chat
        const message = document.createElement('div');
        message.textContent = userInput;
        message.style.padding = '5px';
        message.style.margin = '5px 0';
        message.style.borderBottom = '1px solid #ddd';

        chatMessages.appendChild(message);

        // Clear the input field
        document.getElementById('userInput').value = '';
    }
}
