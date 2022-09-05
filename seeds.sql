-- Department =======

INSERT INTO department (id, name) VALUES (1, 'Engineering');
INSERT INTO department (id, name) VALUES (2, 'Sales');
INSERT INTO department (id, name) VALUES (3, 'Finance');
INSERT INTO department (id, name) VALUES (4, 'Legal');
INSERT INTO department (id, name) VALUES (10, 'Human Rescource');

--ROLES ======

INSERT INTO role (title, salary, departmentID) VALUES ("Lead Engineer", 150000, 1);
INSERT INTO role (title, salary, departmentID) VALUES ("Engineer", 125000, 1);
INSERT INTO role (title, salary, departmentID) VALUES ("Sales Manager", 140000, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Online Sales Dep", 110000, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Sales Dep", 130000, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Comptroller", 170000, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Accountant", 135000, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Billing Coordiantor", 130000, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Lawyer", 160000, 4);
INSERT INTO role (title, salary, departmentID) VALUES ("Operations Manager", 145000, 5);
INSERT INTO role (title, salary, departmentID) VALUES ("HR Coordiantor", 135000, 10);

--EMPLOYEES ======
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('John', 'Lee',1, null );
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Jimmy', 'Lu',2, 1 );
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Jason', 'Kimee',3, null );
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Hwan', 'Yu',4, 3 );
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('William', 'Seo',5, 3 );
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Soon', 'So',6, null );
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Lali', 'Bae',7, 6 );
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Ruan', 'Choi',8, 6 );
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Young', 'Ha',9 null );
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Jae', 'Jin',10, null );
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Jammy', 'Ma',11, null );
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Kimmbel', 'Michael',2, 1 );
