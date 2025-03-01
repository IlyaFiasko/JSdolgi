// Состояние банкомата
let cardInATM = true;  // Карта в банкомате
let balance = 500;     // Сумма на карте

// Ввод суммы
let amount = parseInt(prompt("Введите сумму для операции:"));

// Проверка условий
if (cardInATM && amount <= balance) {
    console.log("Операция выполняется");
} else {
    console.log("Операция отклонена");
}