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
      <p id="book-pages">${book.pages}</p>
      <p id="book-read">Status: ${book.read ? "Read" : "Not Read"}</p>
      <button onclick="toggleRead(${index})" id="book-read">Change Status</button>
      <button onclick="removeBook(${index})" id="book-remove">Remove</button>
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
});

function toggleRead(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks()
}