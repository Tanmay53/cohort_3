// Initial dummy products available for when app first loads
let productsArr = [
  {
    id: 1,
    title: 'MacBook',
    content:
      'Intel Core 2 Duo processor Powered byan Intel Core 2 Duo processor at speeds up to 2.1',
    price: 602.0,
    tax: 500.0
  },
  {
    id: 2,
    title: 'iPhone',
    content:
      'iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..',
    price: 123.2,
    tax: 101.0
  },
  {
    id: 3,
    title: 'Apple Cinema 30"',
    content:
      'The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed',
    price: 110.0,
    tax: 90.0
  }
];

const createCard = product =>
  `<div class='card' onclick="deleteProduct(${product.id})">
  <div class='card-img'>
    <img src='./assets/laptop_img.jpg' alt='laptop-img' />
  </div>
  <div class='card-header'>${product.title}</div>
  <div class='card-body'>
    ${product.content}
  </div>
  <div class='card-lower'>
    <div class='price'>$${product.price}</div>
    <div class='tax'>Ex Tax: $${product.tax}</div>
  </div>
  <div class='card-footer'>
    <div>
      <i class='fa fa-shopping-cart'></i>ADD TO CART
    </div>
    <div>&hearts;</div>
    <div>&#8644;</div>
  </div>
</div>`;

const renderPage = productsArr => {
  const displayDiv = document.getElementById('products-display');
  let htmlStrToRender = '';

  for (const product of productsArr) {
    htmlStrToRender += createCard(product);
  }

  if (htmlStrToRender.length) {
    displayDiv.innerHTML = htmlStrToRender;
  } else {
    displayDiv.innerHTML = '<h2>No Products Available!</h2>';
  }
};

const formSubmitHandler = e => {
  e.preventDefault();

  let id = null;
  if (productsArr.length) {
    id = productsArr[productsArr.length - 1]['id'] + 1;
  }
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;
  let price = document.getElementById('price').value;
  let tax = document.getElementById('tax').value;

  let product = {
    id: id,
    title: title,
    content: content,
    price: price,
    tax: tax
  };

  productsArr.push(product);
  renderPage(productsArr);
  e.target.reset();
};

const deleteProduct = productId => {
  productsArr = productsArr.filter(product => product.id !== productId);
  renderPage(productsArr);
};

// When Application First Loads
renderPage(productsArr);
