var master = []
class Car
{
    constructor(carBrand = "Invalid", carModel = "Invalid", topSpeed = 0)
    {
        this.carBrand = carBrand;
        this.carModel = carModel;
        this.topSpeed = topSpeed;
        this.avgSpeed = 0;
        this.distance = 0;
        this.totalTime = 0;
        this.trips = [];
    }

    trip(time , dist)
    {
        let speed = 0
        if(dist == "")
        {
            dist = 0
            time = 1
            speed = Math.floor(parseInt(this.topSpeed/2))
            dist = speed * time
            this.distance = this.distance + Number(dist)
            this.totalTime = this.totalTime + Number(time)
        }
        else{
            this.distance = this.distance + Number(dist)
            this.totalTime = this.totalTime + Number(time)
            speed = dist / time
        } 
        this.trips.push({
            tripSpeed: speed, 
            tripDistance: dist,
            tripTime: time
        })  
    }
    averageSpeed()
    {
        let time = 0
        let dist = 0
        this.trips.forEach(function(ele) {
            time = time + ele.tripTime
            dist = dist + ele.tripDistance
        })
        console.log(dist,time)
        let average = dist / time
        console.log(average)
        this.avgSpeed = average.toFixed(3)
    }
    presentStatus()
    {
        $("#display").empty()
        var disp = $("#display")
        disp.append(
            `<h3>${this.carBrand}---${this.carModel}</h3>
            <ul>
                <li>Top Speed-- ${this.topSpeed} km/hr </li>
                <li>Distance Travelled-- ${this.distance} km </li>
                <li>Average Speed is-- ${this.avgSpeed} km/hr </li>
                <li>Trip Time is-- ${this.trips[this.trips.length -1].tripTime} km/hr </li>
            </ul>
            `)
    }
}
$("#carDetails").click(function()
{
    event.preventDefault()
    var carBrand = $("#carBrand").val()
    var carModel = $("#carModel").val()
    var topSpeed = $("#topSpeed").val()

    let car = new Car(carBrand, carModel, topSpeed)
    master.push(car)
    console.log(master)

    $("#selectCar").append(`<option value="${car.carModel}">${car.carModel}</option>`)

    $("#carBrand").val("")
    $("#carModel").val("")
    $("#topSpeed").val("")
})


$("#rideDetails").click(function()
{
    event.preventDefault()
    let model = $("#selectCar").val()
    alert(model)
    let distance = $("#distance").val()
    distance = parseInt(distance)
    let time = $("#time").val()
    time = parseInt(time)
    console.log(distance,time)
    console.log(master)
    master.forEach(function(ele){
        if(ele.carModel == model){
            console.log(ele.carModel)
            ele.trip(time, distance)
            ele.averageSpeed()
        }
    })
    $("#distance").val("")
    let time = $("#time").val("")
})

$("#status").click(function()
{
    event.preventDefault()
    var model = $("#selectCar").val()
    alert(model)
    master.forEach(function(ele){
        if(ele.carModel == model){
            ele.presentStatus()
        }
    })

})