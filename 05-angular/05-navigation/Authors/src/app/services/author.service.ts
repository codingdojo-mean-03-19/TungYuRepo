import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../models/author.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private readonly http: HttpClient ) { }
  private readonly base = '/authors';
  private readonly baseURL = '/author';

  // GET ALL AUTHORS
  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.base);
  }
  // CREATE NEW AUTHOR
  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.baseURL, author);
  }
  // SHOW AUTHOR
  getAuthor(id: string) : Observable<Author> {
    return this.http.get<Author>(`${this.baseURL}/${id}`)
  }
  //EDIT AUTHOR
  editAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.baseURL}/${author._id}`, author);
  }
  //DELETE AUTHOR
  deleteAuthor(id: string): Observable<Author> {
    return this.http.delete<Author>(`${this.baseURL}/${id}`);
  }
}
