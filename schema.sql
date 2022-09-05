DROP DATABASE IF EXISTS employee_db;

CREATE  DATABASE employee_db;

USE employee_db;

--Create EMPLOYEE TABLE =================
CREATE TABLE employee(

   --create unique id for item
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   firstName VARCHAR(30),
   lastName VARCHAR(30),
   roleID INT,
   managerID INT
);

--Create DEPARTMENT TABLE ================
CREATE TABLE department(
   --create unique id for item
   id INT PRIMARY KEY,
   name VARCHAR(30)
);

--Create EMPLOYEE ROLE =================
CREATE Table role(
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(30),
   salary DECIMAL(9,2),
   departmentID INT
);