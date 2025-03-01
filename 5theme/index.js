let itemCount = 0; // Счетчик добавленных товаров

function addToCart(productName) {
    // Находим элемент корзины
    const cart = document.getElementById('cart');

    // Увеличиваем счетчик товаров
    itemCount += 1;

    // Создаем новый элемент списка
    const newItem = document.createElement('li');

    // Устанавливаем текстовое содержимое элемента с номером товара
    newItem.textContent = `${itemCount}. ${productName}`;

    // Добавляем класс для стилизации
    newItem.classList.add('cart-item');

    // Добавляем новый элемент в корзину
    cart.appendChild(newItem);
}