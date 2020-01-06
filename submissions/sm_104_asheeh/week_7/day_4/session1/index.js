let carDb = []
class Car{
    constructor(carMake, model, topSpeed)
    {
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topSpeed;
        this.avgSpeed = 0;
        this.dist = 0;
        this.trips = [];
    }

    //trip function
    trip(distance=0, time = 1)
    {
        let speed=0;
        if(distance == "")
        {
            speed = Number(this.topSpeed)/2
            distance = Number(speed)*Number(time)
            this.dist += Number(distance)

        }
        else
        {
            this.dist += Number(distance)
            speed = Number(distance)/Number(time)
        }

        if(speed <= this.topSpeed)
        {
            this.trips.push({
                tripSpeed : speed,
                tripDistance : distance,
                tripTime : time
            });
        }
        else
        {
            alert("Average speed can not be greater than Top speed. Enter correct Ride details.")
        }
        
        console.log(this.dist);
        console.log(this.trips);
    }

    // update average speed
    averageSpeed()
    {
        let totalDistance = 0;
        let totalTime = 0;
        let tripAverage = 0;
        this.trips.forEach(ele => {
            totalDistance += Number(ele.tripDistance);
            totalTime += Number(ele.tripTime);
        });
        tripAverage = Number(totalDistance) / Number(totalTime)
        if(tripAverage > this.topSpeed)
        {
            alert("Average speed can not be greater than Top speed. Enter correct Ride details.")
        }
        else
        {
            this.avgSpeed = tripAverage;
        }
        console.log(this.avgSpeed);
        console.log(this.topSpeed);

    }

    presentStatus()
    {
        let displayArea = document.getElementById("displayArea");
        displayArea.innerHTML ="";
        let displayContent = `<p>${this.carMake} ${this.model} has top speed: ${this.topSpeed}. Average journey speed is: ${this.avgSpeed}Kmph`
                            //  `<div>
                            //   <h4>${this.carMake}</h4>
                            //   <p>Car Model: ${this.model}</p>
                            //   <p>Top Speed: ${this.topSpeed}</p>
                            //   <p>Average Speed: ${this.avgSpeed}</p>
                            //   <p>Distance Travelled: ${this.dist}</p>
                            //   <ul>Trips:${this.tripDetails(this.trips)}</ul>
                            //   </div> ` 

         displayArea.innerHTML = displayContent;                     
    }

    tripDetails(trips)
    {
        let trip = ""
        trips.forEach(ele => {
            trip += `<li>Trip Speed:${ele.tripSpeed}</li>
                     <li>Trip Distance:${ele.tripDistance}</li>
                     <li>Trip Time:${ele.tripTime}</li>`
        });
        return trip;
    }
}

function submitCarDetails()
{
    event.preventDefault();
    let carMake = document.getElementById("inputCarMake").value;
    let model = document.getElementById("inputModel").value;
    let topSpeed = document.getElementById("inputTopSpeed").value;
    
    let newCar = new Car(carMake,model,topSpeed);
    carDb.push(newCar);
    console.log(carDb)

    $("#selectCar").empty();
    $("#selectModelToDisplay").empty();
    carDb.forEach(ele => {
        
        $("#selectCar").append(`<option value = ${ele.model}>${ele.model}</option>`)
        $("#selectModelToDisplay").append(`<option value = ${ele.model}>${ele.model}</option>`)

    })

}

function submitRideDetails()
{
    event.preventDefault();
    
    let selectedModel = document.getElementById("selectCar").value;
    let journeyDurn = document.getElementById("inputJourneyDurn").value;
    let distanceCovered = document.getElementById("inputDistance").value;

    carDb.forEach(ele => {
        if(ele.model == selectedModel)
        {
            ele.trip(distanceCovered,journeyDurn);
            ele.averageSpeed();  
        }
        
    });
    
}

function showCurrentStatus()
{
    event.preventDefault();

    let modelToDisplay = document.getElementById("selectModelToDisplay").value;
    carDb.forEach(ele => {
        if(ele.model == modelToDisplay)
        {
            {
                // alert(ele.avgSpeed)
                ele.presentStatus();
            }
        }
    });
}

