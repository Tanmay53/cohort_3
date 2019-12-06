10. What is the value of `a`, `b`, `c`?

```
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

```

c = 273.15; both this.tempC and argument 'a' are zero, so overall truth value will be false and this.tempC will be initialize with a zero.

a = 373.15;  this.tempC is zero but arguement 'a' is 100 which is true and will be taken as this.tempC

b = 373.15; this.tempC is 100 which will be taken and 273.15 will be added



11. What is the output from the following program

```
const x = (...x) => x.reduce((a,b)=>a+b)/x.length
y = x(10,20,30)
console.log(`Hey ${x(10)} + 00010010 is = ${y}`)

```

```
Hey 10 + 00010010 is = 20
```

y = 20

array x will be reduces to 60, which will be divided by 3

again x is a single element array which will reduce to 10

```

```