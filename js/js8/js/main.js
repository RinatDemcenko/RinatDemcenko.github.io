//  // 1
// const user = {
     
//     }
//     user.showUserNames = function () {
//         console.log(user["userName"])
//       },
//     user.updateAge = function () {
//         console.log(user["age"]+1);
//        }
//     user.age=14
//     user.userName="Rinat"
//     user.showUserNames()
//     user.updateAge()


//   // 2
//   const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//     }

//     const values = Object.values(salaries);

//   let sum = 0;

//   for (const value of values) {
//     sum += value;
//   }

//   console.log(sum); 

//   // 3

// const calculator = {
// read(a, b) {
//     calculator.a = a;
//     calculator.b = b;
// },
// sum() {
//     console.log(calculator.a + calculator.b);
// },
// mult() {
//     console.log(calculator.a * calculator.b);
// }
// }
// // проверка
// calculator.read(6, 5)
// calculator.sum()
// calculator.mult()

//   // 4
//   const cafe= {
//     name: "Republic",
//     width:200,
//     height: 300,
//     personal:5,
//     hr: true 
//   }

//   for (const [key, value] of Object.entries(cafe)) {
//     console.log(`${key}: ${value}`);
//   }
  
//   console.log(cafe.width * cafe.height);