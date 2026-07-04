let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName('hero-slide');
    let dots = document.getElementsByClassName('dot');
    
    // Loop back to the first slide if at the end
    if (n > slides.length) { slideIndex = 1; }
    // Loop to the last slide if at the beginning
    if (n < 1) { slideIndex = slides.length; }

    // Calculate the offset for the slider
    let offset = -(slideIndex - 1) * 100;

    // Apply the offset to the slider
    document.querySelector('.hero-slider').style.transform = `translateX(${offset}%)`;

    // Remove the "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Add the "active" class to the current dot
    if (dots.length > 0) {
        dots[slideIndex - 1].classList.add("active");
    }
}

function createDots() {
    let slides = document.getElementsByClassName('hero-slide');
    let dotsContainer = document.querySelector('.slider-dots');
    
    // Create and append dots
    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = function() { currentSlide(i + 1); };
        dotsContainer.appendChild(dot);
    }
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

// Create dots on page load
createDots();