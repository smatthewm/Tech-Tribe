import { Component, OnInit } from '@angular/core';
import { Bus } from '../../bus';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  testproperty: string = "welcome to about page";
  // httpClient.get, to request to backend 
  datathatwillcomefromanapi: Bus[] = [
    {
      bus1:
        {
          busNumber: "bus001",
          startLocation: "location112",
          endLocation: "location142",
          stopaje:[
            {location:"location112"},
            {location:"location122"},
            {location:"location132"},
            {location:"location142"}
          ],
          drivers:[
            {drivercontact:2104279557,drivername:"Watson"},            
            {drivercontact:2104279578,drivername:"Heather"}
          ]
        }
    },
    {
      bus1:
        {
          busNumber: "bus002",
          startLocation: "location389",
          endLocation: "location377",
          stopaje:[
            {location:"location377"},
            {location:"location347"},
            {location:"location345"},
            {location:"location378"}
          ],
          drivers:[
            {drivercontact:2103458790,drivername:"Watson"},
            {drivercontact:2138769087,drivername:"Heather"}            
          ]
        }
    }
  ]
  ngOnInit() {
  }
  bookBus(_bus) {
    console.log(_bus);
  }
}
