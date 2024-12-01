document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const items = Array.from(document.querySelectorAll(".carousel-item"));
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");

    // Shuffle items initially
    function shuffleItems() {
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }
    }

    // Rearrange items in the carousel
    function rearrangeItems() {
        carousel.innerHTML = "";
        items.forEach(item => carousel.appendChild(item));
    }

    // Move the carousel items to the left
    function moveLeft() {
        const firstItem = items.shift();
        items.push(firstItem);
        rearrangeItems();
    }

    // Move the carousel items to the right
    function moveRight() {
        const lastItem = items.pop();
        items.unshift(lastItem);
        rearrangeItems();
    }

    // Event listeners for controls
    prevButton.addEventListener("click", moveLeft);
    nextButton.addEventListener("click", moveRight);

    // Initialize carousel
    shuffleItems();
    rearrangeItems();

    // Add new items to the carousel
    const newItem1 = {
        title: 'Laminated Timber',
        image: 'placeholder.jpg',
        alt: 'Laminated Timber Image',
        price: '250 EUR/m³',
        link: 'laminated_timber.html'
    };
    const newItem2 = {
        title: 'Cross-Laminated Timber',
        image: 'placeholder.jpg',
        alt: 'Cross-Laminated Timber Image',
        price: '300 EUR/m³',
        link: 'cross_laminated_timber.html'
    };
    const newItem3 = {
        title: 'Glulam Beams',
        image: 'placeholder.jpg',
        alt: 'Glulam Beams Image',
        price: '280 EUR/m³',
        link: 'glulam_beams.html'
    };

    // Create HTML elements for new items
    const item1 = document.createElement("div");
    item1.classList.add("carousel-item");
    item1.innerHTML = `
        <h2>${newItem1.title}</h2>
        <img src="${newItem1.image}" alt="${newItem1.alt}">
        <p>Price: ${newItem1.price}</p>
        <a href="${newItem1.link}">Learn More</a>
    `;

    const item2 = document.createElement("div");
    item2.classList.add("carousel-item");
    item2.innerHTML = `
        <h2>${newItem2.title}</h2>
        <img src="${newItem2.image}" alt="${newItem2.alt}">
        <p>Price: ${newItem2.price}</p>
        <a href="${newItem2.link}">Learn More</a>
    `;

    const item3 = document.createElement("div");
    item3.classList.add("carousel-item");
    item3.innerHTML = `
        <h2>${newItem3.title}</h2>
        <img src="${newItem3.image}" alt="${newItem3.alt}">
        <p>Price: ${newItem3.price}</p>
        <a href="${newItem3.link}">Learn More</a>
    `;

    // Add new items to the carousel
    items.push(item1);
    items.push(item2);
    items.push(item3);

    // Rearrange items in the carousel
    rearrangeItems();
});
