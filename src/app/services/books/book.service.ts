import { Injectable } from '@angular/core';
import { booksArray } from 'src/app/data';
import { Ibook } from 'src/app/interfaces/ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Ibook[] = booksArray;

  constructor() { 
  }

  getAllBooks(): Ibook[] {
    return this.books;
  }
}
