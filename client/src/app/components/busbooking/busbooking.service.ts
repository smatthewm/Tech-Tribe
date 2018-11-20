import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from '../../bus';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BusService {

  // constructor() { }
  baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }
  /* Uses http.get() to load data from a single API endpoint */
  getBuses() {
    return this.http.get<Bus[]>(this.baseUrl + '/users');
  }
}