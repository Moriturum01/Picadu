//Переменная в ней лежит кнопка меню
let menuToggle = document.querySelector("#menu-toggle");
//В этой переменной лежит меню
let menu = document.querySelector(".sidebar");
//Отслеживаем клик по кнопке и пуск функции
menuToggle.addEventListener("click", function (event) {
  //Отмена стандартного поведения браузера
  event.preventDefault();
  //Присваивание класса когда кликнули по кнопке
  menu.classList.toggle("visible");
});
