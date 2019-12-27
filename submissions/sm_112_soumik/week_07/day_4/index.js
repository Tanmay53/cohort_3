$("#submit").click(function() {
  class Car {
    constructor(carMake = "invalid", model = "invalid", topSpeed = 0) {
      this.carMake = carMake;
      this.model = model;
      this.topSpeed = topSpeed;
      this.avgSpeed = 10;
      this.avgdist = 0;
      this.trips = [];
      this.avg = 0;
    }
  }

  var comp = $("#company").val();
  var model = $("#model").val();
  var speed = $("#speed").val();

  newCar = new Car(comp, model, speed);
  console.log(newCar);

  class trip extends Car {
    constructor(time = 1, dist, comp, model, speed) {
      super(comp, model, speed);
      this.time = time;
      this.dist = dist;
    }
    showDetails() {
      console.log(this.time, this.avg());
    }
  }

  var newTrip = new trip(
    1,
    (dist = Math.floor(topSpeed / 2)),
    comp,
    model,
    speed
  );
  console.log(newTrip);
  newTrip.showDetails();
});
