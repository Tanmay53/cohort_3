$(document).ready(function(){
var carList=[]
class Car {
    constructor(carMake = 'Invalid', model = 'Invalid', topspeed = 0) {
        this.carMake = carMake;
        this.model = model;
        this.topSpeed = topspeed;
        this.avgSpeed = 0;
        this.dist = 0;
        this.totalTime = 0;
        this.trips = [];
    }
    trip(time = 1, distance = 0) {
        let speed = 0;
        if (distance == "") {
            speed = this.topSpeed / 2;
            distance = speed * time
            this.dist += Number(distance);
            this.totalTime += Number(time);
        } else {
            this.dist += Number(distance);
            speed = distance / time;
            this.totalTime += Number(time);
        }
        this.trips.push({
            tripSpeed: speed,
            tripDistance: Number(distance),
            tripTime: time
        });
    }
    averageSpeed() {
        let totalTime = 0;
        let totalDist = 0;
        this.trips.forEach(function (ele) {
            totalTime += ele.tripTime
            totalDist += ele.tripDistance
        })
        let avg = totalDist / totalTime;
        this.avgSpeed = avg;
    }
    presentStatus() {
        let str=this.carMake+' '+this.model+' '+this.topSpeed+' KM/Hr'+' '+this.dist+' KM'+ ' Average spped in km/hr is: '+this.avgSpeed;
        return str;
    }
}
    $("#addCar").click(function () {
        event.preventDefault()
        var newcar = new Car($("#carMake").val(), $("#carModel").val(), $("#topSpeed").val())
        carList.push(newcar)
        $("#mySelect").append(`<option value = ${newcar.model}>${newcar.carMake}(${newcar.model})</option>`)
        console.log(carList)
    })
    $("#addTrip").click(function () {
        event.preventDefault()
        carList.forEach(function (ele) {
            if (ele.model == $("#mySelect").val()) {
                ele.trip(Number($("#tripTime").val()), Number($("#tripDistance").val()))
                ele.averageSpeed()
            }
        })
    })
    $("#show").click(function () {
        carList.forEach(function (ele) {
            if (ele.model == $("#mySelect").val()) {
               let str = ele.presentStatus()
               $("#status").append(str)
            }
        })
  })
})
  





