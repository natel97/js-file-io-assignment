'use strict'

const util = require('util')
const path = require('path')
const {
  Employee
} = require('./Employee')

let test

const employee =
  Employee
  .parseFromFilePath(
    path.resolve(__dirname, 'employee.json')
  )

employee.then(emp => {
  emp = JSON.parse(emp)
  let employee = new Employee(emp.name, emp.title, emp.salary)
  console.log(`is Employee? ${employee instanceof Employee}`)
  console.log(`parsed: ${util.inspect(employee)}`)

  employee.promote('chief petty grunt', 10)

  console.log(`after promotion: ${util.inspect(employee)}`)
})
