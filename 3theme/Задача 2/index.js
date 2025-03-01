// Ввод мощности автомобиля
let horsepower = parseInt(prompt("Введите мощность автомобиля (в ЛС):"));

// Ставка налога в зависимости от мощности
let taxRate;
if (horsepower < 100) {
    taxRate = 12;
} else if (horsepower >= 100 && horsepower < 125) {
    taxRate = 25;
} else if (horsepower >= 125 && horsepower < 150) {
    taxRate = 35;
} else if (horsepower >= 150 && horsepower < 175) {
    taxRate = 45;
} else if (horsepower >= 175 && horsepower < 200) {
    taxRate = 50;
} else if (horsepower >= 200 && horsepower < 225) {
    taxRate = 65;
} else if (horsepower >= 225 && horsepower < 250) {
    taxRate = 75;
} else {
    taxRate = 150;
}

// Расчет налога
let tax = horsepower * taxRate;

// Вывод
console.log(`Сумма налога: ${tax}`);