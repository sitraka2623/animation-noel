// Changement de langue toutes les 5 secondes
const greetings = [
    { left: 'Joyeux', right: 'Noël' },           // Français
    { left: 'Merry', right: 'Christmas' },       // Anglais
    { left: 'Arahaba tratry', right: 'ny Noely' } // Malgache
];

let currentIndex = 0;
const greetingLeftElement = document.getElementById('greeting-left');
const greetingRightElement = document.getElementById('greeting-right');

function changeLanguage() {
    greetingLeftElement.style.opacity = '0';
    greetingRightElement.style.opacity = '0';
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % greetings.length;
        greetingLeftElement.textContent = greetings[currentIndex].left;
        greetingRightElement.textContent = greetings[currentIndex].right;
        greetingLeftElement.style.opacity = '1';
        greetingRightElement.style.opacity = '1';
    }, 500);
}

setInterval(changeLanguage, 5000);

// Création de la neige qui tombe
function createSnowflake() {
    const snowContainer = document.querySelector('.snow-container');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
    snowContainer.appendChild(snowflake);
    
    // Supprimer le flocon après l'animation
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Créer des flocons de neige régulièrement (plus de neige)
setInterval(createSnowflake, 100);

// Animation supplémentaire pour les lumières
const lights = document.querySelectorAll('.light');
lights.forEach((light) => {
    light.addEventListener('mouseenter', () => {
        light.style.transform = 'scale(1.5)';
    });
    
    light.addEventListener('mouseleave', () => {
        light.style.transform = 'scale(1)';
    });
});

// Effet de scintillement aléatoire pour l'étoile
const star = document.querySelector('.star');
setInterval(() => {
    star.style.textShadow = `0 0 ${Math.random() * 20 + 10}px gold`;
}, 500);

// Créer des particules autour de l'arbre
function createParticle() {
    const tree = document.querySelector('.tree');
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 300;
    const randomDelay = Math.random() * 2;
    
    particle.style.left = `calc(50% + ${randomX}px)`;
    particle.style.top = `${randomY}px`;
    particle.style.animationDelay = `${randomDelay}s`;
    
    tree.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

setInterval(createParticle, 300);

// Ajouter des perles sur les guirlandes
function addGarlandBeads() {
    const garlands = document.querySelectorAll('.garland');
    garlands.forEach((garland, garlandIndex) => {
        const garlandWidth = garland.offsetWidth;
        const beadCount = 8;
        
        for (let i = 0; i < beadCount; i++) {
            const bead = document.createElement('div');
            bead.classList.add('garland-bead');
            bead.style.left = `${(i / (beadCount - 1)) * 100}%`;
            bead.style.top = '0';
            bead.style.animationDelay = `${(i * 0.1) + (garlandIndex * 0.3)}s`;
            garland.appendChild(bead);
        }
    });
}

// Attendre que le DOM soit chargé
setTimeout(addGarlandBeads, 100);
