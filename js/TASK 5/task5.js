// Не знаю, как у вас, но нам виктор говорил комментировать весь код перед сдачей

// // 1
// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
//     this.getInfo = function(){
//       console.log(this.login, this.email)
//     }
//   };

// console.log(Account.prototype.getInfo);

// const mango = new Account( 'Mangozedog','mango@dog.woof',);

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account('Poly','poly@mail.com',);

// poly.getInfo();

// // 2

// class User  {
//   constructor(name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
// }
// getInfo() {
//   console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
// }

// }

// const mango = new User('Mango',2,20);

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User('Poly',3,17);

// poly.getInfo(); // User Poly is 3 years old and has 17 followers
// // Работает на 100%
// // 3

// class Storage{
//   constructor(items) {
//     this.items = items;
// }
// getItems(){
// return this.items
// }
// addItem(item){
//   this.items.push(item);
// }
// removeItem(item){
//   const index = this.items.indexOf(item);
//   this.items.splice(index,1)
// }
// }

// const storage = new Storage(["Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор"]);

// console.log(storage)

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem('Дроїд');
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
// // Работает на 100%
// // 4

//  class StringBuilder{
//   constructor(_value) {
//     this._value = _value
//   }
//   get value() {
//     return this._value;
//   }
//   append(str){
//     this._value = this._value + str ;
//   }
//   prepend(str){
//     this._value = str + this._value ;
//   }
//   pad(str){
//     this._value = str + this._value + str;
//   }
//  }

//  const builder = new StringBuilder('.');

//  builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
// // Работает на 100%
// // 5

// class Car {

// static getSpecs(car){
//  for (const key in car) {
//     console.log(key+":", car[key]);
//   }
// }
 
//   constructor(_price, maxSpeed) {
//     this.speed = 0
//     this.price = _price
//     this.maxSpeed = maxSpeed
//     this.isOn = false
//     this.distance = 0
//   }
//   get price() {
//     return this._price;
//   }

//   set price(value) {
//     this._price = value;
//   }
//   turnOn() {
//     this.isOn = true
//     this.speed = this.speed
//   }
//   turnOff() {
//     this.isOn = false
//     this.speed = 0
//   }
//   accelerate(value) {
//     if(value+this.speed <= this.maxSpeed && this.isOn === true){
//       this.speed = this.speed + value
//     }
//     else{

//     }
//   }

//   decelerate(value) {
//     if(this.speed-value > 0  && this.isOn === true){
//       this.speed = this.speed - value
//     }
//     else{

//     }
//   }

//   /*
//    * Додає в поле distance кілометраж (hours * speed),
//    * але тільки в тому випадку, якщо машина заведена!
//    */
//   drive(hours) {
//     if(this.isOn = true){
//       this.distance = this.distance + hours * this.speed
//     }
//   }
// }

// const mustang = new Car(2000,200);
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000