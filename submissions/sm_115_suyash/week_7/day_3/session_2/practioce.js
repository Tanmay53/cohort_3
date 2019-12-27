// var obj = {
//   i: "suyash",
//   c: () => console.log(this.i),
//   m: function() {
//     console.log(this.i);
//   }
// };
// obj.c();

// var a = [4, 5, 7, 8, 6];
// var b = [];
// function evenArr(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       b.push(arr[i]);
//     }
//   }
// }
// evenArr(a);
// console.log(b);

// const pared = {
//   left: 1,
//   right: 2
// };
// delete pared.left;
// console.log("left" in pared);
// console.log(typeof []);

// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};

// console.log(object1 == object2);
// // → true
// console.log(object1 == object3);
// // → false

// object1.value = 15;
// console.log(object2.value);
// // → 15
// console.log(object3.value);
// // → 10

// function remove(array, index) {
//   return array.slice(0, index).concat(array.slice(index + 1));
// }
// console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

// let arr = ["a", "b", "c", "d", "e"];
// arr = arr.slice(3);
// console.log(arr);

// let str = " hello bees hey ";
// console.log(str);

// console.log(typeof JSON);

// var person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   myFunction: () => {
//     return person.firstName;
//   }
// };

// console.log(person.myFunction());

// let arr = [3, 5, 6, 7, 6, 15, 18, 25];
// ele = arr.findIndex(val => {
//   return val > 12;
// });
// console.log(ele);

// console.log(Number.MIN_SAFE_INTEGER);
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class person1 extends Person {}

// const obj = {
//   i: 10,
//   b: () => console.log(obj.i),
//   c: function() {
//     console.log(this.i);
//   }
// };
// obj.c(), obj.b();

// function Person(name, energy) {
//   person = Object.create(Person.prototype);
//   person.name = name;
//   person.energy = energy;
//   return person;
//   // this.name = name;
//   // this.energy = energy;
// }

// Person.prototype.eat = function(food) {
//   console.log(`${this.name} is eat`);
//   return (this.energy += food);
// };

// Person.prototype.sleep = function(time) {
//   console.log(`${this.name} is sleep`);
//   return (this.energy += time);
// };
// Person.prototype.code = function(time) {
//   console.log(`${this.name} is code`);
//   return (this.energy -= time);
// };

// const per1 = new Person("deepanshu", 10);

// per1.code();
// per1.sleep();
// per1.eat();

// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);
// output: "Rectangle"

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// const per1 = new Person("suyash");
// console.log(per1.name);

// <--------* Call * Apply * Bind *---------------->

// const obj = {
//   name: "Suyash",
//   age: 20,
//   type: "Human",
//   company: {
//     name: "computer solution",
//     type: "Organistation"
//   }
// };
// function display(arg1, arg2) {
//   console.log(`${this.name} is ${this.type}`);
//   console.log(`45 / 5 = ${(arg2, arg1)}`);
// }
// Call method
// display.call(obj,5,45);
// display.call(obj.company,5,45);

// let arr = ["Agr1", "45"];
// Apply method
// display.apply(obj, arr);
// display.apply(obj.company, arr);

// Bind method
// let p = display.bind(obj, arr);
// let pc = display.bind(obj.company, arr);
// p();
// pc();

//<-----------------* Promise *----------------->
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 100);
//   setTimeout(() => {
//     reject("rejected");
//   }, 50);
// });
// promise
//   .then(res => {
//     console.log("Its", res);
//   })
//   .catch(err => {
//     console.log("Its", err);
//   })
//   .finally(() => {
//     console.log("finally its excuted");
//   });
// console.log(promise);

// <---------------Fetch Api--------------->
// let user_id = "albseb511";
// let base_url = "https://api.github.com/search/users?q=";

// function fetApi() {
//   fetch(base_url + user_id)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       let repo = data.items[0].repos_url;
//       fetch(repo)
//         .then(res => res.json())
//         .then(repoData => console.log(repoData));
//       // fetRepo(repo);
//     });
// }
// function fetRepo(repo) {
//   fetch(repo)
//     .then(res => res.json())
//     .then(repoData => console.log(repoData));
// }
// fetApi();
