class Car {
    constructor(carMake = "invalid", model = 0, topSpeed = 0) {
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
        this.dist = 0;
        this.avgSpeed = Math.floor(topSpeed / 2);
        this.tripDetails = [];
    }
    trip(time = 1, dist) {
        this.avgSpeed = Math.floor((this.avgSpeed + dist / time) / 2);
        this.dist += dist;
        this.tripDetails.push({
            time: time,
            dist: dist,
            tripSpeed: dist / time
        });
        console.log(this.tripDetails);
        return this.tripDetails;
    }
    presentStatus() {
        console.log(this.carMake, this.avgSpeed, this.dist);
        return [this.carMake, this.avgSpeed + "Km/hr", this.dist + "Km"];
    }
}
const arrCars = [];
function createCar() {
    console.log("createCar");
    event.preventDefault();
    const car = new Car(
        $("#make").val(),
        Number($("#model").val()),
        Number($("#topSpeed").val())
    );
    arrCars.push(car);
    $("#sel-car").append(
        `<option value="${$("#make").val()}">${$("#make").val()}</option>`
    );
    $("#show-car").append(
        `<option value="${$("#make").val()}">${$("#make").val()}</option>`
    );
    console.log(arrCars);
}

function addTrip() {
    event.preventDefault();
    var Elemake = $("#sel-car").val();

    arrCars.forEach(car => {
        console.log(Elemake);
        console.log(car);
        if (car.carMake == Elemake) {
            car.trip(Number($("#time").val()), Number($("#distance").val()));
        }
    });
}

function getStatus() {
    event.preventDefault();
    var carMake = $("#show-car").val();
    arrCars.forEach(car => {
        console.log(car);
        if (car.carMake == carMake) {
            var result = [car.presentStatus()].join(" ");
            console.log(result);
            $("#status").text("");
            $("#status").text(`${result}`);
        }
    });
}

function carDetails() {
    event.preventDefault();
    var make = $("#show-car").val();
    arrCars.forEach(car => {
        console.log(car);
        if (car.carMake == make) {
            $("#details").html("");

            $("#details")
                .html(`<li class="list-group-item">Make:${car.carMake}</li>
                            <li>Model:${car.model}</li>
                        `);
            var trips = car.tripDetails;
            $("#trips").html("");
            trips.forEach(trip => {
                $("#trips").append(
                    `<li class="list-group-item">Time:${trip.time} avgSpeed:${trip.tripSpeed} distance: ${trip.dist}</li>`
                );
                console.log("trips: ", trip);
            });
        }
    });
}
