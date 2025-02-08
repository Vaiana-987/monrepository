console.log("Le fichier java.js est bien chargé !");

document.addEventListener("DOMContentLoaded", function () {
    console.log("Le DOM est complètement chargé !");
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("img").forEach(img => {
        const src = img.getAttribute("src");
        if (src) {
            img.setAttribute("src", src + "?v=1.1");
        }
    });
});


// Test pour voir si Three.js est bien chargé
if (THREE) {
    console.log("Three.js est bien chargé !");
} else {
    console.error("Erreur : Three.js ne semble pas être chargé correctement.");
}

// Autre test si tu veux vérifier si un élément spécifique existe dans la page
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

// Ajout de l'événement pour fermer le menu lorsqu'un lien est cliqué
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});

function openPopup(id, title, mediaUrl) {
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupContent = document.querySelector(".popup-content p");
    const popupMedia = document.getElementById("popup-media");

    popupTitle.innerText = title;

    let mediaWidth, mediaHeight;
    if (window.innerWidth <= 885) {
        mediaWidth = "100%";
        mediaHeight = "200px";
    } else {
        mediaWidth = "60%";
        mediaHeight = "500px";
    }

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

    document.getElementById("popup-overlay").style.display = "block";
}

setTimeout(() => {
    document.querySelectorAll(".popup-img").forEach((img, index) => {
        img.src = actualites[index].image; 
    });
}, 100);

const actualites = [
    {
        image: "link/Images/Mandelieu_002110_BD--scaled.webp",
        date: "12 juillet et 19 juillet 2025",
        title: "1. Soirée cinéma en plein air dans les jardins du château",
        description: `Venez vivre une expérience unique avec nos soirées cinéma en plein air ! Le Château de la Napoule projette des classiques du cinéma sous les étoiles, dans un cadre enchanteur. Les spectateurs pourront également profiter de stands de snacks et boissons.
            
            📅 Prochaines dates : 12 juillet et 19 juillet 2025
            🎬 Film à l'affiche : "La Belle et la Bête" de Jean Cocteau
            💺 Places limitées, pensez à réserver
        `
    },
    {
        image: "link/Images/chateau_la_napoule.webp",
        date: "Tous les vendredis soirs de juin à août 2025",
        title: "2. Visites nocturnes : Le château sous un autre jour",
        description: `Découvrez le Château de la Napoule dans une ambiance magique grâce à nos visites nocturnes. Plongés dans une atmosphère féerique, les visiteurs pourront explorer les salles et jardins éclairés par des bougies, tout en écoutant des récits historiques et des légendes locales.
            
            📅 Dates : Tous les vendredis soirs de juin à août 2025
            🕰 Heure : 21h30
            🎟 Réservation obligatoire
        `
    },
    {
        image: "link/Images/1200x680_sc_024-4469322.webp",
        date: "Tous les mercredis après-midi",
        title: "3. Ateliers créatifs pour enfants : Découverte de l'art médiéval",
        description: `Le Château propose des ateliers pédagogiques et ludiques pour les enfants. Au programme : initiation à l'enluminure, création de blasons et découverte des techniques artistiques du Moyen Âge. Ces ateliers sont encadrés par des artistes et historiens spécialisés.
            
            📅 Tous les mercredis après-midi
            🎨 Âge conseillé : 6 à 12 ans
            📍 Lieu : Salle pédagogique du Château
        `
    }
];

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

