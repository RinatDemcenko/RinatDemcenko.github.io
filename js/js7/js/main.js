// // 1
// const hello1 = function(a) {
//     return a;
// };

// const test = hello1('Привіт JavaScript');
// console.log(test);

// //  2
// const hello2 = function(a, b) {
//   return a + b;
// };
// console.log(hello2('Привіт, ', 'Василь'));

// //  3
// const mul = function(n, m) {
//   console.log(n+m)
//   console.log(n-m)
//   console.log(n*m)
// };

// mul(2, 2);

// const mulresult = mul(4,6);
// console.log(mulresult);
// // 4
// const myNewArrowFunction = (...args) => {
//   console.log(args);
// };

// myNewArrowFunction(1, 2, 3); 
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// // 5

// const myAverageScore = function (...args) {
// let gradessumm = 0;
// for (const arges of args) {
//   gradessumm += arges;
// }
// gradessumm = gradessumm/args.length;
// if (gradessumm >= 91 && gradessumm <= 100) {
//     console.log("Воу Воу воу, да ты отличник(A)");
// } else if (gradessumm >= 81 && gradessumm <= 90) {
//     console.log("Как всегда хорошо(B)");
// } else if (gradessumm >= 71 && gradessumm <= 80) {
//     console.log("Ну, бывает и хуже(C)");
// } else if (gradessumm <= 70) {
//     console.log("Вы хоть что то учили?Двойку в журнал!(D)");
// }

// }

// myAverageScore(100, 75, 81, 96);
// myAverageScore(45, 63, 85, 70);
// myAverageScore(77, 82, 60, 58);
// myAverageScore(93, 99, 93, 96);