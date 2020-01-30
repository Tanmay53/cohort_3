var carList=[]; //a global array is created which takes all values of new instances of car created

class Car{
  constructor(carMake,model,topSpeed,avgSpeed,dist,trips){ //Car class is created here
    this.carMake=carMake;
    this.model=model;
    this.topSpeed=topSpeed;
    this.avgSpeed=0;
    this.distance=0;
    this.trips=[];
  }
}

$('#createClass').click(function(){ //when create class button is clicked on HTML 
 
  var carmakeInput=$('#car_make').val(); //values updated by user on HTML form
  var modelInput=$('#model').val();
  var topSpeedInput=$('#top_speed').val();

  //console.log(carmakeInput,modelInput,topSpeedInput)

  

  var carCreated=new Car(carmakeInput,modelInput,topSpeedInput); //using those values A new instance of car is created
  //console.log(carCreated.carMake)
  

  function checkForCarExistence(carList){ // function which check if we have created the same instance in the past

    //example --> if we create a car model 'Alto' it checks in the global array if it has that in it. 
    //carList is name of global array here

    for (var i=0;i<carList.length;i++){
      if (carCreated.model==carList[i].model){
        console.log(`the car model you've created ${carCreated.model} already exists`);
        return false;
      }
    }
    return true;
  }

  if(checkForCarExistence(carList)){
    console.log(`select dropdown is appended with new car model value`)
    var carDropdown=document.createElement('option');
    $(carDropdown).text(`${carCreated.model}`); //if the value doesn't exist; then the value is appended here in car dropdown
    carDropdown.setAttribute('value',`${carCreated.model}`);
    $('#selectCar').append(carDropdown);
    carList.push(carCreated);
  }
  else{
    alert(`the car model you've created ${carCreated.model} already exists`);
  }

  console.log(`global array which stores all instances of car created `,carList);

  document.querySelector('#getDetails').addEventListener('click',getDetails); 

  function getDetails(){
    var time=$('#time').val(); //time and speed values will be entered by the user
    var speed=$('#speed').val();

    console.log(time,speed,carCreated);

    var dist=time*speed; //distance is calculated based on that

    console.log(`we get the distance here ${dist}`);

    carCreated.distance=dist; //the same distance value we got is assigned to new instance of car created
    carCreated.avgSpeed=speed; //speed we got is assigned to new instance of car created
    
    var obj={}; 
    
    obj.time=parseInt(time);
    obj.speed=parseInt(speed);
    obj.distance=parseInt(dist);
    
    carCreated.trips.push(obj); //all the values of time, speed and dist we got are pushed to trips
    
    console.log('the complete new instance of car created using Car Class is',carCreated);

    var body=document.querySelector('body');

    var div=document.createElement('div');
    $(div).addClass('card')
    $(body).append(div);

    var overAllAverageSpeed=0;
    for (var i=0;i<carCreated.trips.length;i++){
      overAllAverageSpeed+=carCreated.trips[i].speed; //tranverse through the trips of new instance created and add all trip speeds
      //of that car
    }
    console.log(overAllAverageSpeed);

    var overAllDistance=0;
    for (var i=0;i<carCreated.trips.length;i++){
      overAllDistance+=carCreated.trips[i].distance; //tranverse through the trips of new instance created and add all trip speeds
      //of that car
    }
    console.log(overAllDistance);

    $(div).html(`<div>Car Used:${carCreated.carMake} ${carCreated.model} || Average Speed of Trips:${overAllAverageSpeed} km/hr || Overall Distance Travelled:${overAllDistance} km</div>`)
  }

});



