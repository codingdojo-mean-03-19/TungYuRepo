import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Task } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly base ='/tasks'

  constructor(private readonly http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.base);
  }
}
