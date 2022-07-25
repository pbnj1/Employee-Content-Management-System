const connection = require ("./connection");

class DB{
    //keeping a reference to the connection on the class in case we need it later
    constructor(connection){
        this.connection = connection;
    }
}

// find all employees and join with roles and departments to display roles, salaries, departments and 
// managers

// findAllEmployees(){
//     return this.connection.promise().query(
//         "SELECT employee.id, employee.first_name, employee.last_name, role.title,
//         department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) 
//         AS manager FROM employee LEFT JOIN role on employee. role_id = role.id LEFT JOIN 
//         department on role.department_id = department. id LEFT JOIN employee manager on manager.id =
//         employee.manager_id;"
//         );
    
    
// }

updateEmployeeManager(employeeId, managerID){
    return this.connnection.promise().query(
        "UPDATE employee SET manager_id = ? WHERE id = ?",
        [managerID, employeeId]
    );
}

//Creat a new department
createDepartment(department) {
    return this.connection.promise().query("INSERT INTO department SET ?", 
    department
    );
}

