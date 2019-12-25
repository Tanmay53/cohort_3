var allCars = [];
// index user input

var uiModel = () => {
  carMakeVal = $("#carmake").val();
  modelVal = $("#model").val();
  topSpeedVal = $("#topSpeed").val();
  all = $("#cars").val();
  timeVal = $("#time").val();
  speedVal = $("#speed").val();
  tripBtn = $("#submitTrip");
};
class Car {
  constructor(carmake, model, topSpeed) {
    this.carmake = carmake;
    this.model = model;
    this.topSpeed = topSpeed;
  }
  name() {
    return this.carmake;
  }
  model() {
    return this.model;
  }
  topSpeed() {
    return this.topSpeed;
  }

  distance(time, speed) {
    return time * speed;
  }

  trip() {
    var trips = [];
    trips.push(this.distance);
    return trips;
  }
}
var carObj;

// submit model btn
$("#submitModel").click(function() {
  uiModel();
  var car = new Car(carMakeVal, modelVal, topSpeedVal);
  carObj = {
    carName: carMakeVal,
    model: modelVal,
    topSpeed: topSpeedVal
  };
  var eachCar = document.createElement("option");
  eachCar.textContent = carMakeVal;
  $("#cars").append(eachCar);
  carObj.trips = [];
});
// submit trip info btn
$("#submitTrip").click(function() {
  uiModel();
  var car = new Car(carMakeVal, modelVal, topSpeedVal);
  carObj.time = timeVal;
  carObj.speed = speedVal;
  carObj.distance = car.distance(timeVal, speedVal);
  tripsInfo = [
    `speed :${speedVal}, distance: ${car.distance(
      timeVal,
      speedVal
    )}, time: ${timeVal}`
  ];
  carObj.trips.push(tripsInfo);
  carObj.tripPrint = () => {
    var myData = [];
    for (var m = 0; m < carObj.trips.length; m++) {
      myData.push(carObj.trips[m]);
    }
    return myData;
  };
  var eachCar = document.createElement("option");
  eachCar.textContent = $("#cars").val();
  if ($("#cars").val() != $("#carsDetails").val()) {
    $("#carsDetails").append(eachCar);
    allCars.push(carObj);
  }
});

// carsDetails; show car details btn
$("#showCarDetailsBtn").click(function() {
  var carinfoDetails = $("#carsDetails").val();
  for (var i = 0; i < allCars.length; i++) {
    if (allCars[i].carName == carinfoDetails) {
      var detailsDiv = document.createElement("div");
      detailsDiv.innerHTML = `<table class="table">
                                <tr> 
                                <td>Car Name</td>
                                <td>${allCars[i].carName}</td>
                                </tr>

                                <tr> 
                                <td>Model</td>
                                <td>${allCars[i].model}</td>
                                </tr>

                                <tr> 
                                <td>Speed</td>
                                <td>${allCars[i].speed}km/hr</td>
                                </tr>

                                <tr> 
                                <td>Distance</td>
                                <td>${allCars[i].distance}km</td>
                                </tr>   
                            </table>`;
      $("#detailsCar").append(detailsDiv);
    }
  }
});

// trip info btn

$("#tripInfoBtn").click(function() {
  tripInfoDiv = document.createElement("div");
  tripInfoDiv.textContent = `${carObj.tripPrint()}`;
  $("#tripsDetails").append(tripInfoDiv);
});
