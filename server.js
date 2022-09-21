const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table")

const connection = mysql.createConnection({
   host:"localhost",
   port: 3306,
   user: "root",
   password: "123456789",
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
   inquirer.prompt([
      {
         type: "list",
         message: "What would like to do today?",
         name: "action",
         choices: [
            "View All Employees",
            "View All Departments",
            "View All Roles",
            "View All Employees by Department",
            "View All Employees by Role",
            "Add Department",
            "Add Role",
            "Add Employees",
            "Update Employee Role",
            "Exit"
         ]
      }
   ]).then(function(answers){
      console.log(answers);
       switch (answers.action){

         //View All Employee
         case "View All Employees":
            viewAllEmployees();
         break;

         //View All Departments
         case "View All Departments":
            viewAllDepts();
         break;
         
         //View All Roles
         case "View All Roles":
            viewAllRoles();
         break;

         //View All Employees by department
         case "View All Employees by Department":
            viewAllEmployeesByDept();
         break;         

         //View All Employees by Role
         case "View All Employees by Role":
            viewAllEmployeesByRole();
         break;

         //Add Role
         case "Add Role":
            addRole();
         break;

         //Add Department
         case "Add Department":
            addDept();
         break;

         //Add Employees
         case "Add Employees":
            addEmployees();
         break;

         //Add Employees Role
         case "Add Employees Role":
            addEmployeeRole();
         break

         //Exit
         case "Exit":
            console.log("=================");
            console.log("");
            console.log("  Thank You  ");
            console.log("");
            console.log("=================");
            connection.end();
         break;
      }
   })
};

//View Employees
function viewAllEmployees(){

   connection.query("SELECT * FROM employee", 
   function(err, res){
      if(err) throw err
      console.log("");
      console.log("==Employee List==");
      console.log("");
      console.table(res)
      runEmployeeDB()

   })
}

//View Department
function viewAllDepts(){
   console.log("HI");

   connection.query("SELECT department.id AS ID, department.name AS Department FROM department", 
   function(err, res){
      if(err) throw err
      console.log("");
      console.log("==Department List==");
      console.log("");
      console.table(res)
      runEmployeeDB()

   })
}

//View Role
function viewAllRoles(){

   connection.query("SELECT role.id AS Dept_ID, role.title AS Title FROM role", 
   function(err, res){
      if(err) throw err
      console.log("");
      console.log("==Role List==");
      console.log("");
      console.table(res)
      runEmployeeDB()

   })
}

//View Employees by Department
function viewEmployeesByDept(){

   connection.query("ELECT employees.firstName AS First_Name, employees.lastName AS Last_Name, department.name AS Department FROM employees JOIN role ON employees.roleID = role.id JOIN department ON role.departmentID = department.id ORDER BY department.id;",
   function(err, res){
      if(err) throw err
      console.log("");
      console.log("==Employees List By Department==");
      console.log("");
      console.table(res)
      runEmployeeDB()

   })
}

//View Employees by Role
function viewAllEmployeesByRole(){

   connection.query("SELECT employees.firstName AS First_Name, employees.lastName AS Last_Name, role.title AS Title FROM employees JOIN role ON employees.roleID = role.id ORDER BY role.id", 
   function(err, res){
      if(err) throw err
      console.log("");
      console.log("==Employees List By Role==");
      console.log("");
      console.table(res)
      runEmployeeDB()

   })
}

//Role Array Set up 
let roleArr =[];

function selectRole(){
   connection.query("SELECT * FROM role", function(err, res){
      if(err) throw err
      for (var i =0; i< res.length; i++){
         roleArr.push(res[i].title);
      }
   })
   return roleArr;
}

//Manager Array set up
let managerArr =[];

function selectManager(){
   connection.query("SELECT firstName * lastName FROM employees ", function(err, res){
      if(err) throw err
      for (var i =0; i< res.length; i++){
         selectManager.push(res[i].firstName);
      }
   })
   return managerArr;
  
}

//Department Array set up


function selectDepartment(){
   let deprtArr =[];
   connection.query("SELECT * FROM department", function(err, res){
      if(err) throw err
      for (var i =0; i< res.length; i++){
         deprtArr.push(res[i].name);
      }
   })
   console.log(deprtArr);
   return deprtArr;
  
}

//Add New Employee
function addEmployee() { 
   inquirer.prompt([
       {
         name: "firstName",
         type: "input",
         message: "First Name: "
       },
       {
         name: "lastName",
         type: "input",
         message: "Last Name: "
       },
       {
         name: "role",
         type: "list",
         message: "What is the new employee's title? ",
         choices: selectRole()
       },
       {
           name: "choice",
           type: "rawlist",
           message: "Who is managing the new employee? ",
           choices: selectManager()
       }

   ]).then(function (answers) {
     var roleId = selectRole().indexOf(answers.role) + 1
     var managerId = selectManager().indexOf(answers.choice) + 1
     connection.query("INSERT INTO employees SET ?", 
     {
         firstName: answers.firstName,
         lastName: answers.lastName,
         managerID: managerId,
         roleID: roleId
         
     }, 
     function(err){
         if (err) throw err
         console.table(answers)
         runEmployeeDB()
     })

 })
}

//Update Employee Role

function updateEmployeeRole() {
   connection.query("SELECT employees.lastName, role.title FROM employees JOIN role ON employees.roleID = role.id;", 
   (err, res) => {
           if (err) throw err;

           inquirer.prompt([
               {
                   name: "lastName",
                   type: "rawlist",
                   choices: function () {
                       var lastName = [];
                       for (var i = 0; i < res.length; i++) {
                           lastName.push(res[i].lastName);
                       }
                       return lastName;
                   },
                   message: "What is the employee's last name? ",
               },
               {
                   name: "role",
                   type: "rawlist",
                   message: "What is the employee's new title? ",
                   choices: selectRole()
               },
           ]).then(function (answers) {
               var roleId = selectRole().indexOf(answers.role) + 1;
               connection.query("UPDATE employees SET WHERE ?",
                   {
                       lastName: answers.lastName,
                       roleID: roleId
                   },
       
                   function (err) {
                       if (err)
                           throw err;
                       console.table(answers);
                       runEmployeeDB();
                   });
           });
       });
 }

 //Add Department
 function addDept() { 

   inquirer.prompt([
       {
         name: "name",
         type: "input",
         message: "What Department would you like to add? "
       },

   ]).then(function(answers) {
       connection.query("INSERT INTO department SET ? ",
           {
             name: answers.name,
           },
           function(err, res) {
               if (err) throw err
               console.table("Success for added it!");
               runEmployeeDB();
           }
       )
   })
 }

 //Role
 function addRole() { 
   connection.query("SELECT role.title AS Title, role.salary AS Salary FROM role LEFT JOIN department.name AS Department FROM department;",   function(err, res) {
     inquirer.prompt([
         {
           name: "title",
           type: "input",
           message: "What is name of the new role?"
         },
         {
           name: "salary",
           type: "input",
           message: "What is the salary of the new role?"
         } ,
         {
           name: "department",
           type: "rawlist",
           message: "Under which department does this new role fall?",
           choices: selectDepartment()
         }
     ]).then(function(answers) {
         var deptId = selectDepartment()
         console.log(answers);  
         connection.query(
             "INSERT INTO role SET ?",
             {
               title: answers.title,
               salary: answers.salary,
               departmentID: deptId
             },
             function(err) {
                 if (err) throw err
                 console.table(answers);
                 runEmployeeDB();
             }
         )     
     });
   });
};