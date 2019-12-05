class Room{
constructor(l = 0,b = 0, h = 0,t = 0 ){
this.len = l;
this.br = b;
this.ht = h;
this.tempC = t;
}
toKelvinFromCelsius( a = 0){
this.tempC = this.tempC || a
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

a = s1.toKelvinFromCelsius(100)
a = 373.15,
b = 473.15,
c = 273.15
toKelvinFromCelsius(a=0) it have default value as zero and when we assign value of a=100 ,
its make 273.15+100=373.15.

and for b , a is assgined as 200 so output is becoming 273.15+200 = 473.15.

and for c , a is assgined as default value as 0 so output is becoming 273.15+0 = 273.15

````
11. What is the output from the following program
```javascript
const x = (...x) => x.reduce((a,b)=>a+b)/x.length
y = x(10,20,30)
console.log(`Hey ${x(10)} + 00010010 is = ${y}`)
````

Answer

```
x = 10, y = 20
```
