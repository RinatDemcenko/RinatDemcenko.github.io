// 4
credits = 23580;
pricePerDroid = 3000;
quantity = prompt("введите количество товара")

if (quantity == null) {
    console.log('Скасовано користувачем!');
}

else if (credits <= quantity*pricePerDroid) {
    console.log("недостаточно кредитов"); 
    }

    else{
        console.log(`вы заказали ${quantity} дроидов, у вас осталось ${credits-pricePerDroid*quantity} кредитов`);
  }