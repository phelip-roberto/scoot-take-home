import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/toDoItem';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private baseUrl="/api/itemList"

  constructor(private http: HttpClient) {  }

  getToDoList() {
    return this.http.get<ToDoItem[]>(this.baseUrl);
  }

  addToDoItem(toDoItem: ToDoItem) {
    return this.http.post(this.baseUrl, toDoItem);
  }
}