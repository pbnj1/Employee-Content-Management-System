// INITIAL REQUIRES - MAKE SURE TO CHANGE VARIABLE NAMES
const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const employeeDb = require("./db");
const EmployeeDB = require("./db/index.js" );
// require("console.table");


// DISPLAY LOGO TEXT, LOAD MAIN PROMPTS - CHANGE VARIABLE NAMES
function init(){
    const logoText = logo({ name: "Employee Manager" }).render();
    console.log(logoText);
    loadMainPrompts();
}
//PW OPTIONAL ONES THAT I DID NOT PUT IN BELOW: VIEW ALL EMPLOYEES BY DEPARTMENT, VIEW ALL EMPLOYEES BY MANAGER,
// UPDATE EMPLOYEE MANAGER, REMOVE DEPARTMENT, VIEW TOTAL UTILIZED BUDGET BY DEPARTMENT
function loadMainPrompts(){
    prompt([
 {
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices:[
        {
            name: "View All Employees",
            value: "VIEW_EMPLOYEES"
        },
        {
            name: "View All Departments",
            value: "VIEW_DEPARTMENTS"
        },
        {
            name: "View All Roles",
            value: "VIEW_Roles"
        },
        {
            name: "Add A Department",
            value: "ADD_DEPARTMENT"
        },
        {
            name: "Add A Role",
            value: "ADD_ROLE"
        },
        {
            name: "Add An Employee",
            value: "ADD_EMPLOYEE"
        },
        {
            name: "Update An Employee Role",
            value: "UPDATE_ROLE"
        },
        {
            name: "exit",
            value: "EXIT"
        },
    ]
        }
    ]).then(res =>{
        let choice = res.choice;
        // CALL THE APPROPRIATE FUNCTION DEPENDING ON WHAT THE USER CHOSE
        switch(choice){
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
            viewRole();
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
    })


}

// VIEW ALL EMPLOYEES SOURCE CODE - MAKE SURE TO CHANGE OUT NAMES
// make one of these functions for each switch case above
function viewEmployees(){
    console.log(" inside viewEmployees")
    EmployeeDB.findEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
    })
    .then(() => loadMainPrompts());
}

// view all employees that belong to a department - no more on the screen for this example
// function viewEmployeesByDepartment(){
//     employeeDb.findAllDepartment()
//     .then(({rows}) =>{
//         let department = rows;
//         const departmentChoices = department.map(({id, name}) => ({
//             name: name,
//         }))
//     })
// }
init();
