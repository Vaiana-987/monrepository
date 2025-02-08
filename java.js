console.log("Le fichier java.js est bien chargé !");

document.addEventListener("DOMContentLoaded", function () {
    console.log("Le DOM est complètement chargé !");
});

// Test pour voir si Three.js est bien chargé
if (typeof THREE !== "undefined") {
    console.log("Three.js est bien chargé !");
} else {
    console.error("Erreur : Three.js ne semble pas être chargé correctement.");
}

// Autre test si un élément spécifique existe dans la page
if (document.querySelector("h1")) {
    console.log("Le titre H1 est bien présent dans la page.");
} else {
    console.warn("Attention : Le titre H1 est introuvable.");
}

document.addEventListener('DOMContentLoaded', function() {
    const actualiteListMobile = document.querySelector('.actualite-list-mobile');
    const popupOverlay = document.getElementById('popup-overlay');
    const closePopup = document.querySelector('.close-popup');
    
    // Générer les cartes d'actualités pour mobile
    actualites.forEach((actualite, index) => {
        const card = document.createElement('div');
        card.className = 'card2-mobile';
        card.innerHTML = `
            <img src="${actualite.image}" alt="${actualite.title}">
            <div class="text-content">
                <div class="label3 font-bold text-lg">${actualite.date}</div>
                <div class="label4 font-regular text-md">${actualite.title}</div>
            </div>
        `;
        card.addEventListener('click', () => showPopup(index));
        actualiteListMobile.appendChild(card);
    });
    
    function showPopup(index) {
        const actualite = actualites[index];
        const popupImg = document.getElementById("popup-img");

        // Désactiver lazy loading pour cette image spécifique
        popupImg.removeAttribute("loading");
        
        setTimeout(() => {
            popupImg.src = actualite.image;
        }, 100);

        document.getElementById("popup-date").textContent = actualite.date;
        document.getElementById("popup-title2").textContent = actualite.title;
        document.getElementById("popup-description").textContent = actualite.description;
        
        popupOverlay.style.display = 'block';
    }
    
    closePopup.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });
    
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});

function openPopup(id, title, mediaUrl) {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupContent = document.querySelector(".popup-content p");
    const popupMedia = document.getElementById("popup-media");

    popupTitle.innerText = title;
    
    let mediaWidth = window.innerWidth <= 885 ? "100%" : "60%";
    let mediaHeight = window.innerWidth <= 885 ? "200px" : "500px";
    
    if (mediaUrl.includes("momento360.com")) {
        popupMedia.innerHTML = `<iframe src="${mediaUrl}" width="${mediaWidth}" height="${mediaHeight}" frameborder="0" allowfullscreen></iframe>`;
    } else {
        popupMedia.innerHTML = `<img src="${mediaUrl}" alt="${title}" style="width: ${mediaWidth}; max-height: ${mediaHeight}; object-fit: contain;">`;
    }

    const card = document.querySelector(`.card[onclick*="${id}"]`);
    if (card) {
        const cardContent = card.querySelector("p").innerHTML;
        popupContent.innerHTML = cardContent;
    }

    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

const actualites = [...]; // Garder la définition de actualites

function updateDetails(index) {
    const detailImg = document.getElementById("detail-img");
    const detailLabel3 = document.getElementById("detail-label3");
    const detailLabel4 = document.getElementById("detail-label4");
    const detailLabel5 = document.getElementById("detail-label5");

    const actualite = actualites[index];
    detailImg.src = actualite.image;
    detailLabel3.innerText = actualite.date;
    detailLabel4.innerText = actualite.title;
    detailLabel5.innerText = actualite.description;
}

updateDetails(0);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted');
});
