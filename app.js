function loadProducts() {
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price} ₽</p>
      <button onclick="addToCart(${i})">В корзину</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(index) {
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(products[index]);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const ul = document.getElementById('cart');
  ul.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price} ₽`;
    ul.appendChild(li);
  });
}

loadProducts();
renderCart();
