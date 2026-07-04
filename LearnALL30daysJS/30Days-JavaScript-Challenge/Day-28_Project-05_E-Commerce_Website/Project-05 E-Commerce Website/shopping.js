const products = [
    // * Laptop deals
    {
        image: 'products/hp.png',
        name: 'HP Pavilion 15',
        price: 50000,
        rating: 4.5,
        category: 'Laptop'
    },
    {
        image: 'products/victus.png',
        name: 'HP Victus 16',
        price: 200000,
        rating: 3.8,
        category: 'Laptop'
    },
    {
        image: 'products/mac-book.png',
        name: 'Apple MacBook Air M2',
        price: 120000,
        rating: 4.7,
        category: 'Laptop'
    },
    {
        image: 'products/acer.png',
        name: 'Acer Nitro 5',
        price: 70000,
        rating: 4.2,
        category: 'Laptop'
    },
    {
        image: 'products/dell.png',
        name: 'Dell XPS 13',
        price: 150000,
        rating: 4.6,
        category: 'Laptop'
    },
    {
        image: 'products/Controller.png',
        name: 'Gaming Controller',
        price: 2500,
        rating: 4.4,
        category: 'Gaming Devices'
    },
    {
        image: 'products/backlit-keyboard.png',
        name: 'Backlit Keyboard',
        price: 3500,
        rating: 4.1,
        category: 'Gaming Devices'
    },
    {
        image: 'products/headphone.png',
        name: 'Wireless Headphones',
        price: 4000,
        rating: 4.3,
        category: 'Gaming Devices'
    },
    {
        image: 'products/mouse.png',
        name: 'Gaming Mouse',
        price: 1500,
        rating: 4.0,
        category: 'Gaming Devices'
    },
    {
        image: 'products/gaming-cpu.png',
        name: 'Gaming CPU',
        price: 30000,
        rating: 4.5,
        category: 'Gaming Devices'
    },

    // * Mobiles
    {
        image: 'products/iphone.png',
        name: 'iPhone 14 Pro',
        price: 99900,
        rating: 4.8,
        category: 'Mobiles'
    },
    {
        image: 'products/iq7.png',
        name: 'iQOO 7 Legend',
        price: 35000,
        rating: 4.2,
        category: 'Mobiles'
    },
    {
        image: 'products/one+.png',
        name: 'OnePlus 9 Pro',
        price: 54900,
        rating: 4.6,
        category: 'Mobiles'
    },
    {
        image: 'products/iqo.png',
        name: 'iQOO Neo 6',
        price: 33000,
        rating: 4.3,
        category: 'Mobiles'
    },
    {
        image: 'products/infinix.png',
        name: 'Infinix Zero 5G',
        price: 19999,
        rating: 4.0,
        category: 'Mobiles'
    },
];


const productGrid = document.querySelector('.product-grid');

// Group products by category
const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
        acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
}, {});

// Create and append products for each category
Object.entries(groupedProducts).forEach(([category, categoryProducts]) => {
    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = `${category} Deals`;
    categoryTitle.classList.add('category-title');
    productGrid.appendChild(categoryTitle);

    categoryProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // Generate star rating HTML
        const fullStars = Math.floor(product.rating);
        const halfStar = product.rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        let ratingHTML = '';
        for (let i = 0; i < fullStars; i++) {
            ratingHTML += '<i class="fas fa-star"></i>';
        }
        if (halfStar) {
            ratingHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            ratingHTML += '<i class="far fa-star"></i>';
        }
        
        productCard.innerHTML = `
            <div class="like-button" onclick="toggleLike(this)">
                <i class="far fa-heart"></i>
            </div>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price.toFixed(2)}</p>
            <div class="rating">
                ${ratingHTML}
                <span>(${product.rating.toFixed(1)})</span>
            </div>
            <div class="cart-controls">
                <button class="decrease" onclick="decreaseQuantity(this)">-</button>
                <span class="quantity">0</span>
                <button class="increase" onclick="increaseQuantity(this)">+</button>
            </div>
            <button class="add-to-cart" onclick="addToCart('${product.name}', this)">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
});

function toggleLike(element) {
    element.querySelector('i').classList.toggle('fas');
    element.querySelector('i').classList.toggle('far');
}

function decreaseQuantity(button) {
    const quantityElement = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
        quantityElement.textContent = --quantity;
    }
}

function increaseQuantity(button) {
    const quantityElement = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = ++quantity;
}

function addToCart(productName, button) {
    const quantityElement = button.parentElement.querySelector('.quantity');
    const quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
        alert(`Added ${quantity} ${productName}(s) to cart!`);
        // Implement actual cart functionality here
        quantityElement.textContent = '0'; // Reset quantity after adding to cart
    } else {
        alert('Please select a quantity before adding to cart.');
    }
}


// Add these variables at the top of the file
let cart = [];
let cartTotal = 0;

// Modify the addToCart function
function addToCart(productName, button) {
    const quantityElement = button.parentElement.querySelector('.quantity');
    const quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
        const product = products.find(p => p.name === productName);
        const existingItem = cart.find(item => item.name === productName);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }
        
        updateCartDisplay();
        quantityElement.textContent = '0'; // Reset quantity after adding to cart
    } else {
        alert('Please select a quantity before adding to cart.');
    }
}

// Add these new functions
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cartTotal = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price.toFixed(2)}</span>
            <div class="cart-item-controls">
                <button onclick="decreaseCartQuantity('${item.name}')">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseCartQuantity('${item.name}')">+</button>
            </div>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItems.appendChild(itemElement);
        cartTotal += item.price * item.quantity;
    });

    document.getElementById('cart-total').textContent = `Total: ₹${cartTotal.toFixed(2)}`;
}

function increaseCartQuantity(productName) {
    const item = cart.find(item => item.name === productName);
    if (item) {
        item.quantity++;
        updateCartDisplay();
    }
}

function decreaseCartQuantity(productName) {
    const item = cart.find(item => item.name === productName);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCartDisplay();
    }
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartDisplay();
}

// Add an event listener for the checkout button
document.getElementById('checkout-btn').addEventListener('click', function() {
    if (cart.length > 0) {
        alert('Proceeding to checkout. Total: ₹' + cartTotal.toFixed(2));
        // Here you would typically redirect to a checkout page
    } else {
        alert('Your cart is empty. Add some items before checking out.');
    }
});




// Modify the event listener for the checkout button
document.getElementById('checkout-btn').addEventListener('click', function() {
    if (cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'checkout.html';
    } else {
        alert('Your cart is empty. Add some items before checking out.');
    }
});