//   5
let country = prompt("введите свою страну");
switch (country) {
  case 'Китай':
      let priceChina = 100;
    console.log(`Доставка в ${country} буде коштувати ${priceChina} кредитів`);
    break;
    case 'Чилі':
        let priceChili = 250;
      console.log(`Доставка в ${country} буде коштувати ${priceChili} кредитів`);
      break;
      case 'Австралія':
        let priceAustralia = 170 ;
      console.log(`Доставка в ${country} буде коштувати ${priceAustralia} кредитів`);
      break;
      case 'Індія':
        let priceIndia = 170 ;
      console.log(`Доставка в ${country} буде коштувати ${priceIndia} кредитів`);
      break;
      case 'Ямайка':
        let priceYamaika = 120 ;
      console.log(`Доставка в ${country} буде коштувати ${priceYamaika} кредитів`);
      break;
  default:
    console.log(`Извините, мы не доставляем товары в ${country}.`);
}