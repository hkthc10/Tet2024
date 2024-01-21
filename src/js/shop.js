const foodContainer = document.querySelector('.food-container')


const foodList = [
  {
    id: 1,
    name: "Bánh Chưng",
    image: '/src/img/banhchung.jpg',
    description: "Nếu như bánh tét là món ăn truyền thống ở miền Nam, thì ở miền Bắc, bánh chưng thường xuyên xuất hiện trên bàn thờ tổ tiên",
    price: "120k"
  },
  {
    id: 2,
    name: "Thịt kho Tàu",
    image: '/src/img/thitkhotau.jpg',
    description: "Một trong những món ăn quen thuộc của người miền Nam trong các dịp lễ Tết chính là món thịt kho nước dừa (còn gọi là thịt kho Tàu)",
    price: "90k"
  },
  {
    id: 3,
    name: "Bánh tét",
    image: '/src/img/banhtet.jpg',
    description: "Bánh tét là một trong những món ăn không thể thiếu của người miền Nam, với màu sắc và hương vị không thể quên",
    price: "120k"
  },
  {
    id: 4,
    name: "Củ cải ngâm nước mắm",
    image: '/src/img/cucaingamtuong.jpg',
    description: "Một món ăn không thể thiếu trong danh sách món ăn ngày tết miền Nam là củ cải ngâm nước mắm, củ kiệu tôm khô",
    price: "120k"
  },
  {
    id: 5,
    name: "Lạp xưởng",
    image: '/src/img/lapxuong.jpg',
    description: " Lạp xưởng phổ biến nhất được làm từ thịt gồm hai loại chính: lạp xưởng tươi và lạp xưởng khô",
    price: "120k"
  },
  {
    id: 6,
    name: "Chả lụa",
    image: '/src/img/chalua.jpg',
    description: "Món chả lụa là một trong những món ăn Tết được nhiều người lựa chọn mua nhất và được ưa chuộng ở các tỉnh miền Nam",
    price: "120k"
  },
  {
    id: 7,
    name: "Canh măng",
    image: '/src/img/canhmang.jpg',
    description: "Canh măng không chỉ là một món ăn cung cấp nhiều dưỡng chất (chất xơ và vitamin) cho cơ thể con người, mà còn là một món ăn ngày tết",
    price: "120k"
  },
  {
    id: 8,
    name: "Chả giò",
    image: '/src/img/chagio.jpg',
    description: "Chả giò là một món món ăn đặc trưng ngày tết của người miền Nam",
    price: "120k"
  },
  {
    id: 9,
    name: "Dưa giá",
    image: '/src/img/duagia.jpg',
    description: "Dưa giá là một trong những món ngon ngày tết dễ làm và thích hợp ăn kèm với các món ăn chính như thịt kho nước dừa, lạp xưởng, bánh tét",
    price: "120k"
  },
  {
    id: 10,
    name: "Canh khổ qua",
    image: '/src/img/canhkhoqua.jpg',
    description: "Món canh khổ qua được dân gian ví như món ăn có ý nghĩa cầu mong mọi điều khổ cực sẽ chóng đi qua trong năm cũ và chào đón sự mới mẻ, tốt đẹp trong năm mới",
    price: "120k"
  },
  {
    id: 11,
    name: "Bắp bò kho mật mía",
    image: '/src/img/bokhomatmia.jpg',
    description: "fadgdsagdsfsâfdâfđầ",
    price: "120k"
  },
  {
    id: 12,
    name: "Thịt heo ngâm mắm",
    image: '/src/img/thitheongammam.jpg',
    description: "fadgdsagdsfsâfdâfđầ",
    price: "120k"
  },
  {
    id: 13,
    name: "Tré",
    image: '/src/img/tre.jpg',
    description: "fadgdsagdsfsâfdâfđầ",
    price: "120k"
  },
  {
    id: 14,
    name: "Chả bò",
    image: '/src/img/chabo.jpg',
    description: "fadgdsagdsfsâfdâfđầ",
    price: "120k"
  },
  {
    id: 15,
    name: "Bò thưng",
    image: '/src/img/bothung.jpg',
    description: "fadgdsagdsfsâfdâfđầ",
    price: "120k"
  },
  {
    id: 16,
    name: "Gà luộc lá chanh",
    image: '/src/img/galuoclachanh.jpg',
    description: "fadgdsagdsfsâfdâfđầ",
    price: "120k"
  },
  {
    id: 17,
    name: "Nem chua",
    image: '/src/img/nemchua.jpg',
    description: "fadgdsagdsfsâfdâfđầ",
    price: "120k"
  },
  {
    id: 18,
    name: "Tôm chua",
    image: '/src/img/tomchua.jpg',
    description: "fadgdsagdsfsâfdâfđầ",
    price: "120k"
  },
  {
    id: 19,
    name: "Bánh thuẫn",
    image: '/src/img/banhthuan.jpg',
    description: "fadgdsagdsfsâfdâfđầ",
    price: "120k"
  },
  {
    id: 20,
    name: "Bánh in",
    image: '/src/img/banhin.jpg',
    description: "fadgdsagdsfsâfdâfđầ",
    price: "120k"
  },
  {
    id: 20,
    name: "Xôi vò",
    image: '/src/img/xoivo.jpg',
    description: "Xôi vò là một trong những món ăn đặc trưng ngày tết của người miền Nam mà bất cứ bà nội trợ nào cũng thích làm",
    price: "120k"
  }
]

const foodsCart = JSON.parse(localStorage.getItem('foods-cart')) || [];

const handleRenderFoodList = (foods) => {

  const htmls = foods.map(foodItem => {
    return `
        <div class="border d-flex">
          <a href="./shop.html" class="item-a">
            <div class="food-item">
              <img src=${foodItem.image}>
              <div class="product-text">
                <div class"sales">
                  <h2~>${foodItem.name}</h2>
                </div>  
              </div>
              <div class"sales"></div>
            
              <div class="pr-sh">
                <p class="price">${foodItem.price}</p>
                <form class="sub">
                  <button class="add-cart" onclick="handleAddToCart(${foodItem.id})">
                   <i class="fa-solid fa-cart-plus"></i>
                  </button>
                </form>
              </div>
            </div>
          </a>
        </div>
      `
  })

  foodContainer.innerHTML = htmls.join('');
}

const handleAddToCart = (foodId) => {
  const selectedFood = foodList.find(food => food.id == foodId);

  foodsCart.push(selectedFood);
  localStorage.setItem('foods-cart', JSON.stringify(foodsCart));
}

window.addEventListener("load", (event) => {
  handleRenderFoodList(foodList);
});

