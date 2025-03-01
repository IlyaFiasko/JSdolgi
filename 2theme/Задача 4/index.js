// Текущий год
const currentYear = new Date().getFullYear();

// Массив для хранения пользователей
const users = [];

// Ввод данных для ТРЕХ пользователей
for (let i = 0; i < 3; i++) {
  // Имя и год рождения
  const name = prompt(`Введите имя пользователя ${i + 1}:`);
  const yearOfBirth = parseInt(prompt(`Введите год рождения пользователя ${i + 1}:`));

  // Рассчитываем возраст
  const age = currentYear - yearOfBirth;

  // Добавляем пользователя в массив
  users.push({ name, age });
}

// Вывод списка пользователей
for (let i = 0; i < users.length; i++) {
  console.log(`${i + 1} '${users[i].name}' ${users[i].age}`);
}

// Расчет среднего возраста
let totalAge = 0;
for (let i = 0; i < users.length; i++) {
  totalAge += users[i].age; // Суммируем возраст всех пользователей
}

const averageAge = Math.round(totalAge / users.length); // Округляем средний возраст

// Вывод среднего возраста
console.log(`Средний возраст пользователей: ${averageAge}`);