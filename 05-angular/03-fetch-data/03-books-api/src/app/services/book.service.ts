import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Book } from '../models';
import { BOOKS } from '../data';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';

  constructor(private readonly http:HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.base);
    // return of(BOOKS);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }

  removeBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${id}`);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.base}/${book.id}`, book);
  }
}
