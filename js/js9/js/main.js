<<<<<<< HEAD
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };
  
//   user.premium = false;
//   user.mood = "happy"
//   user.hobby = 'skydiving'
  
//   const keys = Object.keys(user);
// console.log(keys)
//   for (const key of keys) {
//     console.log(`${key}:${user[key]}`);
//   }

//   // 2

//   const countProps = function (obj) {
//    return Object.entries(obj).length
//   };

//   console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// // 3
// const findBestEmployee = function (employees) {
//   let Names = Object.keys(employees),
//   counts = Object.values(employees),
//   bestCount = Math.max(...counts);
//   for(let i=0; i<counts.length; i++) {
//       if(counts[i] == bestCount){
//           return(Names[i]);
//       } 
//       else{}
//   }
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// // 4

// const countTotalSalary = function (employees) {
//   let salaries = Object.values(employees)
//   let totalsalaries = 0;
// for(salary of salaries){
//   totalsalaries += salary
// }
//   return totalsalaries;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400



























// Не задание

let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Поставить видео на паузу";
  } else {
    video.pause();
    btn.innerHTML = "Поставить мне доп балл)";
  }
=======
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };
  
//   user.premium = false;
//   user.mood = "happy"
//   user.hobby = 'skydiving'
  
//   const keys = Object.keys(user);
// console.log(keys)
//   for (const key of keys) {
//     console.log(`${key}:${user[key]}`);
//   }

//   // 2

//   const countProps = function (obj) {
//    return Object.entries(obj).length
//   };

//   console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// // 3
// const findBestEmployee = function (employees) {
//   let Names = Object.keys(employees),
//   counts = Object.values(employees),
//   bestCount = Math.max(...counts);
//   for(let i=0; i<counts.length; i++) {
//       if(counts[i] == bestCount){
//           return(Names[i]);
//       } 
//       else{}
//   }
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// // 4

// const countTotalSalary = function (employees) {
//   let salaries = Object.values(employees)
//   let totalsalaries = 0;
// for(salary of salaries){
//   totalsalaries += salary
// }
//   return totalsalaries;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400



























// Не задание

let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Поставить видео на паузу";
  } else {
    video.pause();
    btn.innerHTML = "Поставить мне доп балл)";
  }
>>>>>>> a2e94f7731c879e7ea72531fa316d5b657e86971
}