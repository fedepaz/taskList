import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ServiceTaskService } from 'src/app/service-task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:Task[]= [];
  fatimes=faTimes;
  

  constructor(
    private taskService:ServiceTaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks()
    .subscribe(tasks=>{
      this.tasks= tasks
    })
  }

}
