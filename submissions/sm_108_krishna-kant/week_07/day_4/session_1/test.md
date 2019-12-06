#### FSD.JS.17.3

**SUBMISSION:**

- Create a new file `test.md` and copy these two questions into it, and write your answers into that.
- Explain the answer as well.

10. What is the value of `a`, `b`, `c`?

```javascript
class Room {
  constructor(l = 0, b = 0, h = 0, t = 0) {
    this.len = l;
    this.br = b;
    this.ht = h;
    this.tempC = t;
  }
  toKelvinFromCelsius(a = 0) {
    this.tempC = this.tempC || a;
    return this.tempC + 273.15;
  }
  toFarFromCelsius() {}
}

s1 = new Room(10, 10, 10);

c = s1.toKelvinFromCelsius();
a = s1.toKelvinFromCelsius(100);
b = s1.toKelvinFromCelsius(200);
```

Answer

```
c = 273.15, a = 373.15, b = 373.15
Explaination :
for
case 1 :
c = variable a = 0 variable tempC = 0 Because of Default values we are not passing any so tempC become 0 ,
case 2 :
a = we passed a = 100 and tempC is still 0 to tempC will assigned as 100 then 100 + 273.5 this will return
case 3 :
b = we already assigned 100 to tempC this time tempC is not null so it will give true in OR statement and
reassigned as 100 then again 100 + 273.5 this will return
```

11. What is the output from the following program

```javascript
const x = (...x) => x.reduce((a, b) => a + b) / x.length;
y = x(10, 20, 30);
console.log(`Hey ${x(10)} + 00010010 is = ${y}`);
```

Answer

```
Hey 10 + 00010010 is = 20

reduce will add Array result in 60 then divide by length which is 3 then output is 20
```
