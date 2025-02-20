const dialog = document.getElementById("dialog");
const addBook = document.querySelector(".add-book-btn");
const closeForm = document.querySelector(".close-form-btn");

addBook.addEventListener("click", () => dialog.showModal());
closeForm.addEventListener("click", () => dialog.close());