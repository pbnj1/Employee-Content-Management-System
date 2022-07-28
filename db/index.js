const connection = require("./connection");
const { prompt } = require("inquirer");

class EmployeeDB {

  constructor(connection) {
    this.connection = connection;
  }


  findEmployees() {
    return this.connection.promise().query("SELECT * FROM employees");
  }

  findDepartments() {
    return this.connection.promise().query("SELECT name FROM department");
  }

  viewRolesTitle() {
    return this.connection.promise().query("SELECT role.title FROM role");
  }


  addDept(answer) {
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
    return this.connection.promise().query("INSERT INTO employees SET ? ",
    {
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: answer.role_id,
        manager_id: answer.manager_id,
    });
  }

  updateEmployeeRole(answer) {
    return this.connection.promise().query(" INSERT INTO employees SET ? ",
      {
        first_name: answer.first_name,
        last_name: answer.last_name,
        role: answer.role
        
      });
  }

  
}
module.exports = new EmployeeDB(connection);
