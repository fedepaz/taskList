import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class ServiceTaskService {
  private apiUrl= 'http://localhost:5000/tasks';

  constructor(
    private http:HttpClient


  ) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);  
  }
  
  deleteTask(task:Task) :Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)

  }
}
