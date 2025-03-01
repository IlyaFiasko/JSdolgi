// Массив роста учеников
let heights = [164, 157, 160, 143, 170];

// Находим элементы DOM
const heightList = document.getElementById('height-list');
const addHeightButton = document.getElementById('add-height');
const filterHeightButton = document.getElementById('filter-height');

// Функция для отображения списка роста
function renderHeights(filterValue = null) {
    heightList.innerHTML = ''; // Очищаем список
    heights.forEach((height, index) => {
        if (filterValue === null || height >= filterValue) {
            const li = document.createElement('li');
            li.textContent = `${index + 1}) ${height}`; // Добавляем номер и рост
            heightList.appendChild(li);
        }
    });
}

// Добавление роста
addHeightButton.addEventListener('click', () => {
    const height = prompt('Введите рост ученика:');
    if (height) {
        heights.push(Number(height));
        renderHeights();
    } else {
        alert('Рост не введён!');
    }
});

// Фильтрация роста
filterHeightButton.addEventListener('click', () => {
    const filterValue = prompt('Введите минимальный рост для фильтрации:');
    if (filterValue) {
        renderHeights(Number(filterValue));
    } else {
        renderHeights(); // Показать весь список, если фильтр не введён
    }
});

// Инициализация: отображаем рост при загрузке страницы
renderHeights();