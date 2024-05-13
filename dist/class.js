"use strict";
class Employee {
    constructor(n, a) {
        this.name = n,
            this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("Manav", 20);
console.log(e.greet("Hii There"));
