$('#tableCarInfo').hide()
$("#tableTripInfo").hide()

class Car{
    constructor(carmake,model,tspeed){
        this.carMake=carmake || "Invalid"
        this.model=model     || "Invalid"
        this.topSpeed=tspeed || 0
        this.distance=0
        this.avgSpeed=0
        this.time=0
        this.trips=[]
        
    }
    
    trip(time,distance){
        let tripOne=[time,distance]
        this.trips.push(tripOne)
        this.distance+=Number(distance)
    }
    avgspeed(time){
        this.time+=Number(time)

        setTimeout(() => {
            console.log(this.distance,this.time,time) 
            this.avgSpeed=(this.distance/this.time).toFixed(2)
        }, 1000);
       
        
    }
}
allCar=[]

firstSubmit.addEventListener("click",function(){
car_make=$("#iCarMake").val()
car_model=$("#iCarModel").val()
top_speed=$("#iTopSpeed").val()


var newCar= new Car(car_make,car_model,top_speed)
allCar.push(newCar)
console.log(allCar)

$("#firstSelect").append(`<option>${newCar.model}<option>`)
$("#secondSelect").append(`<option>${newCar.model}<option>`)
})


secondSubmit.addEventListener("click",function(){
trip_time=$("#iTripTime").val()
trip_speed=$("#iTripSpeed").val()
selectedCar=$("#firstSelect").val()

for (i=0;i<allCar.length;i++){
    if(allCar[i].model==selectedCar){
        allCar[i].avgspeed(trip_time)
        allCar[i].trip(trip_time,trip_speed)
        console.log("Done "+allCar[i].distance,allCar[i].avgSpeed,allCar[i].trips)

    }
}
})


$("#secondSelect").on("change",function(){
    console.log("working")
    selectedCar2=$("#secondSelect").val()
    $("#tableCarInfo > tr").empty()
    $('#tableCarInfo').show()
    $('#tableTripInfo').show()
for (i=0;i<allCar.length;i++){
    if(allCar[i].model==selectedCar2){
    $("#tableCarInfo").append(`<tr><td>${allCar[i].carMake}</td><td>${allCar[i].model}</td><td>${allCar[i].topSpeed}<small class="text-muted">km/hr</small></td><td>${allCar[i].distance}<small class="text-muted">km</small></td><td>${allCar[i].avgSpeed}<small class="text-muted">km/hr</small></td></tr>`)
    $("#tableTripInfo > tr").empty()
    for (j=0;j<allCar[i].trips.length;j++){
        $("#tableTripInfo").append(`<tr><td>${j+1}.</td><td>${allCar[i].trips[j][1]}<small class="text-muted">km</small></td></tr>`)
    }
        console.log("Done this too")

    }
}
})



