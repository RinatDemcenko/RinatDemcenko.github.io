

import users from "/js/users.js"
// 1
const getUserNames = users => {
 return users.map(user => user.name);
};

console.log(getUserNames(users));
console.log("--------------------------------------------------------------------------------------------------------------------------2--------------------------------------------------------------------------------------------------------------------------")
// 2
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));
console.log("--------------------------------------------------------------------------------------------------------------------------3--------------------------------------------------------------------------------------------------------------------------")
// 3
const getUsersWithGender  = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender (users, 'male'));
console.log("--------------------------------------------------------------------------------------------------------------------------4--------------------------------------------------------------------------------------------------------------------------")
// 4
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};


console.log(getInactiveUsers(users));
console.log("--------------------------------------------------------------------------------------------------------------------------5--------------------------------------------------------------------------------------------------------------------------")
// 5
const getUserWithEmail  = (users, email) => {
  return users.find(user => user.email=== email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
console.log("--------------------------------------------------------------------------------------------------------------------------6--------------------------------------------------------------------------------------------------------------------------")
// 6

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
console.log("--------------------------------------------------------------------------------------------------------------------------7--------------------------------------------------------------------------------------------------------------------------")
// 7
const calculateTotalBalance = users => {
  return users.reduce((sum, {balance}) => sum + balance, 0)
};

console.log(calculateTotalBalance(users));
console.log("--------------------------------------------------------------------------------------------------------------------------8--------------------------------------------------------------------------------------------------------------------------")
// 8
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName));
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
console.log("--------------------------------------------------------------------------------------------------------------------------9--------------------------------------------------------------------------------------------------------------------------")
// 9
const getNamesSortedByFriendsCount = users => {
  return users.sort((a, b) => a.friends.length > b.friends.length ? 1 : -1);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// Тут результат немного другой, чем должен был быть, но он правильный, так как у большинства объектов количество друзей одинаково
console.log("--------------------------------------------------------------------------------------------------------------------------10--------------------------------------------------------------------------------------------------------------------------")
// 10
const getSortedUniqueSkills = users => {
  // пытался сделать сразу сортировку уникальных значений, сперва не вышло, сделал другим способом, но строку 78 решил не менять
  let SkillsArray = users.reduce((unique, {skills}) => unique.includes(...skills) ? unique : [...unique, ...skills], []) 
let SkillsArrayunique = SkillsArray.filter(function(item, pos) {
  return SkillsArray.indexOf(item) == pos;
})
return SkillsArrayunique.sort()
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]














