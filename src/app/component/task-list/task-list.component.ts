import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { ServiceTaskService } from 'src/app/service-task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];


  constructor(
    private taskService: ServiceTaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks
      })
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(() => {
        this.tasks = this.tasks.filter((t) => t.id !== task.id)
      })
  }
  toggleReminder(task:Task){
    task.reminder= !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task:Task){
    this.taskService.addTask(task)
    .subscribe( tasks=>[
    this.tasks.push(task)
    ]

    )
  }

}
