const featuredProducts = [
    { name: 'Hempcrete', image: 'hempcrete.jpg', description: 'Eco-friendly building solution.' },
    { name: 'Hemp Fiber Insulation', image: 'hemp_fiber.jpg', description: 'Sustainable insulation material.' },
    // Add more products as needed
];

function loadCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    featuredProducts.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'carousel-item' + (index === 0 ? ' active' : '');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="carousel-caption">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        `;
        carouselInner.appendChild(productDiv);
    });
}

function prevSlide() {
    const items = document.querySelectorAll('.carousel-item');
    const activeItem = document.querySelector('.carousel-item.active');
    let index = Array.from(items).indexOf(activeItem);
    items[index].classList.remove('active');
    index = (index === 0) ? items.length - 1 : index - 1;
    items[index].classList.add('active');
}

function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    const activeItem = document.querySelector('.carousel-item.active');
    let index = Array.from(items).indexOf(activeItem);
    items[index].classList.remove('active');
    index = (index === items.length - 1) ? 0 : index + 1;
    items[index].classList.add('active');
}

document.addEventListener('DOMContentLoaded', loadCarousel);
