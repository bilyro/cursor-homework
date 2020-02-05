let bread = 15.678,
    meat = 123.965,
    fish = 90.2345,
    allProducts = bread + meat + fish,
    maxS = Math.max(bread, meat, fish),
    minS = Math.min(bread, meat, fish),
    roundPrices = Math.floor(allProducts),
    roundToHundredsPrices = Math.round(roundPrices / 100) * 100,
    priceProducts = Math.floor(roundPrices),
    change = 500 - (allProducts),
    middlePrice = (allProducts / 3).toFixed(2),
    discount = Math.round(Math.random() * 100),
    discountProducts = allProducts * ((100 - discount) / 100),
    priceProductsDiscount = (allProducts - discountProducts).toFixed(2),
    costPrice = allProducts / 2,
    lostProfit = (costPrice - priceProductsDiscount).toFixed(2);

console.log("Максимальне число: " + maxS + "грн");

console.log("Мінімальне число: " + minS + "грн");

console.log("Сума всіх товарів: " + allProducts + "грн");

console.log("Сума з округленням: " + roundPrices + "грн");

console.log("Сума з округренням до сотих: " + roundToHundredsPrices + "грн");

if (priceProducts % 2 === 0) {
  console.log("Чи є сума парною: " + true);
} else {
  console.log("Чи є сума парною: " + false);
}

console.log("Здача з 500 грн: " + change);

console.log("Середня сума: " + middlePrice + "грн");

console.log("Рандомна знижка: " + discount + "%");

console.log("Ціна на продукти зі знижкою: " + priceProductsDiscount);

console.log("Собівартість: " + costPrice + "грн");

console.log("Втрачена вигода: " + lostProfit + "грн");