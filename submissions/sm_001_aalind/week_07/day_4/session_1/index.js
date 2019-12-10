var allCars = [];

class Car {
    constructor(carMake="Invalid", model="Invalid", topSpeed=0) {
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = Number(topSpeed);
        this.avgSpeed = 0;
        this.dist = 0;
        this.trips = [];
    }
    trip(time=1, dist) {
        var speed = (dist !== undefined) ? dist/time : this.topSpeed/2;
        this.trips.push([time, speed]);
        
        var totalSpeed = this.trips.reduce(function(total, currentVal) {
            return total + currentVal[1];
        }, 0);

        this.avgSpeed = totalSpeed/this.trips.length;

        return `
            Trip duration: ${time}
            Trip Distance travelled: ${time * speed}
            Trip Average Speed: ${speed}
        `;
    }
}

function createCarObj(carMake, model, topSpeed) {

}

createCarBtn.addEventListener("click", function() {
    var carMake = $("#carMake").val();
    var model = $("#model").val();
    var topSpeed = $("#topSpeed").val();

    var newCar = new Car(carMake, model, topSpeed);
    
    allCars.push(newCar);
    // console.log(allCars)
});