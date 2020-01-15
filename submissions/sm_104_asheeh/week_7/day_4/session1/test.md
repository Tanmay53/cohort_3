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
Answer

```
s1 = {len: 10, br: 10, ht: 10, tempC: 0}
c = 0 + 273.15 (as tempC = 0)
  = 273.15
a = 100 + 273.15 (as tempC = 100)
  = 373.15
b = 100 + 273.15 (as tempC = 100)
  = 373.15
```
11. What is the output from the following program
```javascript
const x = (...x) => x.reduce((a,b)=>a+b)/x.length
y = x(10,20,30)
console.log(`Hey ${x(10)} + 00010010 is = ${y}`)
```
Answer

```
...x is a spread function that will make an array out of given arguements inside function x.
x(10,20,30) = [10,20,30] 
Reduce function will reduce the value of given array to 60.
Then 60/3 = 20.
So y = 20.
And x = 10/1
      = 10.
Inside template literal everything given will be as it except if we give it inside block notation, which will refer to the value of a variable/function.
So, the answer will be: Hey 10 + 00010010 is = 20
```