const dataItems = {
  "items": [
    {
      "id": 1,
      "title": "FLOLAND",
      "description": "Шампунь для волос питательный с азиатской центеллой Daily Nourishing Shampoo",
      "price": 690,
      "img_src": "https://am-beauty.ru/upload/iblock/692/7y0zkvaeqscjt2hefutqhv2jk3lb4zvj.png"
    },
    {
      "id": 2,
      "title": "HADAT",
      "description": "Шампунь для волос глубоко очищающий Hydro Mud Hair Shampoo",
      "price": 4554,
      "img_src": "https://am-beauty.ru/upload/iblock/3ff/tug8mskxasfj6spgwct45fgcmlzjikt8.png",
    },
    {
      "id": 3,
      "title": "MASIL",
      "description": "Шампунь от перхоти с яблочным уксусом 5 Probiotics Apple Vinegar Shampoo (300 мл)",
      "price": 1300,
      "img_src": "https://am-beauty.ru/upload/iblock/c62/7kjzsael2ze08fr693kqh4j62h2dzsit.png"
    },
    {
      "id": 4,
      "title": "HEMPZ",
      "description": "Шампунь для волос растительный для придания объёма Sweet Pineapple & Honey Melon Volumising (265 мл)",
      "price": 2690,
      "img_src": "https://am-beauty.ru/upload/iblock/d02/97ij5w2tjxtomzr1ukj7u6can6ks205i.png"
    },
    {
      "id": 5,
      "title": "HADAT",
      "description": "Набор для востановления волос Hydro Repair Hair Set",
      "price": 5060,
      "img_src": "https://am-beauty.ru/upload/iblock/cf8/ra22bn44dl4fbx1yiovoq73aifj9hyf9.png"
    }
  ]
};

function loadItems() {
  // Находим элемент с классом content, куда мы будем вставлять новые товары
  let elementContent = document.getElementsByClassName('content')[0];
  // Находим элемент плэйсхолдер с классом item
  let elementItem = document.getElementsByClassName('item')[0];
  // Удаляем плейсхолдер из DOM
  elementItem.remove();
  // Итерируемся по товарам, которые нам надо отобразить
  for(let dataItem of dataItems['items']) {
    // Клонируем плейсхолдер, в результате получаем новый элемент, который еще не отображается в DOM
    let item = elementItem.cloneNode(true);
    // Вставляем контент в наш новый элемент
    item.querySelector('.item_img').src = dataItem['img_src'];
    item.querySelector('.item_title').textContent = dataItem['title'];
    item.querySelector('.item_description').textContent = dataItem['description'];
    item.querySelector('.item_price').textContent = dataItem['price'];
    // Добавляем item в DOM, чтобы отобразить товар
    elementContent.appendChild(item);
  }
}

loadItems();