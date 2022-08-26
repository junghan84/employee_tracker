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