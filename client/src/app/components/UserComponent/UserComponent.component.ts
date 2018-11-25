import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-User',
  templateUrl: './UserComponent.component.html',
  styleUrls: ['./UserComponent.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http:HttpClient,private appservice:AppService) { }

  ngOnInit() {
    this.showDetials()
  }
  data:any;
  private showDetials()
  {

    this.appservice.getUsers()
        .subscribe(resp => {
          console.log(resp, "res");
          this.data = resp
        },
          error => {
            console.log(error, "error");
          })
   
  }
}
