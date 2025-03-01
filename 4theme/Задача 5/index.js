function totalSum(priceItem, amountItem, discountItem) {
    const total = priceItem * amountItem;
    const discountAmount = total * (discountItem / 100);
    return total - discountAmount;
}

const priceItem = 25000;
const amountItem = 3;
const discountItem = 20;

console.log(totalSum(priceItem, amountItem, discountItem)); // 60000