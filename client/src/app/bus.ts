export class Bus {
    bus1: {
        busNumber: string;
        startLocation: string;
        endLocation: string;
        stopaje:Location[];
        drivers:Driver[];
    };
}

export class Location {
    location: string ;    
}
export class Driver {
    drivername: string ;
    drivercontact: number;
}
