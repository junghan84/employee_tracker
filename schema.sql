DROP DATABASE IF EXISTS employee_db;

CREATE  DATABASE employee_db;

USE employee_db;

--create table department
CREATE TABLE department(

   --create unique id for item
   id INT NOT NULL AUTO_INCREMENT,

   --dep_name to accept variable-length strings of max 30 characters
   dept_name VARCHAR(30) NOT NULL,

   --set PRIMARY KEY
   PRIMARY KEY(id)
);

--Create table employee
CREATE TABLE employee(

   --create unique id for item
   id INT NOT NULL AUTO_ICREMENT,

   --set first name to to accept variable-length strings of max 30 characters
   first_name VARCHAR(30) NOT NULL,

   --set last name to to accept variable-length strings of max 30 characters
   last_name VARCHAR(30) NOT NULL,

   --set rol id
   role_id INT NOT NULL,

   --set manager id
   manager_id INT NOT NULL,

   --set PRIMARY KEY
   PRIMARY KEY(id)
);

CREATE TABLE roles(

   --create unique id for item
   id INT NOT NULL AUTO_ICREMENT,

   --set title to accept variable-length strings of max 30 characters
   title VARCHAR(30) NOT NULL,

   --set salary to to accept decimal number
   salary DECIMAL NOT NULL,

   --set  department_id 
   department INT NOT NULL,
   
   --set PRIMARY KEY
   PRIMARY KEY(id)
);