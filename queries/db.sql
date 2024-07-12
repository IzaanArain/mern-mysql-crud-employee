
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

-- stored procedure - execute withing create procedure window
CREATE PROCEDURE `employee_db`.`usp_employee_add_or_edit` (
IN _id INT,
IN _name VARCHAR(45),
IN _employee_code VARCHAR(45),
IN _salary INT

)
BEGIN
	IF _id = 0 THEN
		INSERT INTO employee(name,employee_code,salary)
		VALUES (_name,_employee_code,_salary);
        
	ELSE
		UPDATE employee
        SET name = _name,
		employee_code = _employee_code,
        salary = _salary
        WHERE id = _id;
	END IF;
    
    SELECT ROW_COUNT() AS 'affectedRows';
END;
