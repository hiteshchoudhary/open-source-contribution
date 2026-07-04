document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderSummary = document.getElementById('order-summary');
    let total = 0;

    // Display order summary
    orderSummary.innerHTML = '<h3>Order Summary</h3>';
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        orderSummary.innerHTML += `
            <p>${item.name} x ${item.quantity}: ₹${itemTotal.toFixed(2)}</p>
        `;
    });
    orderSummary.innerHTML += `<strong>Total: ₹${total.toFixed(2)}</strong>`;

    // Handle form submission
    document.getElementById('checkout-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate order processing
        setTimeout(() => {
            alert('Order placed successfully! Thank you for your purchase.');
            localStorage.removeItem('cart'); // Clear the cart
            window.location.href = 'index.html'; // Redirect to home page
        }, 1500);
    });
});