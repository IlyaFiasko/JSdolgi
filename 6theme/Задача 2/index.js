// Массив чисел
const numbers = [15, 42, 7, 23, 56, 3, 89];

// Элементы DOM
const allElements = document.querySelector('.all-elements');
const minButton = document.querySelector('.min');
const maxButton = document.querySelector('.max');
const minNumber = document.querySelector('.minNumber');
const maxNumber = document.querySelector('.maxNumber');

// Вывод всех элементов массива 
allElements.textContent = numbers.join(', ');

// Поиск минимального числа
minButton.addEventListener('click', () => {
    const min = Math.min(...numbers); // Находим минимальное число
    minNumber.textContent = min; // Выводим его на страницу
});

// Поиска максимального числа
maxButton.addEventListener('click', () => {
    const max = Math.max(...numbers); // Находим максимальное число
    maxNumber.textContent = max; // Выводим его на страницу
});