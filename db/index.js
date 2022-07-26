const connection = require ("./connection");

class DB{
    //keeping a reference to the connection on the class in case we need it later
    constructor(connection){
        this.connection = connection;
    }


// find all employees and join with roles and departments to display roles, salaries, departments and 
// managers.  TO MEET THE REQUIREMENTS WE CAN JUST SELECT ALL FROM EMPLOYEES TABLE AND LOG IT OUT
// employee.id, employee.first_name, employee.last_name, role.title,department.name AS department, role.salary, CONCAT(managerfirst_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee. role_id = role.id LEFT JOIN department on role.department_id = department. id LEFT JOIN employee manager on manager.id = employee.manager_id;"

// findAllEmployees() {
//     return this.connection.promise().query(
//         "SELECT * FROM employees"
//         );
// }

// const viewAllEmployees = () => {
  
//     const query = `
//     SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, salary, IFNULL(concat(m.first_name, ' ', m.last_name), 'N/A') AS manager
//     FROM employee e
//     LEFT JOIN employee m
//     ON m.id = e.manager_id
//     JOIN role
//     ON e.role_id = role.id
//     JOIN department
//     ON role.department_id = department.id;`
      
//     connection.query(
//       query,
//       (err, results) => {
//         if (err) throw err;
//         console.log('\n');
//         console.table(results);
//         start();
//     })
//   }



//Creat a new department
createDepartment(department) {
    return this.connection.promise().query("INSERT INTO department SET ?", 
    department
    );
}

//update the employee's role
updateEmployeeRole(employeeId, roleId){
    return this.connection.promise().query(
        "UPDATE employee SET role_id = ? WHERE id = ?",
        [roleID, employeeId]
    );
}

// find all possible employees except the given employee id? BONUS? 3:24 video
findAllPossibleManagers(employeeId) {
    return this.connection.promise().query(
        "SELECT id, first_name, last_name FROM employee WHERE id ≠ ?",
        employeeId
    );
}

//update employee manager -BONUS
updateEmployeeManager(employeeId, managerID){
    return this.connnection.promise().query(
        "UPDATE employee SET manager_id = ? WHERE id = ?",
        [managerID, employeeId]
    );
}




//remove a roll -BONUS
removeRole(roleId){
    return this.connection.promise().query("DELETE FROM role WHERE ID = ?",
    roleID);
}

//find all departments - BONUS?
findAllDepartments(){
    return this.connection.promise().query("SELECT department.id, department.name From department;"
    );
}

//remove an employee with a given id - BONUS
removeEmployee(employeeID) {
return this.connection.promise().query(
    "DELETE FROM employee WHERE id = ?",
    employeeId
);
}
}