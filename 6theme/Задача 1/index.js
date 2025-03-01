// Исходный массив
const products = ["Мышка", "Клавиатура", "Наушники"];

// Нужно добавить
const newProducts = ["Монитор", "Принтер", "Флешка"];

// Добавляем новые товары в массив
products.push(...newProducts);

// Находим элемент ul для вывода товаров
const productsList = document.querySelector('.products');

// Выводим каждый товар в список
products.forEach(product => {
    const li = document.createElement('li'); // Создаем элемент li
    li.textContent = product; // Добавляем текст
    productsList.appendChild(li); // Добавляем li в ul
});