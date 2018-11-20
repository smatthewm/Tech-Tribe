import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  data:any;
  loggedin:boolean;
  currentuser;

  constructor(public appService: AppService,private router:Router) { }


  ngOnInit() {
    this.AuthorsPage();
    this.checkLogin();
  }
  /* method to call get-api from app.service */
  loagout(){
    this.loggedin=false;
    this.currentuser=null;
    localStorage.setItem("loggedin",String(this.loggedin)) 
    localStorage.setItem("CurrentUser",null) 
    this.router.navigate(['/Home'])
  }
  AuthorsPage() {
    try {

    this.appService.getUsers()
        .subscribe(resp => {
          console.log(resp, "res");
          this.data = resp
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  checkLogin()
  {
    let storagelogin=localStorage.getItem("loggedin")
    let storagecurrentuser= localStorage.getItem("CurrentUser")
    this.loggedin=(storagelogin!=null)?Boolean( storagelogin):false;
    this.currentuser=(storagecurrentuser!='null')?JSON.parse( storagecurrentuser)[0]:{};
  }
}





// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// // export class AppComponent {
// //   title = 'AngularHome';
// // }
