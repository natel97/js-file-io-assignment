'use strict'
const util = require('util')
const fs = require('fs')

class Employee {

  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
  }



  static parseFromFilePath(path) {
    let dat;
    let prom = new Promise((resolve, reject) => {
        resolve(fs.readFileSync(path).toString())
      },
      300)
    return prom
  }

  promote(title, num) {
    this.title = title
    this.salary += num
  }
}
module.exports = {
  Employee
}
