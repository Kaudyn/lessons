class Car {
    constructor(regNumber, name, year, maxmileage) {
        this.regNumber = regNumber;
        this.name = name;
        this.year = year;
        this.engineStarted = false;
        this.mileage = 0;
        this.maxmileage = maxmileage;
    }

    getAge() {
        const today = new Date();
        return today.getFullYear() - this.year;
    }

    startEngine() {
        if (this.engineStarted == false) {
            this.engineStarted = true;
            console.log(this.name + ' engine started');
        }
        else {
            console.log(this.name + ' Engine already started');
        }
    }

    stopEngine() {
        if (this.engineStarted == false) {            
            console.log(this.name + ' Engine already stopped');
        }
        else {
            this.engineStarted = false;
            console.log(This.name + 'have stopped the Engine');
        }
    }

    drive(drove) {        
        if (drove + this.mileage > this.maxmileage) {
            console.log(this.name +'needs more fuel');
            this.engineStarted = false;
            return;
        }
if (this.enginestarted == true) {
    this.mileage = this.mileage + drove;
    console.log( this.name + 'drove', this.mileage, 'mile')
}
else{
    console.log('cannot drive the car, the engine has stopped')
}

    {
    
        }

        if (this.maxmileage > 100) {
            this.engineStarted = false;
            console.log(this.name + ' needs for fuel');
        }
    }
}

const Ford = new Car("123", "Ford", 1991, 1000);

const BMW = new Car("456", "BMW", 2006, 2000);

Ford.startEngine();
BMW.startEngine();
BMW.drive(23);
Ford.drive(100);
Ford.drive(100);
Ford.drive(100);