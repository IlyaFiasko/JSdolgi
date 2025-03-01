// Добавьте возможность ввода данных товаров с клавиатуры, используя окно ввода prompt().
// Выведете в консоль сумму всей покупки.

function inputProductData(productName) {
    let price = parseFloat(prompt(`Введите стоимость товара "${productName}":`)); // Ввод price
    let count = parseInt(prompt(`Введите количество товара "${productName}":`)); // Ввод count
    return { price, count };
  }
  
  let product1 = "Молоко";
  let data1 = inputProductData(product1);
  let total1 = data1.price * data1.count; // Сумма для товара 1
  
  let product2 = "Кофе";
  let data2 = inputProductData(product2);
  let total2 = data2.price * data2.count; // Сумма для товара 2
  
  let product3 = "Яблоки";
  let data3 = inputProductData(product3);
  let total3 = data3.price * data3.count; // Сумма для товара 3
  
  // Вывод в консоль
  console.log(product1, data1.price, "x", data1.count, "=", total1);
  console.log(product2, data2.price, "x", data2.count, "=", total2);
  console.log(product3, data3.price, "x", data3.count, "=", total3);
  
  // Расчет общей суммы покупки
  let totalSum = total1 + total2 + total3;
  console.log("Сумма все покупки: ", totalSum);