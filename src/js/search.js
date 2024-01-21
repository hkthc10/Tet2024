const searchInput = document.querySelector('#search-food')

handleRenderFoodList(foodList);

function searchFoods(searchString) {

  let foundFoods = foodList.filter(function (food) {
  
    return food.name.toLowerCase().includes(searchString.toLowerCase());
  })

  handleRenderFoodList(foundFoods) 
}

window.addEventListener("input", (event) => {
  searchFoods(event.target.value)
});
