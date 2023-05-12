let books = [
    { id: 1, title: 'Agni Siragugal', author: 'APJ', published: 2003 },
    { id: 2, title: 'A Brief History of Time', author: 'Stephen Hawking', published: 1998 },
    { id: 3, title:'திருக்குறள்', author: 'திருவள்ளுவர்', published: 1400}
  ];
  
  export function fetchBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(books);
      }, 500);
    });
  }
  
  export function fetchBookById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const book = books.find((book) => book.id === id);
        resolve(book);
      }, 500);
    });
  }
  
  export function addBook(book) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newBook = { id: books.length + 1, ...book };
        books.push(newBook);
        resolve(newBook);
      }, 500);
    });
  }
  
  export function updateBook(id, updatedBook) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = books.findIndex((book) => book.id === id);
        if (index !== -1) {
          books[index] = { id, ...updatedBook };
          resolve(books[index]);
        } else {
          resolve(null);
        }
      }, 500);
    });
  }
  
  export function deleteBook(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = books.findIndex((book) => book.id === id);
        if (index !== -1) {
          const deletedBook = books[index];
          books.splice(index, 1);
          resolve(deletedBook);
        } else {
          resolve(null);
        }
      }, 500);
    });
  }
  