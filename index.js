// INITIAL REQUIRES - MAKE SURE TO CHANGE VARIABLE NAMES
const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
require("console.table");

init();

// DISPLAY LOGO TEXT, LOAD MAIN PROMPTS - CHANGE VARIABLE NAMES
function init(){
    const logoText = logo({ name: "Employee Manager" }).render();

    console.log(logoText);

    loadMainPrompts();
}

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
            
        }
    })


}

// VIEW ALL EMPLOYEES SOURCE CODE - MAKE SURE TO CHANGE OUT NAMES
// make one of these functions for each switch case above
function viewEmployees(){
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
    })
    .then(() => loadMainPrompts());
}