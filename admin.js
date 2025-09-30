const ADMIN_PASSWORD = "admin123987654boom";

function login() {
  const pass = document.getElementById('password').value;
  if (pass === ADMIN_PASSWORD) {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('admin-section').style.display = 'block';
    renderProducts();
  } else {
    alert("Неверный пароль");
  }
}

function addProduct() {
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const image = document.getElementById('image').value;

  if (!name || !price || !image) {
    alert("Заполните все поля!");
    return;
  }

  const products = JSON.parse(localStorage.getItem('products') || '[]');
  products.push({ name, price, image });
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
}

function deleteProduct(index) {
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
}

function renderProducts() {
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  products.forEach((p, i) => {
    const li = document.createElement('li');
    li.innerHTML = `${p.name} - ${p.price} ₽ 
      <button onclick="deleteProduct(${i})">Удалить</button>`;
    list.appendChild(li);
  });
}
