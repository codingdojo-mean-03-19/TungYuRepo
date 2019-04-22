import { Component, OnInit } from '@angular/core';
import { Task } from '../../models';
import { TASK } from '../../data';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = TASK;
  selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }

  onSelect(task: Task) {
    console.log('selecting task', task);
    // this.selectedTask = task;

    this.selectedTask = this.selectedTask === task ? null : task;
  }

  onCreate(task: Task) {
    console.log('creating task', task);
    this.tasks.push(task);
  }
}
