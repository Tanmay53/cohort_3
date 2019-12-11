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
c = 273.15
a = 373.15
b = 373.15

Whilst calling the function toKelvinFromCelsius,first time for c, no value is passed along the function. Therefore default value 0 is assigned to a. Since tempC was also passed the default value 0, the value returned is 0 + 273.15 = 273.15

When the function is again called for a with an argument 100, the value of a is set to 100. Since a is 100 and tempC is still 0, it takes the default value 100 and sets it to tempC. The value returned is 100 + 273.15 = 373.15

When function is called for b with an argument 200, the value of a is set to 200. Here, the default value is not taken as the tempC is already having value 100 from last operation. The value returned is 100 + 273.15 = 373.15
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

x(10) returns value 10 as the value accumulated is 10 and the arguments passed in x was 1. So, 10/1 returns 10.

x(10,20,30) returns value 20 as the value accumulated is 60 and the arguments passed in x were 3. So, 60/3 returns 20.

```
