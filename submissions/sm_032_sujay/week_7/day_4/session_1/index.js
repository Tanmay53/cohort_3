var brand = document.getElementById("brand").value
var model = document.getElementById("model").value
var maxSpeed = document.getElementById("maxSpeed").value

var timings = document.getElementById("time").value
var velocity = document.getElementById("velocity").value

// yet to do
class Car{
    constructor(carMake,model,topSpeed)
    {
        console.log("inside car constructor")
        this.carMake = carMake
        this.model = model
        this.topSpeed= topSpeed
        this.avgSpeed = avgSpeed
        this.dist= 0
        this.trips = []

        console.log(this.name,this.model,this.speed)
    }


    trip(time,dist)
    {

    }

    presentStatus()
    {

    }
}



class Civic extends Car{

}






























