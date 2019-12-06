// add event listener to buttons
document.getElementById("saveCar").addEventListener("click", () => {
  saveCarInfo();
});

document.getElementById("saveTrip").addEventListener("click", () => {
  addTripDetails();
});

document.getElementById("tripDetails").addEventListener("click", () => {
  getTripDetails();
});

// empty array
let carArr = [];
// car class
class Car {
  constructor(carMake, model, topSpeed) {
    this.carMake = carMake;
    this.model = model;
    this.topSpeed = topSpeed;
    this.avgSpeed = 0;
    this.dist = 0;
    this.trips = [];
  }

  // method to store trips
  trip(distance, time = 1) {
    let speed = 0;
    if (distance == "") {
      this.dist += parseInt(0);
      speed = this.topSpeed / 2;
    } else {
      this.dist += parseInt(distance);
      speed = distance / time;
    }
    this.trips.push({
      tripSpeed: speed,
      tripDistance: distance,
      tripTime: time
    });
    console.log(this.dist);
    console.log(this.trips);
  }

  // method to update average speed
  averageSpeed() {
    let totalSpeed = 0;
    let totalTrip = this.trips.length;
    this.trips.forEach(element => {
      totalSpeed += element.tripSpeed;
    });
    this.avgSpeed = parseInt(totalSpeed / totalTrip);
    console.log(this.avgSpeed);
  }

  presentStatus() {
    let box = document.getElementById("info");
    box.innerHTML = "";
    let div = `<div class="alert alert-success">
                <h4 class="alert-heading">${this.carMake}</h4>
                <p>Car Model: ${this.model}</p>
                <p>Top Speed: ${this.topSpeed}</p>
                <p>Average Speed: ${this.avgSpeed}</p>
                <p>Total Distance: ${this.dist}</p>
                <ul class="list-unstyled">Trips: ${this.tripDetails(
                  this.trips
                )}</ul>
              </div>`;
    box.innerHTML = div;
  }

  tripDetails(trips) {
    let trip = "";
    trips.forEach(element => {
      trip += `<li>Trip Speed: ${element.tripSpeed}</li>
               <li>Trip Distance: ${element.tripSpeed}</li>
               <li>Trip Time: ${element.tripTime}</li>`;
    });
    return trip;
  }
}

// function to save car info
function saveCarInfo() {
  event.preventDefault();

  let carMake = document.getElementById("comapanyName").value;
  let model = document.getElementById("modelName").value;
  let topSpeed = document.getElementById("topSpeed").value;

  let car = new Car(carMake, model, topSpeed);
  carArr.push(car);
  console.log(carArr);
  createDropDown();
}

// function to add trip details
function addTripDetails() {
  event.preventDefault();

  let carModel = document.getElementById("carDropdown").value;
  let distance = document.getElementById("distance").value;
  let time = document.getElementById("time").value;

  carArr.forEach(element => {
    if (element.model == carModel) {
      element.trip(distance, time);
      element.averageSpeed();
    }
  });
}

// function to get car and trip info
function getTripDetails() {
  event.preventDefault();

  let carModel = document.getElementById("carModel").value;

  carArr.forEach(element => {
    if (element.model == carModel) {
      element.presentStatus();
    }
  });
}
// function to create car dropdown
function createDropDown() {
  let option = "";
  option += `<option value="" selected disabled>select any car model!</option>`;
  carArr.forEach(element => {
    option += `<option value="${element.model}">${element.model}</option>`;
  });
  document.getElementById("carDropdown").innerHTML = option;
  document.getElementById("carModel").innerHTML = option;
}
