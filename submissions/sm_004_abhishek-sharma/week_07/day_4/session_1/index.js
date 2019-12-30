var carDetails = []
var CarCompany = {}
class Car {
    constructor(carMake="invalid", carModel="invalid", topSpeed=0){
        this.carMake = carMake
        this.carModel = carModel
        this.topSpeed = topSpeed
        this.avgSpeed = 0
        this.distance = 0
        this.tripNo = 0
        this.time = 0
        this.trips = []
        // console.log(`${this.carMake}, ${this.carModel}, ${this.topSpeed}`)
    }
    trip(time = 1, speed = topSpeed/2){
        this.tripNo++
        this.time += time
        this.distance += time*speed
        this.avgSpeed = Math.floor(this.distance/time)
        this.trips.push(this.distance, this.avgSpeed, this.tripNo)
    }

    presentStatus(){
        console.log(`${this.carMake} ${this.carModel} ${this.topSpeed} km/hr ${this.distance} km`)
    }
}
// New Car button
$("#newCar").click(e => {
    e.preventDefault()
    let carMake = $("#carMake").val()
    let carModel = $("#carModel").val()
    let topSpeed = $("#topSpeed").val()
    let car = new Car(carMake, carModel, Number(topSpeed))
    carDetails.push(car)
    console.log(carDetails)
    $(".form1Ele").val("")

    CarCompany[`${carMake}`] = carMake
    createCarList()
    console.log(CarCompany)
})

function createCarList(){
    $("#selectCarMake").empty()
    $("#selectCarMake").append(`<option selected>Choose...</option>`)
    for(key in CarCompany){
        $("#selectCarMake").append(`<option value="${CarCompany[key]}">${CarCompany[key]}</option>`)
    }
}

$("#selectCarMake").change(() => {
    $("#selectCarModel").empty()
    $("#selectCarModel").append(`<option selected>Choose...</option>`)
    let car = $("#selectCarMake").val()
    for(let i = 0; i < carDetails.length; i++){
        if(carDetails[i].carMake == car){
                $("#selectCarModel").append(`<option value="${carDetails[i].carModel}">${carDetails[i].carModel}</option>`)
        }
    }
    
})
// Adding data 
$("#addData").click(e => {
    e.preventDefault()
    let carTime = $("#time").val()
    let carSpeed = $("#speed").val()
    let carMake = $("#selectCarMake").val()
    let carModel = $("#selectCarModel").val()

    for(var i = 0; i < carDetails.length; i++){
        if(carDetails[i].carMake == carMake && carDetails[i].carModel == carModel){
            carDetails[i].trip(Number(carTime), Number(carSpeed))
        }
    }
    console.log(carDetails)
})

// $("#showDisplay").click(e => {
//     e.preventDefault()
//     let carMake = $("#selectCarMake").val()
//     let carModel = $("#selectCarModel").val()
    
// })





