import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Task } from '../../models';

import { TaskService } from '../../services';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {

  tasks: Task[] = [];
  selectedTask: Task;
  clicked: boolean = false;
  sub: Subscription;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    console.log(this.taskService);

    this.sub = this.taskService.getTasks().subscribe(tasks => {
        console.log(tasks);

        this.tasks = tasks;
      });
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented");
  }

  onSelect(task: Task) {
    console.log('selecting task', task);
    // this.selectedTask = task;

    this.selectedTask = this.selectedTask === task ? null : task;
  }

  onCreate(task: Task) {
    console.log('creating task', task);
    this.taskService.createTask(task).subscribe(createdTask => {
      console.log(createdTask);

      this.tasks.push(createdTask);
    });
    // this.tasks.push(task);
  }

  onDelete(event: Event, task: Task) {
    event.stopPropagation();
    console.log(task.id);
    this.taskService.removeTask(task.id).subscribe(removedTask => {
      console.log('deleting task', removedTask);

      this.tasks = this.tasks.filter(task => task.id !== removedTask.id);
    });
  }

  onEdit(event: Event, task: Task) {
    event.stopPropagation();

    this.clicked = this.clicked === true ? false : true;

    this.taskService.updateTask(task).subscribe(updatedTask => {
      console.log('updated', updatedTask);
    })
  }
}
