// Bài Tập 3: Quản lý thư viện
// Tạo lớp Book với các thuộc tính title, author, ISBN.
// Tạo lớp Library có danh sách các cuốn sách (books) và các phương thức:
// - addBook(book: Book): Thêm sách.
// - removeBook(ISBN: string): Xóa sách theo ISBN.
// - findBook(title: string): Tìm sách theo tên.
var Book = /** @class */ (function () {
    function Book(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.showBook = function () {
        return this.books;
    };
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (ISBN) {
        // const index = this.books.findIndex((book: Book) => book.ISBN === ISBN);
        // this.books.splice(index, 1);
    };
    Library.prototype.findBook = function (title) {
        this.books = this.books.filter(function (book) { return book.title === title; });
    };
    return Library;
}());
var book1 = new Book("To Kill a Mockingbird", "Harper Lee", "9780060935467");
var book2 = new Book("1984", "George Orwell", "9780451524935");
var book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
var book4 = new Book("Pride and Prejudice", "Jane Austen", "9780141439518");
var book5 = new Book("The Catcher in the Rye", "J.D. Salinger", "9780316769488");
var library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
console.log(library.showBook());
