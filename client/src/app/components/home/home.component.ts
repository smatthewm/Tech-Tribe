import { Component, OnInit, TRANSLATIONS_FORMAT } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  users: any = [];
  responseData: any;
  baseUrl = "http://localhost:3000";
  data: any = [];
  hellotext: any;

  loginForm: FormGroup;
  registerForm: FormGroup;
  displaylogin: boolean;
  displayreg: boolean;
  loginsubmitted: boolean;
  submitted: boolean;
  loggedin: boolean;
  currentuser;

  author = {
    FirstName: '',
    ID: '',
    IDBook: '',
    LastName: ''
  }

  constructor(public homeService: HomeService, private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.hellotext = "Hello world";
    this.AuthorsPage();
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      PassWord: ['', Validators.required],
    });
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      Phonenumber: ['', Validators.required, Validators.maxLength(10)],
      studentFirstName: ['', Validators.required],
      studentLastName: ['', Validators.required],
      studentAge: ['', Validators.required],
      studentGrade: ['', [Validators.required, Validators.email]],
      studentSchoolName: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.loggedin = false;
    this.displaylogin = false;
    this.displayreg = false;
    let storageusers=localStorage.getItem("users")
    let storagelogin=localStorage.getItem("loggedin")
    let storagecurrentuser= localStorage.getItem("CurrentUser")
    this.users=(storageusers!=null)?JSON.parse( storageusers):[];
    this.loggedin=(storagelogin!=null)?(storagelogin=='true'?true:false):false;
    this.currentuser=(storagecurrentuser!='null')?JSON.parse( storagecurrentuser)[0]:{};
  }

  /* method to call get-api from app.service */
  AuthorsPage() {
    try {

      this.homeService.getUsers()
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
  public displayloginreg(isLogindisplay) {
    if (isLogindisplay)
      this.displaylogin = true;
    else
      this.displayreg = true;
  }
  get loginformload() { return this.loginForm.controls; }
  get f() { return this.registerForm.controls; }

  onLogin() {
    this.loginsubmitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  else
  {
    let currentuser=this.users.filter(x=>x.password==this.loginForm.get("PassWord").value && x.userName==this.loginForm.get("UserName").value);
   if( currentuser.length>0)
   {
    alert('Login SUCCESS!! :-)')   
    this.loggedin=true; 
    localStorage.setItem("loggedin",String(this.loggedin)) 
    localStorage.setItem("CurrentUser",JSON.stringify(currentuser)) 
    
    this.router.navigate(['/BUS'])
   }
   else{
    alert('no such user exist ! :-)')          
   }
  }
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else {
      this.users.push(this.registerForm.value);
      alert('you have registred SUCCESS!! :-)');
      this.displayreg=false;
      localStorage.setItem("users",JSON.stringify(this.users));
    }
    
  }
  // ngOnInit() {
  //   this.callbackendservice()
  // }
  // callbackendservice(){
  //   // this.http.get(`https://api.github.com/search/users?q=${this.input1.value}`)
  //   // .map(response => response.json().items) // <------
  //   // .subscribe(
  //   //   data => this.users = data,
  //   //   error => console.log(error)
  //   // );
  //   this.httpsrc.get(this.baseUrl+"/users")
  //   // .map(response => response.json().items)
  //   .subscribe(resp => {
  //     console.log(resp, "res");
  //     this.responseData = resp;    })}
}
