'use strict'

const fs = require('fs')

class Employee {

  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
  }

  static parseFromFilePath(path) {
    let file = JSON.parse(fs.readFileSync(path))
    return new Employee(file.name, file.title, file.salary)

  }
  promote(title, num) {
    this.title = title
    this.salary += num
  }
}
module.exports = {
  Employee
}
