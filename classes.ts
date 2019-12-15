class Car {

    private year: number = 1999;

    constructor(protected name:string) {
    }

    drive(): void{
        this.log('driveee');
    }

    protected log(message: string): void{
        console.log(message);
    }

    private vehicleCannotAccess(): void{
        console.log('private fnc');
    }

    public printName(): void{
        this.log(this.name);
    }
};

class Vehicle extends Car{

    constructor(name:string) {
        super(name);
    }

    drive(): void{
        this.log('drive..overriden');
    }    
};


const vehicle = new Vehicle('vehicle');
vehicle.printName();
vehicle.drive();
