const foodContainer = document.querySelector('.list-food')
const searchInput = document.querySelector('#search-game')

const foodList = [
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
function renderGameList(listFood) {
    let htmls = "";

    for (let i = 0; i < listFood.length; i++) {
        htmls += `
        <div class="category-game">
          <div class="border">
            <a href="" class="banner-game">
            <img src=${listFood[i].image}>
            </a>
          </div>
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
      `
    }

    foodContainer.innerHTML = htmls
}

renderGameList(foodList)