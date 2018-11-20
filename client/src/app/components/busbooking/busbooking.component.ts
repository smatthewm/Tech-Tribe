import { Component, OnInit } from '@angular/core';
import { BusService } from './busbooking.service';
import { Bus
  // , MockBus, MockDriver, MockRoot, MockMappingOfBusDriverRoot 
} from '../../bus';

@Component({
  selector: 'app-busbooking',
  templateUrl: './busbooking.component.html',
  styleUrls: ['./busbooking.component.css']
})
export class BUSBookingComponent implements OnInit {

  private buses: Bus[] = [];

  constructor(busService: BusService) {
    busService.getBuses().subscribe(buses => {
      this.buses = buses;
    });
  };
  // mockbuses: MockBus[] = [
  //   { busId: 1, nusname: "bus1" },
  //   { busId: 2, nusname: "bus2" }
  // ]
  // mockdriver: MockDriver[] = [
  //   { driverId: 1, drivername: "prabhat", drivercontact: 9967282153 },
  //   { driverId: 2, drivername: "heather", drivercontact: 9967282153 },
  //   { driverId: 3, drivername: "sam", drivercontact: 9967282153 }

  // ]
  // mockRoot: MockRoot[] = [
  //   {
  //     rootId: 1, rootName: "Root1", rootNode: [
  //       { nodeRank: 1, locationId: 101, locationName: "loc1", locationLat: 28.002220, locationlong: 78.25665, disToNextNode: 1000, timeToReachNextNode: 5 },
  //       { nodeRank: 2, locationId: 103, locationName: "loc2", locationLat: 28.002222, locationlong: 78.25665, disToNextNode: 1000, timeToReachNextNode: 5 },
  //       { nodeRank: 3, locationId: 104, locationName: "loc3", locationLat: 28.002224, locationlong: 78.25665, disToNextNode: 1000, timeToReachNextNode: 5 },
  //       { nodeRank: 4, locationId: 105, locationName: "loc4", locationLat: 28.002226, locationlong: 78.25665, disToNextNode: 1000, timeToReachNextNode: 5 },
  //       { nodeRank: 5, locationId: 106, locationName: "loc5", locationLat: 28.002228, locationlong: 78.25665, disToNextNode: 1000, timeToReachNextNode: 5 }
  //     ]
  //   },
  //   {
  //     rootId: 2, rootName: "Root2", rootNode: [
  //       { nodeRank: 1, locationId: 107, locationName: "loc7", locationLat: 28.002220, locationlong: 78.25665, disToNextNode: 1000, timeToReachNextNode: 5 },
  //       { nodeRank: 2, locationId: 108, locationName: "loc8", locationLat: 28.002222, locationlong: 78.25665, disToNextNode: 1000, timeToReachNextNode: 5 },
  //       { nodeRank: 3, locationId: 104, locationName: "loc3", locationLat: 28.002224, locationlong: 78.25665, disToNextNode: 1000, timeToReachNextNode: 5 },
  //       { nodeRank: 4, locationId: 109, locationName: "loc9", locationLat: 28.002226, locationlong: 78.25665, disToNextNode: 1000, timeToReachNextNode: 5 },
  //       { nodeRank: 5, locationId: 106, locationName: "loc6", locationLat: 28.002228, locationlong: 78.25665, disToNextNode: 1000, timeToReachNextNode: 5 }
  //     ]
  //   }
  // ]
  // mockmapping: MockMappingOfBusDriverRoot[] = [
  //   { busId: 1, driverId: 1, rootId: 1, startTime: new Date(), currentLOcationOfbus: { curentLat: 28.002220, curentLong: 78.25665 }, lastCrossedNode: 1, DelayAtLastLocation: 0 },
  //   { busId: 2, driverId: 3, rootId: 1, startTime: new Date(), currentLOcationOfbus: { curentLat: 28.002220, curentLong: 78.25665 }, lastCrossedNode: 2, DelayAtLastLocation: 0 },
  //   { busId: 3, driverId: 2, rootId: 2, startTime: new Date(), currentLOcationOfbus: { curentLat: 28.002220, curentLong: 78.25665 }, lastCrossedNode: 3, DelayAtLastLocation: 0 }
  // ]
  testproperty: string = "welcome to busbooking page";
  //httpClient.get request to backend 
  // datathatwillcomefromanapi: Bus[] = [
  //   {
  //     bus1:
  //       {
  //         busNumber: "bus001",
  //         startLocation: "location112",
  //         endLocation: "location142",
  //         stopaje:[
  //           {location:"location112"},
  //           {location:"location122"},
  //           {location:"location132"},
  //           {location:"location142"}
  //         ],
  //         drivers:[
  //           {drivercontact:2104279557,drivername:"Watson"},            
  //           {drivercontact:2104279557,drivername:"Heather"}
  //         ]
  //       }
  //   },
  //   {
  //     bus1:
  //       {
  //         busNumber: "bus002",
  //         startLocation: "location336",
  //         endLocation: "location366",
  //         stopaje:[
  //           {location:"location336"},
  //           {location:"location346"},
  //           {location:"location356"},
  //           {location:"location366"}
  //         ],
  //         drivers:[
  //           {drivercontact:2104279552,drivername:"Watson"},
  //           {drivercontact:2104279558,drivername:"Heather"}            
  //         ]
  //       }
  //   }
  // ]
  ngOnInit() {
  }
  bookBus(_bus) {
    console.log(_bus);
  }
}
