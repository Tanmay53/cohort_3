1.What is the value of a, b, c?

```class Room{
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

````
answer
````
c = 273.15 // we invoked the function of toKelvinFromCelsius and arguments are null by defalut take argument as 0
a = 373.15 // we invoked the function of toKelvinFromCelsius and passing argument is 100  then it returns 100 + 273.15
b = 473.15 // we invoked the function of toKelvinFromCelsius and passing argument is 200  then it returns 200 + 273.15
````
2.What is the output from the following program?
```
const x = (...x) => x.reduce((a,b)=>a+b)/x.length
y = x(10,20,30)
console.log(`Hey ${x(10)} + 00010010 is = ${y}`)
`````

answer 

```
hey 10 + 00010010 is = 20 //here x(10) is only one array elements so x(10) is  10 and the out put of y is step 1: (10+20/3) step2 :(10+30/2)  so output of y is 20 