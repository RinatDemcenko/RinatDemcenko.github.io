// // 1 задание
// let product = "Ножі"
// let price = "239"
// let message = `У нас є товар ${product}, він коштує ${price}`;
// console.log(message)

// 2 задание
warehouse = ParseInt(prompt('введите число товаров'));
units = ParseInt(prompt('введите число скупленных товаров'));

if (warehouse<=units) {
    console.log("все товары скуплены");
  } else {
    console.log(`осталось ${warehouse-units} товаров`);
  }

// // 3 задание
// let random = prompt("введите загаданое число")
// for (let random = 0; random < 21; random += 1) {
//   if (random === 20) {
//     console.log('');
//     break;
//   }
// }