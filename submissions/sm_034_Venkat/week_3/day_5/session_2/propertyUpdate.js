var car = [{ name: 'Ford', color: 'red', model: 'eco Sport' },
{ name: 'Mahindra', color: 'black', model: 'Scorpio', RPM: '1200' }]

function propertyUpdate(company, x, y) { //x= key & y= value
    for (i = 0; i < car.length; i++) {
        if (car[i].name == company) {
            // flag = 0
            // for (key in car[i]) {
            //     if (key == x) {
            //         flag = 1
            //     }
            // }
            // if (flag == 1) {
            //     car[i][x] = y
            //     console.log(car[i])
            //     break
            // }
            // else {
            //     car[i][x] = y
            //     console.log(car[i])
            //     break
            // }
            car[i][x]= y
            console.log(car[i])
        }
    }
}
propertyUpdate('Ford', 'RPM', '1000')