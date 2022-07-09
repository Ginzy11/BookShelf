const BOOKS_KEY = "BOOKSHELF_APPS";

let books = [];

function isStorageSupported() {
  if (typeof Storage === "undefined") {
    alert("Browser anda tidak mendukung web storage!");
    return false;
  } else {
    return true;
  }
}

function updateData() {
  if (isStorageSupported()) {
    localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
  }
}

function fetchData() {
  let data = JSON.parse(localStorage.getItem(BOOKS_KEY));

  if (data !== null) {
    books = data;
  }

  document.dispatchEvent(new Event("onjsonfetched"));
}

function composeBookObject(id, title, author, year, isComplete) {
  return {
    id,
    title,
    author,
    year,
    isComplete,
  };
}

function renderFromData() {
  for (book of books) {
    const newBook = createBook(book.id, book.title, book.author, book.year, book.isComplete);

    if (book.isComplete) {
      document.getElementById(COMPLETE_BOOK).append(newBook);
    } else {
      document.getElementById(INCOMPLETE_BOOK).append(newBook);
    }
  }
}

function deleteBookFromData(idBook) {
  for (let arrayPosition = 0; arrayPosition < books.length; arrayPosition++) {
    if (books[arrayPosition].id == idBook) {
      books.splice(arrayPosition, 1);
      break;
    }
  }
}
