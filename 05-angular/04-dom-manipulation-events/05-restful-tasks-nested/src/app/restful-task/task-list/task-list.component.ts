import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../../models/tasks';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  selectedTask: Task;
  showAll: Task
  sub: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    console.log('ng on init');

    this.sub = this.taskService.getTasks().subscribe(tasks => {
      console.log(tasks);

      this.tasks = tasks;
    });
  }
  onAll(task: Task) {
    console.log('show all tasks', task);

    this.showAll = this.showAll === task ? null : task;
  }

  onSelect(task: Task) {
    console.log('selecting task', task);

    this.selectedTask = this.selectedTask === task ? null : task;
  }

}
