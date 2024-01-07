const gameContainer = document.querySelector('.game-container')
const searchInput = document.querySelector('#search-game')

const gameList = [
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
  },
  {
    id: 5,
    name: "Lạp xưởng",
    image: '/src/img/lapxuong.jpg',
    price: "120₫"
  },
  {
    id: 6,
    name: "Chả lụa",
    image: '/src/img/chalua.jpg',
    price: "120₫"
  },
  {
    id: 7,
    name: "Canh măng",
    image: '/src/img/canhmang.jpg',
    price: "120₫"
  },
  {
    id: 8,
    name: "Chả giò",
    image: '/src/img/chagio.jpg',
    price: "120₫"
  },
  {
    id: 9,
    name: "Dưa giá",
    image: '/src/img/duagia.jpg',
    price: "120₫"
  },
  {
    id: 10,
    name: "Canh khổ qua",
    image: '/src/img/canhkhoqua.jpg',
    price: "120₫"
  }
]
function renderGameList(listGame) {
  let htmls = "";

  for (let i = 0; i < listGame.length; i++) {
    htmls += `
        <div class="border d-flex">
          <a href="./shop.html" class="item-a">
            <div class="game-item">
              <img src=${listGame[i].image}>
              <div class="product-text">
                <div class"sales">
                  <h2~>${listGame[i].name}</h2>
                </div>  
              </div>
              <div class"sales"></div>
            
              <div class="pr-sh">
                <p class="price">${listGame[i].price}</p>
                <form class="sub">
                  <button type="submit" id="add-btn"><img class="shop-img" src="./img/giohang.png" alt=""></button>
                </form>
              </div>
            </div>
          </a>
        </div>
      `
  }

  gameContainer.innerHTML = htmls
}


renderGameList(gameList)

function searchGames(searchString) {

  let foundGames = gameList.filter(function (game) {

    return game.name.toLowerCase().includes(searchString.toLowerCase());
  })

  renderGameList(foundGames)
}

searchInput.addEventListener("input", function (event) {
  searchGames(event.target.value)
})