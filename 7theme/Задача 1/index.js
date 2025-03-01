let books = ["Мастер и Маргарита", "Гарри Поттер", "За пропастью во ржи", "Властелин колец", "Дюна", "Отцы и дети"];

// Находим элементы DOM
const bookList = document.getElementById('book-list');
const addBookButton = document.getElementById('add-book');
const searchBookButton = document.getElementById('search-book');

// Отображение списка книг
function renderBooks() {
    bookList.innerHTML = ''; // Очищаем список
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}) ${book}`; // Добавляем номер книги
        bookList.appendChild(li);
    });
}

// Добавление книги
addBookButton.addEventListener('click', () => {
    const bookName = prompt('Введите название книги:');
    if (bookName) {
        books.push(bookName);
        renderBooks();
    } else {
        alert('Название книги не введено!');
    }
});

// Поиск книги
searchBookButton.addEventListener('click', () => {
    const searchTerm = prompt('Введите название книги для поиска:');
    if (searchTerm) {
        const foundBook = books.find(book => book.toLowerCase() === searchTerm.toLowerCase());
        if (foundBook) {
            const listItems = bookList.querySelectorAll('li');
            listItems.forEach(item => {
                if (item.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
                    item.style.backgroundColor = '#e0f7fa'; // Выделяем найденную книгу
                } else {
                    item.style.backgroundColor = ''; // Сбрасываем выделение
                }
            });
        } else {
            alert('Книга не найдена!');
        }
    }
});

// Инициализация: отображаем книги при загрузке страницы
renderBooks();