import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private httpsrc:HttpClient) { }

  ngOnInit() {
    this.callbackendservice()
  }
  callbackendservice(){
    this.httpsrc.get("http://localhost:3000/users", {responseType: 'text' as 'json'})
    .subscribe(data => console.log(data));
  }
}

///   this.configService.getConfig()
//.subscribe(
  //(data: Config) => this.config = { ...data }, // success path
  //error => this.error = error // error path
//);

