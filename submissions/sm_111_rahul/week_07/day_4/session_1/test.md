1). What is the value of a, b, c?
class Room{
    constructor(l = 0,b = 0, h = 0,t = 0 ){
        this.len  = l;
        this.br   = b;
        this.ht   = h;
        this.tempC = t;
    }
    toKelvinFromCelsius( a = 0){
        this.tempC =  this.tempC || a
        return this.tempC+273.15;
    }
    toFarFromCelsius(){

    }
}

s1 = new Room(10,10,10)

c =s1.toKelvinFromCelsius()
a = s1.toKelvinFromCelsius(100)
b = s1.toKelvinFromCelsius(200)

Answer

c = 273.15 as ( this.tempC  will get 0;
a = 373.15  here 100 will be added to this.tempC 
b = 373.15  ,there is already 100 in this.tempC .so , (this.tempC || a) will take value of this.tempC rather than value of a;

2). What is the output from the following program
const x = (...x) => x.reduce((a,b)=>a+b)/x.length
y = x(10,20,30)
console.log(`Hey ${x(10)} + 00010010 is = ${y}`)

Answer
Hey 10 + 00010010 is = 20 as x(10) will return 10 after going through reduce method and similarly y will get 20 as output of x(10,20,30);

