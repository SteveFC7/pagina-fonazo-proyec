let cart = []; // Array to store products in the cart (this is important!)

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product); // Add product to the cart array
    updateCartDisplay(); // Update the cart display
}

function updateCartDisplay() {
    const orderItems = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    if (!orderItems || !orderTotalElement) {
        console.error("Error: No se encontraron los elementos #order-items o #order-total en el HTML.");
        return;
    }

    orderItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.name}</span> <strong>$${item.price.toFixed(2)}</strong>`;
        orderItems.appendChild(li);
        total += item.price;
    });

    orderTotalElement.textContent = total.toFixed(2) + " S/";
    updateCartCount(); // Update the cart count
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length; // Use cart.length
}

function openCheckout() {
    const checkout = document.getElementById('checkout');
    checkout.style.display = checkout.style.display === 'none' ? 'block' : 'none';
}

function submitCheckout(event) {
    event.preventDefault();
    if (cart.length > 0) {
        alert(`Compra confirmada por un total de S/S/{document.getElementById('order-total').textContent}. ¡Gracias por elegir FONAZO!`);
        cart = []; // Clear the cart after purchase (optional)
        updateCartDisplay(); // Update display to show empty cart
    } else {
        alert("El carrito está vacío. Agregue productos antes de confirmar la compra.");
    }

}