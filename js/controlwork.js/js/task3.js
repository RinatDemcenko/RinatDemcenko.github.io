// 3
let enter = prompt("введите пароль администратора")
const ADMIN_PASSWORD = 'jqueryismyjam';


if (enter == ADMIN_PASSWORD) {
    alert("Пароль правильный");
}

else if (enter === null) {
    alert("пользователь отменил отправку"); 
    }
    else{
        alert("Пароль неправильный");
  }