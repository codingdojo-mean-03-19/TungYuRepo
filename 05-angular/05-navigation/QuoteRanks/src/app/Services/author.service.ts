import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor( private readonly http: HttpClient ) { }
  private readonly base = '/api/authors';

  getAuthors(): Observable<Author[]>{
    return this.http.get<Author[]>(`${this.base}`);
  }
  createAuthor(form: Author): Observable<Author>{
    return this.http.post<Author>(`${this.base}`, form);
  }
  getAuthor(id: String): Observable<Author>{
    return this.http.get<Author>(`${this.base}/${id}`);
  }
  updateAuthor(author: Author): Observable<Author>{
    return this.http.put<Author>(`${this.base}/${author._id}`, author);
  }
  deleteAuthor(id: String): Observable<Author>{
    return this.http.delete<Author>(`${this.base}/${id}`);
  }
}
