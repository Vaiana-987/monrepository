const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});
//aretirer peut etre
function openMobilePopup(imageUrl, date, title) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const popupTitle = document.getElementById("popup-title");
    const popupDate = document.createElement("div"); // Add a date element
    const popupParagraph = document.createElement("p"); // Add a paragraph element

    // Set the content
    popupImg.src = imageUrl;
    popupTitle.innerText = title;
    popupDate.innerText = date;
    popupParagraph.innerText = "This is the extra paragraph content for the popup.";

    // Empty any existing content in the popup body before appending
    const popupContent = popup.querySelector(".popup-content");
    // Remove any existing date and paragraph
    const existingDate = popupContent.querySelector(".date");
    const existingParagraph = popupContent.querySelector("p.new-paragraph");
    if (existingDate) existingDate.remove();
    if (existingParagraph) existingParagraph.remove();

    // Add the new elements
    popupDate.className = "date";
    popupParagraph.className = "new-paragraph";
    popupContent.insertBefore(popupDate, popupImg.nextSibling);
    popupContent.appendChild(popupParagraph);

    popup.style.display = "flex";
}

// Add an event listener to ensure the mobile popup method is used only on smaller screens
window.addEventListener("load", function() {
    if (window.innerWidth <= 885) {
        const cards = document.querySelectorAll(".card2");
        cards.forEach(card => {
            card.onclick = function() {
                const imgSrc = this.querySelector("img").src;
                const date = this.querySelector(".label3").innerText;
                const title = this.querySelector(".label4").innerText;
                openMobilePopup(imgSrc, date, title);
            };
        });
    }
}); //a retirer peut etre

function openPopup(id, title, imageUrl) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const popupTitle = document.getElementById("popup-title");

    popupImg.src = imageUrl;
    popupTitle.innerText = title;
    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function updateDetails(imageUrl, date, title) {
    const detailImg = document.getElementById("detail-img");
    const detailLabel3 = document.getElementById("detail-label3");
    const detailLabel4 = document.getElementById("detail-label4");

    detailImg.src = imageUrl;
    detailLabel3.innerText = date;
    detailLabel4.innerText = title;
}

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Add smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});


