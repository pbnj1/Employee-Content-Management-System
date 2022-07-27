const connection = require ("./connection");
const { prompt } = require("inquirer")

class EmployeeDB{
//     //keeping a reference to the connection on the class in case we need it later
    constructor(connection){
        this.connection = connection;
    }


// find all employees and join with roles and departments to display roles, salaries, departments and 
// managers.  TO MEET THE REQUIREMENTS WE CAN JUST SELECT ALL FROM EMPLOYEES TABLE AND LOG IT OUT
// employee.id, employee.first_name, employee.last_name, role.title,department.name AS department, role.salary, CONCAT(managerfirst_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee. role_id = role.id LEFT JOIN department on role.department_id = department. id LEFT JOIN employee manager on manager.id = employee.manager_id;"

findEmployees() {
    console.log(" inside findEmployees");
    return this.connection.promise().query(
        "SELECT * FROM employees"
        );
}

findDepartments() {
    console.log(" inside findDepartments");
    return this.connection.promise().query(
        "SELECT name FROM department"
        );
}

viewRolesTitle() {
    console.log(" inside viewRolesTitle");
    return this.connection.promise().query(
        "SELECT role.title FROM role"
        );
}

//PW NEED TO FIGURE OUT HOW TO INPUT THE VALUES DATA..
// addDept = async () => {
//     const answer = await prompt();
//     console.log(" inside addDept");
//     prompt([ { 
//       type: "input",
//       name: "newDepartment",
//       message: "What department would you like to add?"
// }
// ])
//     return this.connection.promise().query(
//         "INSERT into department SET ?",{
//         name: answer.newDepartment,  
//         },
       
//         );
// }
// addDept(answer){
//     console.log("inside addDept");
//     return this.connection.promise().query(`INSERT into department (name) VALUES ("${answer}")`)
// };
addDept(answer) {
    console.log(answer)
    console.log("inside addDept");
    // return this.connection.promise().query(`INSERT INTO department (name) VALUES ("${answer}")`)
    return this.connection.promise().query(
         "INSERT into department SET ? ",{
             name: answer.newDepartment,  
         })};
        
// }
addEmployeeRole(answer) {
    console.log(answer)
    console.log("inside addEmployeeRole");
    return this.connection.promise().query(`INSERT INTO role (title, salary, department_id) VALUES ("${answer}")`)
      
};

addNewEmployee(answer){
    console.log(answer)
    console.log("inside addNewEmployee");
    return this.connection.promise().query(`INSERT into employees (first_name, last_name, role_id, manager_id) VALUES ("${answer}")`)
}

updateEmployeeRole(){
    console.log("inside updateEmployeeRole");
    return this.connection.promise().query(
        "INSERT into role (title, salary, department_id) "
    )
}


// // const viewAllEmployees = () => {
  
// //     const query = `SELECT * FROM employee`
      
// //     connection.query(
// //       query,
// //       (err, results) => {
// //         if (err) throw err;
// //         console.log('\n');
// //         console.table(results);
// //         loadMainPrompts();
// //     })
// //   }


//update the employee's role
updateEmployeeRole(employeeId, roleId){
    return this.connection.promise().query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
        [roleID, employeeId]
    );
}

// // find all possible employees except the given employee id? BONUS? 3:24 video
// findAllPossibleManagers(employeeId) {
//     return this.connection.promise().query(
//         "SELECT id, first_name, last_name FROM employee WHERE id ≠ ?",
//         employeeId
//     );
// }

// //update employee manager -BONUS
// updateEmployeeManager(employeeId, managerID){
//     return this.connnection.promise().query(
//         "UPDATE employee SET manager_id = ? WHERE id = ?",
//         [managerID, employeeId]
//     );
// }




// //remove a roll -BONUS
// removeRole(roleId){
//     return this.connection.promise().query("DELETE FROM role WHERE ID = ?",
//     roleID);
// }

// //find all departments - BONUS?
// findAllDepartments(){
//     return this.connection.promise().query("SELECT department.id, department.name From department;"
//     );
// }

// //remove an employee with a given id - BONUS
// removeEmployee(employeeID) {
// return this.connection.promise().query(
//     "DELETE FROM employee WHERE id = ?",
//     employeeId
// );
// }
// }
}
module.exports = new EmployeeDB(connection);