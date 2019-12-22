/** @format */

var cars = [];
$("#submitCarDetail").click(function(event) {
    event.preventDefault();
    carMake = $("#carMake").val();
    model = $("#model").val();
    topSpeed = $("#topSpeed").val();
    let car = new Car(carMake, model, topSpeed);
    cars.push(car);
    append(car);
  //  console.log(cars)
  $('#carMake').val('');
  $('#model').val('');
  $('#topSpeed').val('');

});

class Car {
    constructor(carMake = "Invalid", model = "Invalid", topSpeed = 0) {
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
        this.avgSpeed = 0;
        this.totalDistance = 0;
        this.trips = [];
    }

    trip(time , dist) {
        let speed = 0;
        if (dist == "") {
            dist = 0;
            time = 1;
            speed = Math.floor(parseInt(this.topSpeed)/2);
            dist = speed * time;
            this.totalDistance += dist;
            this.trips.push({
                tripSpeed: speed,
                tripDistance: dist,
                tripTime: time
            });
        }else {
            dist = parseInt(dist);
            time = parseInt(time);
            speed = dist / time;
            if(speed > this.topSpeed){
                alert("you can't cross your limit!!!")
            }else{
                this.totalDistance += dist;
                this.trips.push({
                    tripSpeed: speed,
                    tripDistance: dist,
                    tripTime: time
                
                });
            }  
        }
    }

    averageSpeed(){
        var sum = 0;
        this.trips.forEach(ele => {
            sum += ele.tripSpeed;
        });
        this.avgSpeed = sum / this.trips.length;
    }
    presentStatus() {
        var statusOfCar = $("#displayInfo");
        statusOfCar.empty();
        statusOfCar.append(`
        <div>Car Make : ${this.carMake},<br/> Model : ${this.model},<br/>
             Top Speed : ${this.topSpeed} Km/hr,<br/>Total Distance Travelled : ${this.totalDistance} Km, <br/>
             Average Speed : ${this.avgSpeed.toFixed(2)} Km/hr,
              <br/>
             Current Trip Details :<ul><li>Speed :${this.trips[this.trips.length-1].tripSpeed} Km/hr, </li>
                                <li>Time Taken :${this.trips[this.trips.length-1].tripTime} hr,</li>
                                <li>Distance Travelled :${this.trips[this.trips.length-1].tripDistance} Km</li>
                           </ul>
             </div>
         `)
    }
}

const append = car => {
    $("#selectCar").append(`<option value="${car.model}">${car.model}</option`);
};

$("#submitRideDetails").click(function(event) {
    event.preventDefault();
    var carName = $("#selectCar").val();
    var distance = $("#distance").val();
    var time = $("#time").val();
    console.log(distance,time);
        for (let i = 0; i < cars.length; i++) {
            if (carName == cars[i].model){
                cars[i].trip(time, distance);
                cars[i].averageSpeed();
                console.log(cars);

    }
  }
  $('#distance').val('');
  $('#time').val('');

});


$("#currentStatus").click(function(event) {
    event.preventDefault();
    var selectCar =$("#selectCar").val();
    
    console.log(selectCar);
    cars.forEach((ele) => {
        if(selectCar == ele.model){
           ele.presentStatus();
        }
    })
});
