// Bài Tập 3: Quản lý thư viện
// Tạo lớp Book với các thuộc tính title, author, ISBN.
// Tạo lớp Library có danh sách các cuốn sách (books) và các phương thức:
// - addBook(book: Book): Thêm sách.
// - removeBook(ISBN: string): Xóa sách theo ISBN.
// - findBook(title: string): Tìm sách theo tên.

class Book {
  public title: string;
  public author: string;
  public ISBN: string;

  constructor(title: string, author: string, ISBN: string) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}

class Library {
  private books: Book[] = [];

  showBooks() {
    return this.books;
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  removeBook(ISBN: string) {
    const index = this.books.findIndex((book: Book) => book.ISBN === ISBN);
    this.books.splice(index, 1);
  }

  findBook(title: string) {
    return this.books.find((book) => book.title === title);
  }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", "9780060935467");
const book2 = new Book("1984", "George Orwell", "9780451524935");
const book3 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "9780743273565"
);
const book4 = new Book("Pride and Prejudice", "Jane Austen", "9780141439518");
const book5 = new Book(
  "The Catcher in the Rye",
  "J.D. Salinger",
  "9780316769488"
);

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

console.log(library.showBooks());

library.removeBook("9780316769488"); // xoá book5
console.log(library.showBooks());

console.log(library.findBook("The Great Gatsby")); //tìm book3
