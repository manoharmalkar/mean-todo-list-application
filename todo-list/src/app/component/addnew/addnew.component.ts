import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodolistService } from '../../services/todolist.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  formData: any = {};
  id: String;
  constructor(
    private todolistService: TodolistService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.todolistService.getTaskById(params.id).
        //subscribe(data => this.formData = data.data);
        subscribe(data => {
          this.formData = data.data;
        });
      }
    });
  }

  createNewTask() {
    console.log(this.formData);
    this.todolistService.create(this.formData)
      .subscribe(
        data => {
          alert("new task created");
        },
        error => {
          alert("error in creating new task");
        }
      );
  }

}
