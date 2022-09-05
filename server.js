const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table")

const connection = mysql.createConnection({
   host:"localhost",
   port: 3000,
   user: "root",
   password: "password",
   database: "employee_db"
});

connection.connect(function(err){
  if(err) throw err;

  console.log("Conneted as ID" + connection.threadId);
  console.clear();
  console.log("=================");
  console.log("");
  console.log("  Welcom to the Employee Database  ");
  console.log("");
  console.log("=================");
  runEmployeeDB();
});

//List of User Type

function runEmployeeDB(){
   inquirer.createPromptModule([
      {
         type: "list",
         message: "What would like to do today?",
         name: "action",
         choices: [
            "view All Employees",
            "view All Departments",
            "view All Roles",
            "view All Employees by Department",
            "view All Employees by Role",
            "Add Department",
            "Add Role",
            "Add Employees",
            "Update Employee Role",
            "Exit"
         ]
      }
   ]).then(function(answers){
       switch (answers.action){

         //View All Employee
         case "View All Employees":
            viewAllEmployees();
         break;
         
         //View All Roles
         case "View All Roles":
            viewAllRoles();
         break;

         //View All Employees by dep
         case "View All Employees by Role":
            viewAllEmployeesByRole();
         break;
   })
}
