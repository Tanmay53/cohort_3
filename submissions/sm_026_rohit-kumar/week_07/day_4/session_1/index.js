// gobals
carObjects = []

class Car {
    constructor(car_make, model, top_speed) {
        this.carMake    = car_make
        this.model      = model
        this.topSpeed  = top_speed
        this.avgSpeed   = 0
        this.dist       = 0
        this.trips      = []
    }

    trip(time, speed) {
        // by default speed in half of top speed
        
        if(speed == null)
            speed = this.topSpeed / 2

        //this.dist = this.dist + distance
        let distance = speed * time
        this.trips.push({'distance' : distance, 'time' : time, 'avgSpeed' : speed })
        
        // update distance travelled
        this.dist = this.dist + distance

        // update average speed
        var totalSpeed = 0
        for(let i = 0; i < this.trips.length; i++) {
            console.log('speed :', this.trips[i].avgSpeed)
            totalSpeed = totalSpeed + this.trips[i].avgSpeed
        }
        
        this.avgSpeed = totalSpeed / this.trips.length
        console.log(this)
    }

    presentStatus() {
        // console.log(`${this.carMake} ${this.model} ${this.topSpeed}km/hr ${this.dist}km`)
        return `${this.carMake} ${this.model} ${this.topSpeed}km/hr ${this.dist}km`
    }

    getTrips() {
        return this.trips
    }
}

function populateDropDown() {
    // populate using carObjects
    // clear previous items before appending new
    $('#selCars > option').remove()

    $('#selCars').append(`<option value='-1'>choose..</option>`)
     carObjects.forEach((car, index) => {
        $('#selCars').append(`<option value=${index}>${car.carMake + '-' + car.model}</option>`)
    });
    // console.log('populate complete')
}

function validateFields() {
    if($('#txtCarMake').val() == "") {
        alert('Please enter car make !')
        $('#txtCarMake').focus()
        return
    }

}


$('#btnSubmit').click(function(){
    
    // validation
    if($('#txtCarMake').val() == "") {
        alert('Enter car make !')
        $('#txtCarMake').focus()
        return
    }
    if($('#txtModel').val() == "") {
        alert('Enter car model !')
        $('#txtModel').focus()
        return
    }

    if($('#txtTopSpeed').val() == "") {
        alert('Enter car model !')
        $('#txtTopSpeed').focus()
        return
    }


    let make = $('#txtCarMake').val()
    let model = $('#txtModel').val()
    let topSpeed = $('#txtTopSpeed').val() == "" ? 0 : $('#txtTopSpeed').val()

    console.log('sublit clicked ..')
    car = new Car(make, model, topSpeed)
    carObjects.push(car)
    populateDropDown()

    // reset
    alert('Insert successfull !!')
    $('#txtCarMake').val('')
    $('#txtModel').val('')
    $('#txtTopSpeed').val('')
    $('#txtCarMake').focus()
})

function display(car) {

    
    let trips = car.getTrips()

    var rows = ''
    for(let i = 0; i < trips.length; i++) {
        rows = rows + `<tr>
                            <td> ${i+1} </td>
                            <td> ${trips[i].distance} km </td>
                            <td> ${trips[i].time} hr </td>
                            <td> ${trips[i].avgSpeed} km/hr </td>
                        </tr>`
                         
    }
    // this.trips.push({'distance' : distance, 'time' : time, 'avgSpeed' : speed })
    var table = `<b>${car.presentStatus()} </b><br>`
    table +=    `<table class="table mt-4">
                    <tr>
                        <th>Trip No. </th>
                        <th>Distance Travelled </th>
                        <th>Time Taken </th>
                        <th>Average Speed </th>
                    <tr>
                    ${rows}
                 </table>`
    //console.log(str)
    $('#display').html(table)

}


$('#btnStaus').click(function(){
    let index = Number($('#selCars').val())
    let time  = $('#txtTime').val() == "" ? 1 : Number($('#txtTime').val())
    let speed = $('#txtSpeed').val() == "" ? null : Number($('#txtSpeed').val())
    console.log('speed inti value', speed)

    if(index >= 0) {
        // add this to car object
        car = carObjects[index]
        car.trip(time, speed)

        // display car info
        display(car)
    } 
    // reset 
    $('#selCars').val('-1')
    $('#txtTime').val('')
    $('#txtSpeed').val('')
})
//


/* function main() {

} */