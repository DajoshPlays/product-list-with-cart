"use strict";

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        const productsContainer = document.getElementById('products-gallery')
        console.log(productsContainer);

        productsContainer.innerHTML = data.map(product => `
            <div class = "product-card">
                <picture>
                    <source srcset = "${product.image.desktop}" media = "(min-width : 1024px)">
                    <source srcset = "${product.image.tablet}" media = "(min-width : 768px)">
                    <source srcset = "${product.image.mobile}" media = "(max-width : 767px)">
                    <img src = "${product.image.thumbnail}" alt ="${product.name}">
                </picture>
                <div class="product-info">
                    <span class="prod">${product.category}</span>
                     <h2 class="products-image-heading">${product.name}</h2>
                    <p class = "price-tag">$${product.price}</p>
                </div>
            </div>
        `).join('');
        console.log(data)
    })
    .catch(error => console.error('Error fetching Json:', error))
const cartContainer = document.querySelector(".cart-cont");
