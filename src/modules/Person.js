'use strict'

export default class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }

    introduce () {
        console.log(`Hello! My name is ${this.name} and I am ${this.age} years old.`);
    }
}
