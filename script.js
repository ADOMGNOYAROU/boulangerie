// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Newsletter functionality
document.addEventListener('DOMContentLoaded', () => {
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
