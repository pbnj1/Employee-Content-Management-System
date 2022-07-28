// INITIAL REQUIRES - MAKE SURE TO CHANGE VARIABLE NAMES
const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const employeeDb = require("./db");

// require("console.table");

// DISPLAY LOGO TEXT, LOAD MAIN PROMPTS - CHANGE VARIABLE NAMES
function init() {
  const logoText = logo({ name: "Employee Manager" }).render();
  console.log(logoText);
  loadMainPrompts();
}
//PW OPTIONAL ONES THAT I DID NOT PUT IN BELOW: VIEW ALL EMPLOYEES BY DEPARTMENT, VIEW ALL EMPLOYEES BY MANAGER,
// UPDATE EMPLOYEE MANAGER, REMOVE DEPARTMENT, VIEW TOTAL UTILIZED BUDGET BY DEPARTMENT
function loadMainPrompts() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "View All Roles",
          value: "VIEW_Roles",
        },
        {
          name: "Add A Department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Add A Role",
          value: "ADD_ROLE",
        },
        {
          name: "Add An Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Update An Employee Role",
          value: "UPDATE_ROLE",
        },
        {
          name: "exit",
          value: "EXIT",
        },
      ],
    },
  ]).then((res) => {
    let choice = res.choice;
    // CALL THE APPROPRIATE FUNCTION DEPENDING ON WHAT THE USER CHOSE
    switch (choice) {
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "VIEW_DEPARTMENTS":
        viewDepartments();
        break;
      case "VIEW_Roles":
        viewRoles();
        break;
      case "ADD_DEPARTMENT":
        addDepartments();
        break;
      case "ADD_ROLE":
        addRole();
        break;
      case "ADD_EMPLOYEE":
        addEmployee();
        break;
      case "UPDATE_ROLE":
        updateRole();
        break;
      default:
        exit();
    }
  });
}

// VIEW ALL EMPLOYEES SOURCE CODE - MAKE SURE TO CHANGE OUT NAMES
// make one of these functions for each switch case above
function viewEmployees() {
  employeeDb
    .findEmployees()
    .then(([employeeData]) => {
      let employees = employeeData;
      console.log("\n");
      console.table(employees);
    })
    .then(() => loadMainPrompts());
}

function viewDepartments() {
  employeeDb
    .findDepartments()
    .then(([departmentData]) => {
      let department = departmentData;
      console.log("\n");
      console.table(department);
    })
    .then(() => loadMainPrompts());
}

function viewRoles() {
  employeeDb
    .viewRolesTitle()
    .then(([res]) => {
      let roles = res;
      console.log("\n");
      console.table(roles);
    })
    .then(() => loadMainPrompts());
}

function addDepartments() {
  prompt([
    {
      type: "input",
      name: "newDepartment",
      message: "What department would you like to add?",
    },
  ])
    .then((res) => {
      let answer = res;
      employeeDb.addDept(answer);
      console.log("New department added!");
      console.log("\n");
      console.table(answer);
    })
    .then(() => loadMainPrompts());
}

function addRole() {
  prompt([
    {
      type: "input",
      name: "title",
      message: "What is the new employee role you would like to add?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary for this role?",
    },
    {
      type: "input",
      name: "department_id",
      message: "What is the new employee id for this role?",
    },
  ])
    .then((res) => {
      let answer = res;
      employeeDb.addEmployeeRole(answer);
      console.log("New role added!");
      console.log("\n");
      console.table(answer);
    })
    .then(() => loadMainPrompts());
}

function addEmployee() {
  prompt([
    {
      type: "input",
      name: "first_name",
      message:"What is the first name of your new employee that you would like to add?",
    },
    {
      type: "input",
      name: "last_name",
      message:"What is the last name of your new employee that you would like to add?",
    },
    {
      type: "input",
      name: "role",
      message: "What is the role of your new employee?",
    },
    {
      type: "input",
      name: "manager",
      message: "What is the manager id of your new employee?",
    },
  ])
    .then((res) => {
      let answer = res;
      employeeDb.addNewEmployee(answer);
      console.log("New employee added!");
      console.log("\n");
      console.table(answer);
    })
    .then(() => loadMainPrompts());
}

function updateRole() {
  prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the first name of the employee you want to update?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the last name of the employee that you would like to update?",
    },
    {
      type: "input",
      name: "role",
      message: "What is the new role of your employee?",
    },
  ])
    .then((res) => {
      let answer = res;
      employeeDb.updateEmployeeRole(answer);
      console.log("Role updated!");
      console.log("\n");
      console.table(answer);
    })
    .then(() => loadMainPrompts());
}

function exit() {
  console.log("Have a good day!");
}


init();
