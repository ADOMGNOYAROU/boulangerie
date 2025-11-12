// Cart functionality
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.getElementById('total-price');
    
    function renderCart() {
        cartItems.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const product = getProductById(item.id);
            if (product) {
                total += product.price * item.quantity;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div>${product.image} ${product.name}</div>
                    <div>${item.quantity} x ${product.price.toFixed(2)} €</div>
                    <button onclick="removeFromCart(${item.id})">Supprimer</button>
                `;
                cartItems.appendChild(cartItem);
            }
        });
        
        totalPrice.textContent = total.toFixed(2) + ' €';
    }
    
    function getProductById(id) {
        // Cette fonction doit être remplacée par un appel à products.json
        // Pour l'instant, utilisons un tableau temporaire
        const products = [
            { id: 1, name: 'Baguette Tradition', price: 1.20, image: '🥖' },
            { id: 2, name: 'Croissant Pur Beurre', price: 1.50, image: '🥐' },
            { id: 3, name: 'Pain Complet', price: 3.80, image: '🍞' },
            { id: 4, name: 'Pain au Chocolat', price: 1.60, image: '🧁' },
            { id: 5, name: 'Pain aux Noix', price: 4.50, image: '🥨' },
            { id: 6, name: 'Tarte aux Pommes', price: 18.00, image: '🍰' }
        ];
        return products.find(p => p.id === id);
    }
    
    window.removeFromCart = function(id) {
        const index = cart.findIndex(item => item.id === id);
        if (index !== -1) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
        }
    }
    
    renderCart();
});
