const dialog = document.getElementById("dialog");
const addBook = document.querySelector(".add-book-btn");
const closeForm = document.querySelector(".close-form-btn");
const form = document.querySelector("form");
const mainSection = document.querySelector(".main-section");

let myLibrary = [];
let bookCounter = 0;

class Book {
    constructor(id, title, author, pages, isRead) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}





form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#form-book-title");
    const author = document.querySelector("#form-book-author");
    const pages = document.querySelector("#form-book-pages");
    const isRead = document.querySelector("#read-status");
    let book = new Book(bookCounter,title.value, author.value, pages.value, isRead.checked ? 'yes' : 'no')
    bookCounter++;
    myLibrary.push(book);
    form.reset();
    new makeCards(myLibrary);
    console.log(myLibrary);
})

class makeCards {
    constructor(myLibrary) {
        mainSection.innerHTML = '';
        myLibrary.forEach(book => {
    
            mainSection.innerHTML += 
            `
            <div class="card-container" data-id="${book.id}">
                <button class="delete-btn">X</button>
                <h2 class="book-title">${book.title}</h2>
                <p class="book-author">${book.author}</p>
                <p class="book-pages">${book.pages}</p>
                <button class="${book.isRead == 'yes' ? 'read-btn' : 'not-read-btn'} toggle-btn">${book.isRead == 'yes' ? 'Read' : 'Not Read'}</button>
            </div>
            `
        });
    }
}




mainSection.addEventListener("click", (e) => {
    if (e.target.classList.contains('toggle-btn')) {
        const btn = e.target;
        if (btn.textContent == 'Read') {
            btn.textContent = 'Not Read';
            btn.classList.remove('read-btn');
            btn.classList.add('not-read-btn');
        } else {
            btn.textContent = 'Read';
            btn.classList.remove('not-read-btn');
            btn.classList.add('read-btn');
        }
    }
    if (e.target.classList.contains('delete-btn')) {
        const bookElement = e.target.parentElement;
        const bookId = parseInt(bookElement.getAttribute('data-id'));

        myLibrary = myLibrary.filter((book) => book.id !== bookId);

        bookElement.remove();
    }
})

addBook.addEventListener("click", () => dialog.showModal());
closeForm.addEventListener("click", () => dialog.close());