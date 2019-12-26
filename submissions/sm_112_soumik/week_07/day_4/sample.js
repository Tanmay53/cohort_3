class Parent {
  constructor(name) {
    this.name = name;
    this.age = 12;
  }
  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
  }

  printData() {
    console.log(this.name);
  }
}

let child = new Child("Somik");
console.log(child.getAge());
child.setAge(15);
console.log(child.getAge());
