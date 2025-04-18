const book1 = {
  title: 'Harry potter and the goblet of Fire',
  author: 'JK Rowling',
  ISBN: 9788893819930,
  isborrowed: false,
  borrow() {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      console.log(`You borrowed "${this.title}".`);
    } else {
      console.log(`"${this.title}" is already borrowed.`);
    }
  },
  returnBook() {
    if (this.isBorrowed) {
      this.isBorrowed = false;
      console.log(`You returned "${this.title}".`);
    } else {
      console.log(`"${this.title}" wasn't borrowed.`);
    }
  }
};
const book2 = {
  title: 'Harry potter and the prisoner of azkaban',
  author: 'JK Rowling',
  ISBN: 9788893819931,
  isborrowed: false,
  borrow() {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      console.log(`You borrowed "${this.title}".`);
    } else {
      console.log(`"${this.title}" is already borrowed.`);
    }
  },
  returnBook() {
    if (this.isBorrowed) {
      this.isBorrowed = false;
      console.log(`You returned "${this.title}".`);
    } else {
      console.log(`"${this.title}" wasn't borrowed.`);
    }
  }
};
const Library = {
  books: [],
  addBook(book) {
    this.books.push(book);
    console.log(`Book "${book.title}" added to the library.`);
  },
  findBookByISBN(isbn) {
    return this.books.find(book => book.ISBN === isbn);
  },
  listAvailableBooks() {
    return this.books.filter(book => !book.isBorrowed);
  },
  listBorrowedBooks() {
    return this.books.filter(book => book.isBorrowed);
  }
}
Library.addBook(book1);
Library.addBook(book2);
book1.borrow();
console.log("Available:", Library.listAvailableBooks().map(b => b.title));
console.log("Borrowed:", Library.listBorrowedBooks().map(b => b.title));   
book1.returnBook();
console.log("Available:", Library.listAvailableBooks().map(b => b.title)); 
