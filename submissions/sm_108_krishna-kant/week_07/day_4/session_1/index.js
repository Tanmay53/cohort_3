// Global Variable
let carMakeUI;
let carModelUI;
let topSpeedUI;
let carsList = [];

class Car {
  constructor(make, model, topSpeed) {
    this.make = make || 'Wrong Input';
    this.model = model || 'Wrong Input';
    this.topSpeed = topSpeed || 0;
    this.avgSpeed = 0;
    this.trips = [];
  }

  // Set Distance Of Trip
  createTrip(distance, time = '1') {
    time = time;
    let speed = distance / time || this.topSpeed / 2;
    this.trips.push({ speed: speed, distance: distance, time: time });
  }

  //Update Average Speed
  updateAverageSpeed() {
    let avg = 0;
    this.trips.forEach(function(trip) {
      avg += trip.speed;
    });
    this.avgSpeed = (avg / this.trips.length).toFixed(1);
  }

  //   Get Current Status
  getCurrentStatus() {
    let totalTrip = 0;
    this.trips.forEach(trip => {
      totalTrip += parseInt(trip.distance);
    });
    let status = `${this.make} ${this.model} ${this.topSpeed}Km/hr ${totalTrip}`;
    return status;
  }

  //   Get Details of Car
  getDetails() {
    let tripDetails = '';
    this.trips.forEach((trip, index) => {
      tripDetails += `
        <li class='list-group-item font-weight-bolder text-danger'>Trip No : ${index +
          1}</li>
        <li class='list-group-item'>Time : ${trip.time}</li>
        <li class='list-group-item'>Distance : ${trip.distance}</li>
        <li class='list-group-item'>Speed : ${trip.speed}
        `;
    });
    console.log(tripDetails);
    let output =
      `
      <li class='list-group-item'>Car : ${this.make}</li>
      <li class='list-group-item'>Model : ${this.model}</li>
      <li class='list-group-item'>Average Speed : ${this.avgSpeed}</li>
      <li class='list-group-item'>Top Speed : ${this.topSpeed}</li>
      ` + tripDetails;

    return output;
  }
}
// Loading All Event Listners
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#carSubmit').addEventListener('click', e => {
    createCarInstance(e);
  });
  document.querySelector('#add-trip-details').addEventListener('click', e => {
    addTripDetails(e);
  });
  document.querySelector('#show-status').addEventListener('click', () => {
    showStatus();
  });
  document.querySelector('#show-details').addEventListener('click', () => {
    showCarDetail();
  });
});

// Creating Car Instance
function createCarInstance(event) {
  event.preventDefault();

  //   Initializing UI Class
  let ui = new UICtrl();

  //   Initing UI Variable
  ui.init();

  //   Creating Car Instance
  let car = new Car(
    ui.getData(carMakeUI),
    ui.getData(carModelUI),
    ui.getData(topSpeedUI)
  );

  // Adding car to car list
  carsList.push(car);

  // Adding Car to Select Box
  ui.createCarOption(ui.getElement('#car-list'), carsList);
  ui.createCarOption(ui.getElement('#car-list-show'), carsList);
}

function addTripDetails(event) {
  let ui = new UICtrl();

  //Getting Value of Selected Car
  let selectedCar = ui.getData(ui.getElement('#car-list'));
  let distanceTraveled = ui.getData(ui.getElement('#distance-travelled'));
  let timeTaken = ui.getData(ui.getElement('#time-taken'));
  carsList.forEach(car => {
    if (car.make === selectedCar) {
      car.createTrip(distanceTraveled, timeTaken);
      car.updateAverageSpeed();
      console.log(car);
    }
  });
}
// UI Controller Class
class UICtrl {
  // Initialize UI Variables

  init() {
    carMakeUI = document.querySelector('#car-make');
    carModelUI = document.querySelector('#model');
    topSpeedUI = document.querySelector('#top-speed');
  }

  //   Returning form Data
  getData(uiController) {
    return uiController.value;
  }

  //   Return HTML Element
  getElement(target) {
    return document.querySelector(target);
  }

  //   Adding Cars to Select Box
  createCarOption(target, data) {
    target.innerHTML = '';
    data.forEach(car => {
      let option = document.createElement('option');
      option.textContent = car.make + '-' + car.model;
      option.value = car.make;
      target.appendChild(option);
    });
  }
}

// Show Car Status
function showStatus() {
  let ui = new UICtrl();
  let selectedCar = ui.getData(ui.getElement('#car-list-show'));
  let status;
  carsList.forEach(car => {
    if (car.make == selectedCar) {
      status = car.getCurrentStatus();
    }
  });
  let target = ui.getElement('.display');
  target.innerHTML = '';
  let alertMsg = document.createElement('div');
  //   <div class="alert alert-primary" role="alert">
  //   This is a primary alert—check it out!
  // </div>
  alertMsg.className = 'alert alert-primary';
  alertMsg.setAttribute('role', 'alert');
  alertMsg.textContent = status;
  target.appendChild(alertMsg);
  target.style.display = 'block';
  setTimeout(() => {
    alertMsg.style.display = 'none';
  }, 4000);
}

function showCarDetail() {
  let ui = new UICtrl();
  let selectedCar = ui.getData(ui.getElement('#car-list-show'));
  let activeCarDetails;
  carsList.forEach(car => {
    if (car.make == selectedCar) {
      activeCarDetails = car.getDetails();
    }
  });
  let target = ui.getElement('.display');
  target.style.display = 'block';
  let list = document.createElement('ul');
  list.classList.add('list-group');
  list.innerHTML = activeCarDetails;
  target.appendChild(list);
}
