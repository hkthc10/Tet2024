const cartListHTML = document.querySelector('.cart-in');
const productsCart = JSON.parse(localStorage.getItem('foods-cart')) || [];


const handleRenderCart = () => {
    cartSize = productsCart.length || 0;
    let htmls = '';
    for (let i = 0; i < cartSize; i++) {
        htmls += (
            `
    <div class="item">
            <div class="buttons">
                <span class="removal-button" onclick="deleteById(${i})"></span>
                <span class="like-btn"></span>
            </div>

            <div class="image">
                <img src=${productsCart[i].image}>
            </div>

            <div class="description">
                <span>${productsCart[i].description}</span>
            </div>

            <div class="total-price">${productsCart[i].price}</div>
    </div>
    `
    ); 
    
    }
    cartListHTML.innerHTML = htmls;
}

const deleteById = (index) => {
    let productListCard = productsCart;

    productListCard.splice(index, 1);
    handleRenderCart();
}

window.addEventListener("load", (event) => {
    handleRenderCart();
});

$('.clear-button').click(function () {
    localStorage.removeItem('foods-cart' );
});