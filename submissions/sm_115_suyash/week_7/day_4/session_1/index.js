// UI variables
let carCompany = document.querySelector("#carCompany");
let model = document.querySelector("#model");
let topSpeed = document.querySelector("#topSpeed");
let carDetailsBtn = document.querySelector("#carDetails");
let tripDetails = document.querySelector("#tripDetails");
let showDetails = document.querySelector("#showDetails");
// Global variables
let userArray = [];
let tripSelect;
let totalTrip = 0;
var totatTime = 0;
let avgSpeed = 0;
let tripCount = 0;
let tripFrom;
let user;

// Store details of car
class CarDetails {
  constructor(company, models, speed) {
    this.company = company || "Invalid";
    this.model = models || 0;
    this.topSpeed = speed || 0;
  }
}

// Add event listener on car details button
carDetailsBtn.addEventListener("click", newUser);
function newUser(e) {
  e.preventDefault();
  // create new user
  user = new CarDetails(carCompany.value, model.value, topSpeed.value);
  // Push array in array
  userArray.push(user);
  // clear input boxes
  carCompany.value = "";
  model.value = "";
  topSpeed.value = "";
  // Creare trip details
  if (tripDetails.innerHTML == "") {
    tripDetails.innerHTML = `<h2 class=' text-warning rounded'>Trip Details</h2>
                              <label for="dis" class="mt-3">Select Car</label>`;
    tripSelect = document.createElement("select");
    tripSelect.classList.add("w-100", "py-2", "pl-2", "bg-dark", "text-white");
    tripDetails.appendChild(tripSelect);
    tripFrom = document.createElement("form");
    tripFrom.innerHTML += `
                              <label for="dis" class="mt-3">Enter Distance</label>
                              <input type="number" class="form-control" id="tripDistance" placeholder="Enter distance in KM" />
                              <label for="time" class="mt-3">Enter Time</label>
                              <input type="number" class="form-control mb-3" id="tripTime" placeholder="Enter Time in minutes" />
                              <button type="submit" class="btn btn-dark text-warning btn-block" id="tripDetailsBtn">Enter Trip Details</button>
    `;
    tripDetails.appendChild(tripFrom);
  }
  // Append trip select box in div
  tripSelect.innerHTML += `<option value="${user.company}">${user.company}</option>`;
  // Add event listener on trip form button
  document.querySelector("#tripDetailsBtn").addEventListener("click", newTrip);
}

function newTrip(e) {
  e.preventDefault();
  let tripDis = document.querySelector("#tripDistance");
  let tripTime = document.querySelector("#tripTime");
  tripCount++;

  totalTrip += Number(tripDis.value);
  totatTime += Number(tripTime.value);
  avgSpeed = parseInt(totalTrip / (totatTime / 60));
  if (showDetails.innerHTML == "") {
    showDetails.innerHTML = `
                            <button type="submit" class="btn btn-dark text-warning btn-block mt-3" id="showStatusBtn">Show Car Status</button>
                            <button type="submit" class="btn btn-dark text-warning btn-block mb-4" id="showAllDetailsBtn">Show All Details</button>
  `;
  }

  // Add event listener on show status button
  document
    .querySelector("#showStatusBtn")
    .addEventListener("click", showStatus);
  // Add event listener on show status button
  document
    .querySelector("#showAllDetailsBtn")
    .addEventListener("click", showAllDetails);
  console.log(tripDis.value, tripTime.value, tripSelect.value);
}

function showStatus(e) {
  let statusMsg = document.createElement("h5");
  statusMsg.innerHTML = `Compant: ${user.company} Model: ${user.model} <br> Top Speed: ${user.topSpeed} Total trip: ${totalTrip}`;
  setTimeout(function() {
    statusMsg.style.display = "none";
  }, 5000);
  showDetails.appendChild(statusMsg);
}

function showAllDetails(e) {
  let statusMsg = document.createElement("div");
  statusMsg.innerHTML = "";
  statusMsg.innerHTML = `
                    <div class="card" style="width: 18rem;">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Car: ${user.company}</li>
                        <li class="list-group-item">Model:${user.model}</li>
                        <li class="list-group-item">Top speed:${user.topSpeed}</li>
                        <li class="list-group-item">Total Cover Distence: ${totalTrip}</li>
                        <li class="list-group-item">Average speed: ${avgSpeed}</li>
                      </ul>
                    </div>
                    <br>
  `;
  showDetails.appendChild(statusMsg);
}
