var arra = []
class Car {
    constructor(make, model, topSpeed, avgSpeed, distance, trips) {
        this.carMake = make;
        this.model = model;
        this.topSpeed = topSpeed;
        this.avgSpeed = avgSpeed;
        this.dist = distance;
        this.trips = trips;
    }
    trip(dist, time) {
        var speed = 0
        if (dist == 0) {
            speed = this.topSpeed / 2
        }
        else {
            speed = dist / time
        }
        var x = Number((this.avgSpeed + speed) / 2)
        this.avgSpeed = x.toFixed(2)
        this.dist += dist
        return this.avgSpeed

    }

}
$(".submitData").click(function () {
    var input = true
    var make = $(".brand").val()
    if (isNaN(make) == false) {
        input = false
        alert("invalid CarName Input")

    }
    var model = $(".model").val()
    if (isNaN(model) == false) {
        input = false
        alert("invalid model Input")
    }
    var topSpeed = Number($(".topSpeed").val())
    if (isNaN(topSpeed) == true) {
        input = false
        alert("invalid topSpeed Input")

    }
    var avgSpeed = Number($(".avgSpeed").val())
    if (isNaN(avgSpeed) == true) {
        input = false
        alert("invalid avgspeed Input")

    }
    var distance = Number($(".distance").val())
    if (isNaN(distance) == true) {
        input = false
        alert("invalid Distance Input")

    }
    var trips = Number($(".trips").val())
    if (isNaN(trips) == true) {
        input = false
        alert("invalid trips Input")

    }
    if (input == true) {
        var car = new Car(make, model, topSpeed, avgSpeed, distance, trips)
        arra.push(car)
    }
    console.log(arra)
    var select = document.getElementById("pickCar")
    $("#pickCar").empty()
    for (var i = 0; i < arra.length; i++) {
        var option = document.createElement("option")
        option.innerHTML = arra[i].carMake + " " + arra[i].model
        option.setAttribute("valur", arra[i].carMake + " " + arra[i].model)
        select.appendChild(option)
    }
})

$(".ridebtn").click(function () {
    var input = true
    var dist = Number(document.getElementById("dist").value)
    if (isNaN(dist) == true && dist != "") {
        alert("invalid distance input")
        input = false
    }
    else {
        dist = Number(document.getElementById("dist").value) || 0
    }
    var time = document.getElementById("time").value
    if (isNaN(time) == true && time != "") {
        alert("invalid distance input")
        input = false
    }
    else {
        time = Number(document.getElementById("time").value) || 1
    }
    if (input == true) {
        var selectCar = document.getElementById("pickCar").value
        for (i = 0; i < arra.length; i++) {
            if (selectCar == arra[i].carMake + " " + arra[i].model) {
                var x = arra[i].trip(dist, time)
                var display = document.getElementsByClassName("statusCar")[0]
                display.innerHTML = `${arra[i].carMake} ${arra[i].model} ${arra[i].avgSpeed}Km/hr ${arra[i].dist}km`
            }

        } console.log(arra)
    }
})
var showAll = document.getElementById("allData")
var div = document.getElementsByClassName("tableForm")[0]
showAll.addEventListener("click", function () {
    var div = document.getElementsByClassName("tableForm")[0]
    div.innerHTML = ""
    var table = document.createElement("table")
    table.setAttribute("class", "table")
    table.setAttribute("id", "tabler")
    var div = document.getElementsByClassName("tableForm")[0]
    var tr = document.createElement("tr")
    tr.innerHTML = `<td>Car Name</td><td>Model</td><td>Top Speed</td><td>Average Speed</td><td>Distance</td><td>Trips</td>`
    table.append(tr)
    div.append(table)
    for (i = 0; i < arra.length; i++) {
        var tr = document.createElement("tr")
        tr.innerHTML = `<td>${arra[i].carMake}</td><td>${arra[i].model}</td><td>${arra[i].topSpeed}</td><td>${arra[i].avgSpeed}</td><td>${arra[i].dist}</td><td>${arra[i].trips}</td>`
        table.append(tr)
    }
})