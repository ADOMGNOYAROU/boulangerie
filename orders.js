document.addEventListener('DOMContentLoaded', () => {
    const cart = {};
    const cartCount = document.querySelector('.cart-count');
    
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
            
            updateCart(id, parseInt(qty.textContent));
        });
    });
    
    function updateCart(id, qty) {
        cart[id] = qty;
        const total = Object.values(cart).reduce((sum, q) => sum + q, 0);
        cartCount.textContent = total;
    }
    
    // Commander
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        const order = Object.entries(cart).filter(([_, qty]) => qty > 0);
        if (order.length) {
            localStorage.setItem('cart', JSON.stringify(order.map(([id, qty]) => ({ id: parseInt(id), quantity: qty }))));
            window.location.href = 'cart.html';
        } else {
            alert('Sélectionnez des produits');
        }
    });
});
