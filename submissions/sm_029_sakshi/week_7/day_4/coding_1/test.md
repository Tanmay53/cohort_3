10. What is the value of `a`, `b`, `c`?
```javascript

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
Answer

```
c=273.15, a=373.15, b=473.15
```
11. What is the output from the following program
```javascript
const x = (...x) => x.reduce((a,b)=>a+b)/x.length
y = x(10,20,30)
console.log(`Hey ${x(10)} + 00010010 is = ${y}`)
```
Answer

```
20, as sum/length=60/3
```