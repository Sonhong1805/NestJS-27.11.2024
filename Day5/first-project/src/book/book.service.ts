import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  private books: Book[] = [];

  getBooks(): Book[] {
    return this.books;
  }

  createBook(body: CreateBookDto) {
    const newBook: Book = {
      id: Date.now(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...body,
    };
    this.books.push(newBook);
    return newBook;
  }

  detailBook(id: string) {
    const currentBook = this.books.find((book) => book.id === +id);
    if (currentBook) {
      return currentBook;
    } else {
      return 'Không tồn tại book';
    }
  }

  updateBook(id: string, body: UpdateBookDto) {
    const currentBook = this.books.find((book) => book.id === +id);
    if (currentBook) {
      currentBook.updatedAt = new Date();
      Object.assign(currentBook, body);
      return 'Đã cập nhật book có id: ' + id;
    } else {
      return 'Không tồn tại book';
    }
  }

  deleteBook(id: string) {
    const index = this.books.findIndex((book) => book.id === +id);
    if (index !== -1) {
      this.books.splice(index, 1);
      return 'Đã xoá book có id: ' + id;
    } else {
      return 'Không tồn tại book';
    }
  }
}
