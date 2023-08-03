(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalCheckbox: document.querySelector("#modal-form-checkbox"),
    modalForm: document.querySelector(".modal-form"),
    nameInput: document.querySelector("#user_name"),
    phoneInput: document.querySelector("#user_phone"),
    emailInput: document.querySelector("#user_email"),
    commentInput: document.querySelector("#user_comment"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.modalCheckbox.addEventListener('change', () => {
    refs.modalForm.querySelector('button[type="submit"]').disabled = !refs.modalCheckbox.checked;
  });

  refs.modalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let nameRegEx = /^[^\p{P}\p{S}\p{C}\p{N}]+$/u;
    let phoneRegEx = /^\d{10,14}$/;

    if (!nameRegEx.test(refs.nameInput.value)) {
      alert("Please check the name. It should contain only letters.");
      return false;
    }

    if (!phoneRegEx.test(refs.phoneInput.value)) {
      alert("Please check the phone number. It should be in international format without + and between 10 to 14 digits.");
      return false;
    }

    if (refs.commentInput.value.trim() === "") {
      alert("Please enter your message.");
      return false;
    }

    toggleModal();

    return true;
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");

    if(refs.modal.classList.contains("is-hidden")) {
        // Clear the form inputs
        refs.nameInput.value = "";
        refs.phoneInput.value = "";
        refs.emailInput.value = "";
        refs.commentInput.value = "";
        refs.modalCheckbox.checked = false;
        // Disable the submit button
        refs.modalForm.querySelector('button[type="submit"]').disabled = true;
    }
  }
})();
