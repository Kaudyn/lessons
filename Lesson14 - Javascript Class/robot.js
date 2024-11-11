class Robot {
    constructor(name, age, MaxEnergy, MaxBullets) {
        this.name = name;
        this.age = age;
        this.MaxEnergy = 100;
        this.MaxBullets = 10;
        this.RobotOn = false;
    }

    TurnOn() {
        if (this.RobotOn == false) {
            this.RobotOn = true;
            console.log('Robot powered on');
        }
        else {
            console.log('Robot already powered on');
        }
    }

    TurnOff() {
        if (this.RobotOn == true) {
            this.RobotOn = false;
            console.log('Robot powered off');
        }
        else {
            console.log('Robot already powered off');
        }
    }

    Walk() {
        if (this.RobotOn == true) {
            console.log('walked');
        }
        else {
            console.log('Robot turned off, cannot walk')
        }
    }

    Shoot(){
        if (this.MaxBullets < 1){
            console.log('out of ammo, cannot shoot')
            return;
        }
        if (this.RobotOn == true){
            console.log('shot bullet')
            this.MaxBullets = this.MaxBullets - 1;
            console.log(this.MaxBullets + ' bullets left')
        }
        else{
            this.RobotOn = false;
            console.log('Engine off, Cannot shoot')
        }
    }


}
const robotA = new Robot("jimmy", 23, 500, 10);

robotA.TurnOn();
robotA.TurnOn();
robotA.Shoot();
robotA.Shoot();
robotA.Shoot();
robotA.Shoot();
robotA.Shoot();
robotA.Shoot();
robotA.Shoot();
robotA.Shoot();
robotA.Shoot();
robotA.Shoot();
robotA.TurnOff();