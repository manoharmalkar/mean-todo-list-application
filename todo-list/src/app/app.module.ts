import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { AddnewComponent } from './component/addnew/addnew.component';


import { TodolistService } from './services/todolist.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodolistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
