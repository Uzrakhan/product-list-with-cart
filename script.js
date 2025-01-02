const productCards = document.querySelector('.product-card');
const productList = document.getElementById('product-list');
const cartSection = document.querySelector('.cart-section');
const productContainer = document.querySelector('.product-container');
const cartContainer = document.getElementById('cart-container');
const cartList = document.getElementById('cart-list');

const products = [
    {   
        id: 1,
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {   
        id: 2,
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        id:3,
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        id: 4,
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        id: 5,
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        id: 6,
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        id: 7,
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        id: 8,
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        id: 9,
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
];


products.forEach(({ id,image, name,category,price }) => {
    productList.innerHTML += `
       <div class="product-card">
            <div class="img-wrapper">
                <img src="${image.thumbnail}" alt="${name}">
                <div class="overlay">
                    <button class="add-to-cart" id="${id}">
                       <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
                        <span>Add To Cart</span>
                    </button>
                </div>
            </div>

            <div class="product-info">
                <p class="prod-category">${category}</p>
                <h5 class="prod-name">${name}</h5>
                <p class="prod-price">$${price}</p>
            </div>
       </div>
    `
});

class shoppingCart{
    constructor() {
        this.items = [];
        this.total = 0;
    }

    addItem(id){
        const product = products.find((item) => item.id === id);
        const {name,price} = product;

        if(!product) return;

        this.items.push(product);
        this.renderCart();

        
    }

    renderCart(){
        cartList.innerHTML = '';

        const totalCountPerProduct = {};
        this.items.forEach((dessert) => {
            totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
        });


        this.items.forEach((product) => {
            const count = totalCountPerProduct[product.id];
        });

        this.total = this.items.reduce((acc, item) => acc + item.price, 0);

        const cartHeader = document.querySelector('#cart h3');
        cartHeader.textContent = 'Your Cart';

        this.items.forEach((product) => {
            const count = totalCountPerProduct[product.id];
            if(count > 1) {
                cartHeader.textContent += `Your Cart (${count}x)`;
                cartList.innerHTML += `
                  <div class="product-list">
                    <div class="cart-items">
                        <h5 class="item-name">${product.name}</h5>
                        <p class="item-count">${count}x</p>
                        <p class="item-subtotal">@${subTotal.toFixed(2)}</p>
                        <p class="item-total">${this.total.toFixed(2)}</p>
                    </div>
                    <br>
                </div>
                `
            } 
        })

        cartList.innerHTML += `
               <p class="cart-total">Order Total: ${cartTotal.toFixed(2)}</p>
               <br>
               <p>This is a carbon-friendly delivery.</p>
               <button>Checkout</button></p>
        `;
    

    }
 


}

const cart = new shoppingCart();
const addToCartBtns = document.getElementsByClassName('add-to-cart');
[...addToCartBtns].forEach((btn) => {
    btn.addEventListener('click', (event) => {
        cart.addItem(Number(event.target.id),products);
    })
})
