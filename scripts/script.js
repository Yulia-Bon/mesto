let popup = document.querySelector(".popup"); // Фон попап окна
let popup__container = document.querySelector(".popup__container"); // Само окно
let openPopupButtons = document.querySelectorAll(".profile__edit"); // Кнопки для показа окна
let closePopupButton = document.querySelector(".popup__close"); // Кнопка для скрытия окна

openPopupButtons.forEach(foreachFunction);

closePopupButton.addEventListener("click", () => {
  // Вешаем обработчик на крестик
  popup.classList.remove("active"); // Убираем активный класс с фона
  popup__container.classList.remove("active"); // И с окна
});

function foreachFunction(button) {
  button.addEventListener("click", openPopupEventListener);
}

function openPopupEventListener(e) {
  //e.preventDefault(); // Предотвращаем дефолтное поведение браузера
  popup.classList.add("active"); // Добавляем класс 'active' для фона
  popup__container.classList.add("active"); // И для самого окна
} 
