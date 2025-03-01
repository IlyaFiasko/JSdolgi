// Массив товаров
let products = ["Арбуз", "Книга", "Кофе", "Макароны", "Молоко", "Сахар"];

// Находим элементы DOM
const productList = document.getElementById('product-list');
const addProductButton = document.getElementById('add-product');

// Функция для отображения списка товаров
function renderProducts() {
    productList.innerHTML = ''; // Очищаем список
    products.sort(); // Сортируем товары по алфавиту
    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}) ${product}`; // Добавляем номер и название товара
        productList.appendChild(li);
    });
}

// Добавление товара
addProductButton.addEventListener('click', () => {
    const productName = prompt('Введите название товара:');
    if (productName) {
        products.push(productName);
        renderProducts();
    } else {
        alert('Название товара не введено!');
    }
});

// Инициализация: отображаем товары при загрузке страницы
renderProducts();