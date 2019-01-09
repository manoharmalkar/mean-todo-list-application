import { Component, OnInit } from '@angular/core';

import { TodolistService } from '../../services/todolist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private todoList: TodolistService
  ) { }
  tasks: any = [];
  ngOnInit() {
    this.getTasksList();
  }

  removeTask(id) {
    this.todoList.deleteTask(id).
    subscribe(
      data => {
        alert('task deleted successfully');
        this.getTasksList();
      },
      error => alert('error in deleting the task')
      );
  }

  getTasksList() {
    this.todoList.getTasks()
    .subscribe(data => {
      this.tasks = data.data;
    },
    error => {
      console.log('not data found');
    });
  }

}
