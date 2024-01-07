const foodContainer = document.querySelector('.list-food')
const searchInput = document.querySelector('#search-game')

const foodList = [
    {
        id: 1,
        name: "Bánh Chưng",
        image: '/src/img/banhchung.jpg'
    },
    {
        id: 2,
        name: "Thịt kho nước dừa (Thịt kho Tàu)",
        image: '/src/img/thitkhotau.jpg'
    },
    {
        id: 3,
        name: "Bánh tét",
        image: '/src/img/thitkhotau.jpg'
    },
    {
        id: 4,
        name: "Củ cải ngâm nước mắm",
        image: '/src/img/cucaingamtuong.jpg'
    },
    {
        id: 5,
        name: "Lạp xưởng",
        image: '/src/img/lapxuong.jpg'
    },
    {
        id: 6,
        name: "Chả lụa",
        image: '/src/img/chalua.jpg'
    },
    {
        id: 7,
        name: "Canh măng",
        image: '/src/img/canhmang.jpg'
    }
]
function renderFoodList(listFood) {
    let htmls = "";

    for (let i = 0; i < listFood.length; i++) {
        htmls += `
        <div class="category-game">
          <a>
            <div class="border">
              <a href="" class="banner-game">
                  <img src=${listFood[i].image}>
              </a>
              <div class="text-gt">
                <a href="">${listFood[i].name}</a>
                <div class="icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      `
    }

    foodContainer.innerHTML = htmls
}

renderFoodList(foodList)