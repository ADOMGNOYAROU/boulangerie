// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Toggle menu
    menuToggle.addEventListener('click', () => {
        toggleMenu();
    });

    // Close menu with close button (if exists)
    const menuClose = document.querySelector('.menu-close');
    if (menuClose) {
        menuClose.addEventListener('click', () => {
            closeMenu();
        });
    }

    // Close menu when clicking on a link
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            closeMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    function toggleMenu() {
        const isActive = navLinks.classList.contains('active');
        if (isActive) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function openMenu() {
        navLinks.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        menuToggle.innerHTML = '✕'; // Change to X
        body.style.overflow = 'hidden'; // Prevent scrolling when menu is open

        // Animate menu items
        const menuItems = navLinks.querySelectorAll('li');
        menuItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('menu-item-animation');
        });
    }

    function closeMenu() {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '☰'; // Change back to hamburger
        body.style.overflow = ''; // Restore scrolling

        // Remove animations
        const menuItems = navLinks.querySelectorAll('li');
        menuItems.forEach((item) => {
            item.classList.remove('menu-item-animation');
        });
    }

    // Animations d'entrée des éléments
    animateOnScroll();

    // Newsletter functionality
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = form.querySelector('input[type="email"]').value;

            if (email) {
                // Simulation d'envoi (dans un vrai projet, utiliser une API)
                showNewsletterSuccess(form);

                // Ici vous pourriez envoyer les données à un serveur
                console.log('Newsletter subscription:', email);

                // Réinitialiser le formulaire
                form.reset();
            }
        });
    });
});

function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const animateElements = document.querySelectorAll('.product-card, .horaire-card, .about-content, .hero-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Fonctionnalité WhatsApp améliorée
function initializeWhatsApp() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    
    if (whatsappBtn) {
        // Animation d'entrée différée
        setTimeout(() => {
            whatsappBtn.style.transform = 'scale(1) rotate(0deg)';
            whatsappBtn.style.opacity = '1';
        }, 2000);

        // Analytics/Tracking (optionnel)
        whatsappBtn.addEventListener('click', () => {
            // Vous pouvez ajouter ici du tracking Google Analytics
            console.log('WhatsApp contact initiated');
            
            // Animation de feedback
            whatsappBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                whatsappBtn.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    whatsappBtn.style.transform = 'scale(1)';
                }, 150);
            }, 100);
        });
    }
}

// Initialisation complète
document.addEventListener('DOMContentLoaded', () => {
    // ... code existant ...

    // Animations d'entrée des éléments
    animateOnScroll();
    
    // Initialisation WhatsApp
    initializeWhatsApp();

    // ... reste du code ...
});

function showNewsletterSuccess(form) {
    // Créer un message de succès
    const successMessage = document.createElement('div');
    successMessage.className = 'newsletter-success';
    successMessage.innerHTML = '✓ Merci pour votre inscription ! Vous recevrez bientôt nos actualités.';
    successMessage.style.cssText = `
        background: #FFD700;
        color: #8B4513;
        padding: 10px 15px;
        border-radius: 5px;
        margin-top: 10px;
        font-weight: bold;
        text-align: center;
        animation: fadeIn 0.5s ease-in;
    `;

    // Ajouter l'animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .newsletter-success {
            animation: fadeIn 0.5s ease-in;
        }
    `;
    document.head.appendChild(style);

    // Insérer le message après le formulaire
    form.parentNode.insertBefore(successMessage, form.nextSibling);

    // Supprimer le message après 5 secondes
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}
