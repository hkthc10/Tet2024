const foodContainer = document.querySelector('.cart-in')
const searchInput = document.querySelector('#search-game')

const foodList = [
    {
        id: 1,
        name: "Bánh Chưng",
        image: '/src/img/banhchung.jpg',
        price: "120₫"
    },
    {
        id: 2,
        name: "Thịt kho Tàu",
        image: '/src/img/thitkhotau.jpg',
        price: "120₫"
    },
    {
        id: 3,
        name: "Bánh tét",
        image: '/src/img/thitkhotau.jpg',
        price: "120₫"
    },
    {
        id: 4,
        name: "Củ cải ngâm nước mắm",
        image: '/src/img/cucaingamtuong.jpg',
        price: "120₫"
    }
]
function renderFoodList(listFood) {
    let htmls = "";

    for (let i = 0; i < listFood.length; i++) {
        htmls += `
        <div class="item">
                <div class="buttons">
                    <span class="removal-button"></span>
                    <span class="like-btn"></span>
                </div>

                <div class="image">
                    <img src=${listFood[i].image}>
                </div>

                <div class="description">
                    <span>Common Projects</span>
                    <span>Bball High</span>
                    <span>White</span>
                </div>

                <div class="quantity">
                    <button class="plus-btn" type="button" name="button">
                        <img src="./img/plus.png" alt="" />
                    </button>
                    <input type="text" name="name" value="1">
                    <button class="minus-btn" type="button" name="button">
                        <img src="./img/minus.png" alt="" />
                    </button>
                </div>

                <div class="total-price">${listFood[i].price}</div>
        </div>
      `
    }

    foodContainer.innerHTML = htmls
}

renderFoodList(foodList)

var fadeTime = 100;

$('.removal-button').click( function() {
    removeItem(this);
  });

  function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.remove();
}