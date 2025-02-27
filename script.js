const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

let newBookBtn = document.getElementById("new-book-btn");
newBookBtn.addEventListener("click", function() {
    let newBookForm = document.getElementById("book-form");
    newBookForm.style.display = "flex";
})

function displayBooks() {
  const bookList = document.getElementById("book-list")
  bookList.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `
      <p id="book-title">${book.title}</p>
      <p id="book-author">by ${book.author}</p>
      <p id="book-pages">Pages: ${book.pages}</p>
      <p id="book-read">Status: ${book.read ? "Read" : "Not Read"}</p>
      <div id="book-bottom-buttons">
        <button onclick="toggleRead(${index})" id="change-status-button">Change Status</button>

        <button onclick="removeBook(${index})" id="book-remove"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg></button>
      </div>
    `;

    bookList.appendChild(bookDiv)
  })
}

document.getElementById("book-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById('read').checked;

  addBookToLibrary(title, author, pages, read);

  document.getElementById("book-form").reset();
  modal.style.display = "none";
});

function toggleRead(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks()
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const newBookBtn = document.getElementById("new-book-btn");
  const closeBtn = document.querySelector(".close");
  const cancelBtn = document.getElementById("cancel");

  // Show modal
  newBookBtn.addEventListener("click", () => {
      modal.style.display = "flex";
  });

  // Close modal when clicking cancel button
  cancelBtn.addEventListener("click", () => {
      modal.style.display = "none";
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});

modal.style.display = "none";