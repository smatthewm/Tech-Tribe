import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AppService {
  baseUrl = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  /* Uses http.get() to load data from a single API endpoint */
  getUsers() {
    return this.http.get(this.baseUrl + '/users');
  }
}
