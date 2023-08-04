// Функція, яка викликається після завантаження сторінки
document.addEventListener("DOMContentLoaded", function() {
  // Отримання посилань на елементи, які будемо використовувати
  var openModalBtn = document.querySelector("[data-modal-open]");
  var closeModalBtn = document.querySelector("[data-modal-close]");
  var modal = document.querySelector("[data-modal]");

  // Додавання обробників подій для відкриття та закриття модального вікна
  openModalBtn.addEventListener("click", function() {
    toggleModal();
  });

  closeModalBtn.addEventListener("click", function() {
    toggleModal();
  });

  // Функція для перемикання модального вікна
  function toggleModal() {
    modal.classList.toggle("is-hidden");
  }
});
