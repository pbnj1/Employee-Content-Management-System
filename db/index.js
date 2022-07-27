const connection = require("./connection");
const { prompt } = require("inquirer");

class EmployeeDB {

  constructor(connection) {
    this.connection = connection;
  }


  findEmployees() {
    console.log("inside findEmployees");
    return this.connection.promise().query("SELECT * FROM employees");
  }

  findDepartments() {
    console.log(" inside findDepartments");
    return this.connection.promise().query("SELECT name FROM department");
  }

  viewRolesTitle() {
    console.log(" inside viewRolesTitle");
    return this.connection.promise().query("SELECT role.title FROM role");
  }


  addDept(answer) {
    console.log(answer);
    console.log("inside addDept");
    return this.connection.promise().query("INSERT into department SET ? ", {
      name: answer.newDepartment,
    });
  }


  addEmployeeRole(answer) {
    console.log(answer);
    console.log("inside addEmployeeRole");
    return this.connection.promise().query("INSERT into role SET ? ", {
      title: answer.title,
      salary: answer.salary,
      department_id: answer.department_id,
    });
  }

  addNewEmployee(answer) {
    console.log(answer);
    console.log("inside addNewEmployee");
    return this.connection.promise().query("INSERT into employees SET ? ",{
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: answer.role_id,
        manager_id: answer.manager_id,
      });
  }

  updateEmployeeRole(answer) {
    console.log("inside updateEmployeeRole");
    return this.connection.promise().query("INSERT into roles SET ? ",
      {
        first_name: answer.title,
        last_name: answer.salary,
        role_id: answer.department_id,
      });
  }

  
 
}
module.exports = new EmployeeDB(connection);
