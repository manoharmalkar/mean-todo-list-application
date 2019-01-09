import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(
    private http: HttpClient
  ) { }

  headers = new HttpHeaders();
  create(formData: Object) {
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    return this.http.post<any>('http://localhost:3000/createTask', formData, {headers: this.headers})
      .pipe(map( data => {
        return data;
      }));
  }
  getTasks() {
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    return this.http.post<any>('/getTask', {}, {headers: this.headers})
      .pipe(map( data => {
        return data;
      }));
  }
  getTaskById(id: String) {
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    return this.http.post<any>('/getTaskById', {id: id}, {headers: this.headers})
      .pipe(map( data => {
        return data;
      }));
  }
  deleteTask(id: String) {
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    return this.http.post<any>('/deleteTask', {id: id}, {headers: this.headers})
      .pipe(map( data => {
        return data;
      }));
  }
}
