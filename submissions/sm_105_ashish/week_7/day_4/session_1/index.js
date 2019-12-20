
class Car {
    constructor(carMake = 'Invalid', model =0,topspeed = 0) {
      this.carMake = make,
      this.model = model,
      this.topSpeed = topspeed,
      this.avgSpeed = Math.floor(this.topSpeed/2) || this.avgSpeed,
      this.dist+=this.dist
      this.trips = trips


    }
}
const lambo = new Car('lamborgini','2015',260)
  
class Trip extends Car{
    constructor(time = 1,dist = 0){
        super(this.topspeed)
        this.time = time
        this.dist = dist
    }
    avgSpeed(){
        
        if(this.time == 1){
            speed=this.topspeed/2
            this.time == this.dist/speed
        }
     else{
        speed = this.dist/this.time
       }
       }
}
console.log(lambo)
  





