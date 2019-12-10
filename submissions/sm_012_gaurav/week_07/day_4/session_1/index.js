let carsArr = [];

class Car {
    constructor(carMake = "Invalid", model = "Invalid", topSpeed = 0) {
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
        this.avgSpeed = 0;
        this.dist = 0;
        this.trips = [];
    }

    trip(time = 1, speed = this.topSpeed/2) {
        this.trips.push([time, speed]);
        this.dist += speed*time;
        let sumTime = this.trips.reduce((a,b) => a+b[0], 0);
        this.avgSpeed = this.dist/sumTime;
    }

    presentStatus() {
        return `${this.carMake} ${this.model} ${this.topSpeed}km/hr ${this.avgSpeed}km/hr ${this.dist}km`;
    }
}

$('#createClass').click(function(e) {
    e.preventDefault();
    let carMake = $('#carMake').val().trim();
    let model = $('#model').val().trim();
    let topSpeed = Number($('#topSpeed').val().trim());
    if (carMake.length == 0) {
        carMake = undefined;
    }
    if (model.length == 0) {
        model = undefined;
    }
    if (topSpeed.length == 0) {
        topSpeed = undefined;
    }

    let car = new Car(carMake, model, topSpeed);
    carsArr.push(car);
    $(".form-group input").val('');
    let modelOption = document.createElement('option');
    modelOption.value = model;
    modelOption.textContent = model;
    $('#carSelect').append(modelOption);
});

$('#submitTrip').click(function(e) {
    e.preventDefault();
    let model = $('#carSelect').val();
    let car = carsArr.filter(a => a.model == model)[0];
    let time = $('#time').val().trim();
    let speed = $('#speed').val().trim();
    if (time.length == 0) {
        time = undefined;
    }
    if (speed.length == 0) {
        speed = undefined;
    }

    car.trip(Number(time), Number(speed));
    $($('form')[1].querySelectorAll('input')).val('');
});

$('#showStatus').click(function(e) {
    e.preventDefault();
    let model = $('#carSelect').val();
    let car = carsArr.filter(a => a.model == model)[0];
    $('#statusInfo').html(car.presentStatus());
});

$('#showAll').click(function(e) {
    let infoAll = '';
    carsArr.forEach(e=>infoAll+=e.presentStatus());
    $('#statusAll').html(infoAll);
});



