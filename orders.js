document.addEventListener('DOMContentLoaded', () => {
    const panier = {};
    const compteurPanier = document.querySelector('.cart-count');
    
    // Gestion quantité
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const qty = document.querySelector(`.quantity[data-id="${id}"]`);
            const current = parseInt(qty.textContent);
            
            if (btn.classList.contains('plus')) {
                qty.textContent = current + 1;
            } else if (current > 0) {
                qty.textContent = current - 1;
            }
            
            mettreAJourPanier(id, parseInt(qty.textContent));
        });
    });
    
    function mettreAJourPanier(id, qty) {
        panier[id] = qty;
        const total = Object.values(panier).reduce((sum, q) => sum + q, 0);
        compteurPanier.textContent = total;
    }
    
    // Commander
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        const order = Object.entries(panier).filter(([_, qty]) => qty > 0);
        if (order.length) {
            localStorage.setItem('panier', JSON.stringify(order.map(([id, qty]) => ({ id: parseInt(id), quantity: qty }))));
            window.location.href = 'cart.html';
        } else {
            alert('Veuillez sélectionner des produits avant de commander.');
        }
    });
});
