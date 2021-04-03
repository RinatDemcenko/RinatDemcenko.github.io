// 1
console.log(Number.parseInt('5px'));
console.log(Number.parseInt('12djd334'));
console.log(Number.parseInt('12.45asdwe12')); 
console.log(Number.parseInt('qwqweeewq')); 
// 2
console.log(Number.parseFloat('5px')); 
console.log(Number.parseFloat('12djd334')); 
console.log(Number.parseFloat('12.45asdwe12'));
console.log(Number.parseFloat('qwqweeewq'));
// 3
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));
// 4
let random = (Math.random(3 - 19));
console.log(random);
// 5
result = 5+5+"5";
console.log(result);
console.log(typeof result);
// 6
let email = "rinatdemcenko@gmail.com" ;
console.log(email.indexOf('@'));
// 7
let first = "my";
let two = "name";
let three = "is";
const fullName = `${first} ${two} ${three} Victor .`;
console.log(fullName);
// 8
let userName = "Александра";
let payment = "300" ;
alert(`Дякуємо,${userName}, До сплати  ${payment} гривень .`);