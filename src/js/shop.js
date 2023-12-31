const gameContainer = document.querySelector('.game-container')
const searchInput = document.querySelector('#search-game')

const gameList = [
  {
    id: 1,
    name: "Rust",
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_0e646f1a70e5cb8eed00efef8adb9579d40d5b2e.600x338.jpg'
  },
  {
    id: 2,
    name: "NARAKA: BLADEPOINT",
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1203220/capsule_616x353.jpg'
  },
  {
    id: 3,
    name: "Grim Dawn",
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/219990/capsule_616x353.jpg'
  },
  {
    id: 4,
    name: "Slay the Spire",
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1203220/capsule_616x353.jpg'
  },
  {
    id: 5,
    name: "SOS OPS!",
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_0e646f1a70e5cb8eed00efef8adb9579d40d5b2e.600x338.jpg'
  },
  {
    id: 6,
    name: "Wolvesville",
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_0e646f1a70e5cb8eed00efef8adb9579d40d5b2e.600x338.jpg'
  },
  {
    id: 7,
    name: "Eternal Return",
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_0e646f1a70e5cb8eed00efef8adb9579d40d5b2e.600x338.jpg'
  },
  {
    id: 8,
    name: "Apex Legends™",
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/ss_0e646f1a70e5cb8eed00efef8adb9579d40d5b2e.600x338.jpg'
  }
]
function renderGameList(listGame) {
  let htmls = "";

  for (let i = 0; i < listGame.length; i++) {
    htmls += `
        <div class="game-item">
          <img src=${listGame[i].image}>
          <div class="product-text">
              <h2~>${listGame[i].name}</h2>
              <p class="price">${listGame[i].price}</p>
          </div>
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