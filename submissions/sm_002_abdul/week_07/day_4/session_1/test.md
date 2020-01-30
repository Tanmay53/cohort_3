#### FSD.JS.17.3
**SUBMISSION:**
- Create a new file `test.md` and copy these two questions into it, and write your answers into that. 
- Explain the answer as well.


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
1. the value of `a` is 273.15 as 
`toKelvinFromCelsius( a = 0){
        this.tempC =  this.tempC || a
        return this.tempC+273.15;
    }`
    in this equation this.tempC is zero which is a falsy value, So it will take the right value which we didn't pass.
    So By default it will be zero;
    so this.tempC=0;
    and we return this.tempC-->which is 0+273.15 -->273.15

2. the value of `b` is 100+273.15 as 
`toKelvinFromCelsius( a = 0){
        this.tempC =  this.tempC || a
        return this.tempC+273.15;
    }`
    as a is more truthy than 0; so we return 100+273.15-->373.15

3. the value of `c` is 200+273.15 as 
`toKelvinFromCelsius( a = 0){
        this.tempC =  this.tempC || a
        return this.tempC+273.15;
    }`
    as a is more truthy than 0; so we return 200+273.15-->473.15

```

```
11. What is the output from the following program
```javascript
const x = (...x) => x.reduce((a,b)=>a+b)/x.length
y = x(10,20,30)
console.log(`Hey ${x(10)} + 00010010 is = ${y}`)
```

`Hey ${x(10)} + 00010010 is = ${y}` 

 ${x(10)} this given 10/1 -->10

  ${y} this gives x(10,20,30) --> 10+20+30/3 (by reduce method and division of x.length) -->20

  Hence the Answer
```

```
