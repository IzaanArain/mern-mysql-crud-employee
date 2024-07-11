
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) DEFAULT NULL,
    employee_code VARCHAR(45) DEFAULT NULL,
    salary INT DEFAULT NULL
    );

INSERT INTO employee(name,employee_code,salary) VALUES
("Samantha Mackenize","EMP97",80000),
("Layla Benn","EMP91",92000),
("Luis Alberto","EMP99",84000),
('Rishaan','EMP70',85000);

