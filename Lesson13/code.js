let cars = ['Tesla', 'BMW', 'Ford', 'Honda'];

printCars();

// add car
cars.push('Lambo');

printCars();

// remove car
cars.pop();

printCars();

var result = cars.find(x => x == 'Tesla');

if (result == undefined) {
    console.log('=================');
    console.log('Car not exists');    
}
else {
    console.log('=================');
    console.log('Car exists');
}

function printCars() {
    console.log('=================');
    for(i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }
}

let index = cars.findIndex(x => x == 'Tesla');

if (index == -1) {
    console.log('car does not exist');
}
else{
    console.log('I found the car and it is called', cars[index], 'it found in index', index);
}

let CEWTLA = cars.filter(x => x.endsWith('a'))

console.log(CEWTLA);
 