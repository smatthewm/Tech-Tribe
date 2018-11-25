export class Bus {
    bus1: {
        busNumber: string;
        startLocation: string;
        endLocation: string;
        stopaje: Location[];
        drivers: Driver[];
    };
}

export class Location {
    location: string;
}
export class Driver {
    driverName: string;
    drivercontact: number;
 
}

// export class MockBus {
//     busId: number;
//     nusname: string;
// }
// export class MockDriver {
//     drivername: string;
//     driverId: number;
//     drivercontact: number;
//     // driveremailid: string;
// }
// export class MockRoot {
//     rootId: number;
//     rootName: string;
//     rootNode: MockLocation[];
// }
// export class MockLocation {
//     locationId: number;
//     locationName: string;
//     locationLat: number;
//     locationlong: number;
//     disToNextNode: number;
//     timeToReachNextNode: number;
//     nodeRank:number;
// }

// export class MockMappingOfBusDriverRoot
// {
//     busId:number;
//     driverId:number;
//     rootId:number;
//     startTime:Date;
//     currentLOcationOfbus:{curentLat:number,curentLong:number}
//     lastCrossedNode:number;
//     DelayAtLastLocation:number;
// }